import { Button, Heading } from "../components";
import signinBg from '../assets/signin-blob.svg'
import axios from 'axios';
import * as Yup from 'yup';
import { Formik, Field, ErrorMessage, FormikHelpers } from 'formik';
import Swal from "sweetalert2";
import { PiEyeBold, PiEyeClosedBold } from 'react-icons/pi'
import { useState, useEffect } from 'react';
import { verifyToken } from '../auth/auth'

const apiUrl = process.env.REACT_APP_API_URL;

const validationSchema = Yup.object({
  email: Yup.string().email("유효한 이메일을 입력하세요").required("이메일은 필수 항목입니다"),
  password: Yup.string().required("비밀번호는 필수 항목입니다"),
});
interface SignInValues {
  email: string;
  password: string;
}
//Component
const SignIn = () => {
  useEffect(() => {
    verifyToken().then(decodedToken => {
    if(decodedToken) {
      Swal.fire({
        title: '이미 로그인되어 있습니다!',
        text: '확인을 누르면 홈페이지로 이동합니다.',
        icon: 'info',
        confirmButtonText: '확인',
      }).then(() => {
        window.location.href = "/";
      });
    }
  });
    
  },[]);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignIn = async (values: SignInValues, { setSubmitting }: FormikHelpers<SignInValues>) => {
    const { email, password } = values;
    try {
      // 전송할 데이터
      const userData = {
        email: email,
        password: password,
      };

      // Axios를 사용하여 서버로 POST 요청 보내기
      const response = await axios.post(apiUrl+'/signin', userData);

      // 서버 응답 확인
      if (response.status === 200) {
        sessionStorage.setItem('token', response.data.token);
        window.location.href = "/";
      } else {
        console.error('서버 응답 오류:', response.status);
        Swal.fire({
          title: "로그인 에러",
          text: response.statusText,
          icon: "error",
        });
      }
    } catch (error: any) {
      console.error('로그인 에러:', error);
      Swal.fire({
        title: "로그인 에러",
        text: error.response.data.error,
        icon: "error",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const bgStyle = {
    backgroundImage: `url(${signinBg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% auto',
    backgroundPosition: '0 500px',
    width: '100%',
    height: '100vh',
  };
  return <div className="flex items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0" style={bgStyle}>
    <div className="w-[500px] bg-white rounded-lg drop-shadow-2xl ">
      <div className="p-10 space-y-4 md:space-y-6 sm:p-8">
        <Heading tag='h3' className="text-center">
          로그인
        </Heading>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSignIn}
        >
          {({ handleSubmit }) => (
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">이메일</label>
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
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-slate-900 ">비밀번호</label>
                <div className="relative">
                <Field
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  id="password"
                  autoComplete="current-password"
                  placeholder="••••••••"
                  className="bg-stone-100 border border-gray-300 sm:text-sm rounded-xs focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                />
                <button onClick={togglePasswordVisibility}  type='button' className="p-1 text-lg absolute top-2 right-2 ">{showPassword ? <PiEyeBold/> : <PiEyeClosedBold/>}</button>
                </div>
                {/* Display validation error if any */}
                <ErrorMessage name="password" component="div" className="text-red-600 text-sm" />
              </div>
              <Button appearance="primary" type="button" styles="w-full text-center">로그인</Button>
              <p className="text-sm font-light text-[#7a7a7a]">
                계정이 없으십니까? <a href="/signup" className="font-medium text-blue-600 hover:underline ">회원가입</a>
              </p>
            </form>
          )}

        </Formik>
      </div>
    </div>
  </div>;
};

export default SignIn;
