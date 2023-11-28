import { Button, Heading } from "../components";
import axios from 'axios';
import * as Yup from 'yup';
import { Formik, Field, ErrorMessage, FormikHelpers } from 'formik';
import { PiEyeBold, PiEyeClosedBold } from 'react-icons/pi'
import { useState, useEffect } from 'react';
import { verifyToken } from '../auth/auth'
import { SignInValuesInterface } from "../interface/pagesProps";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { showErrorNoConfirm, showSuccessConfirm } from "../utils/errorHandling";
import { signupBgStyle } from "../styles/generalStyles";

const apiUrl = process.env.REACT_APP_API_USERS;

//Component
const SignIn = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    verifyToken().then(decodedToken => {
      if (decodedToken) {
        showSuccessConfirm(`${t('success_signup_title')}`, `${t('success_signup_text')}`).then(() => {
          navigate("/");
        });
      }
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const validationSchema = Yup.object({
    email: Yup.string().email(`${t('email_warn')}`).required(`${t('email_required')}`),
    password: Yup.string().required(`${t('password_required')}`),
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignIn = async ({ email, password }: SignInValuesInterface, { setSubmitting }: FormikHelpers<SignInValuesInterface>) => {
    try {
      // 전송할 데이터
      const userData = {
        email: email,
        password: password,
      };

      // Axios를 사용하여 서버로 POST 요청 보내기
      const response = await axios.post(apiUrl + '/signin', userData);

      // 서버 응답 확인
      if (response.status === 200) {
        sessionStorage.setItem('token', response.data.token);
        window.location.href = '/';
      } else {
        console.error('서버 응답 오류:');
        showErrorNoConfirm(`${t('signin_fail_text')}`)
      }
    } catch (error: any) {
      console.error('로그인 에러:');
      showErrorNoConfirm(`${t('signin_fail_text')}`)
    } finally {
      setSubmitting(false);
    }
  };

  return <div className="flex items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0" style={signupBgStyle}>
    <div className="w-[500px] bg-white rounded-lg drop-shadow-2xl ">
      <div className="p-10 space-y-4 md:space-y-6 sm:p-8">
        <Heading tag='h3' className="text-center">
          {t('signin')}
        </Heading>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSignIn}
        >
          {({ handleSubmit }) => (
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-slate-900">{t('email')}</label>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  autoComplete='email'
                  className="bg-stone-100 border border-gray-300 text-gray-900 sm:text-sm rounded-xs focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="name@company.com"
                />
                {/* Display validation error if any */}
                <ErrorMessage name="email" component="div" className="text-red-600 text-sm" />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-slate-900 ">{t('password')}</label>
                <div className="relative">
                  <Field
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    id="password"
                    autoComplete="current-password"
                    placeholder="••••••••"
                    className="bg-stone-100 border border-gray-300 sm:text-sm rounded-xs focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  />
                  <button onClick={togglePasswordVisibility} type='button' className="p-1 text-lg absolute top-2 right-2 ">{showPassword ? <PiEyeBold /> : <PiEyeClosedBold />}</button>
                </div>
                {/* Display validation error if any */}
                <ErrorMessage name="password" component="div" className="text-red-600 text-sm" />
              </div>
              <Button appearance="primary" type="button" styles="w-full text-center">{t('signin')}</Button>
              <p className="text-sm font-light text-[#7a7a7a]">
                {t('noaccaunt')} <Link to="/signup" className="font-medium text-blue-600 hover:underline ">{t('signup')}</Link>
              </p>
            </form>
          )}

        </Formik>
      </div>
    </div>
  </div>;
};

export default SignIn;
