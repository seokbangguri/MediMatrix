import { Button, Heading } from "../components";
import signinBg from '../assets/signin-blob.svg'
import { auth } from "../firebase/firebase";
import { signInWithEmailAndPassword, Auth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup';
import { Formik, Field, ErrorMessage, FormikHelpers } from 'formik';
import { useState } from "react";

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
  const navigate = useNavigate();
  const [signInError, setSignInError] = useState<string | null>(null)

  const handleSignIn = async (
    values: SignInValues,
    { setSubmitting }: FormikHelpers<SignInValues>
  ) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth as Auth, 
        values.email,
        values.password
      );
      // User signed in successfully
      const user = userCredential.user;
      navigate('/');
    } catch (error: any) {
      // Handle error
      console.error("Error signing in:", error);
      if (error) {
        if (error.code === "auth/wrong-password" || error.code === "auth/invalid-login-credentials") {
          setSignInError("잘못된 이메일 또는 비밀번호입니다.");
        } else if (error.code === 'auth/user-not-found') {
          setSignInError("user not found");
        } else if (error.code === 'auth/too-many-requests') {
          setSignInError("too many request, try again later");
        } else {
          setSignInError("로그인 중 오류가 발생했습니다.");
        }
      } else {
        // Handle other types of errors here
        setSignInError("로그인 중 오류가 발생했습니다.");
      }
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
                <Field
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="current-password"
                  placeholder="••••••••"
                  className="bg-stone-100 border border-gray-300 sm:text-sm rounded-xs focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                />
                {/* Display validation error if any */}
                <ErrorMessage name="password" component="div" className="text-red-600 text-sm" />
              </div>
              {signInError && <div className="text-red-600 text-sm">{signInError}</div>}
              <Button apperance="primary" type="button" styles="w-full text-center">로그인</Button>
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
