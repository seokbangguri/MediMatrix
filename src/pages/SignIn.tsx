import { useState, FormEvent, } from "react";
import { Button, Heading } from "../components";
import signinBg from '../assets/signin-blob.svg'
import { auth } from "../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup';

//Component
const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();
  const handleSignIn = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);

      // User signed in successfully
      const user = userCredential.user;
      navigate('/')
    } catch (error) {
      //handle error
      console.error("Error signing in:", error);

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
        <form className="space-y-4 md:space-y-6" onSubmit={handleSignIn}>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">이메일</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" className="bg-stone-100 border border-gray-300 text-gray-900 sm:text-sm rounded-xs focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  " placeholder="name@company.com" required />
          </div>
          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-slate-900 ">비밀번호</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" placeholder="••••••••" className="bg-stone-100 border border-gray-300  sm:text-sm rounded-xs focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded  focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="remember" className="text-[#7a7a7a]">로그인 정보 저장</label>
              </div>
            </div>
            <a href="/" className="text-sm font-medium text-blue-600 hover:underline ">비밀번호를 잊어버리셨습니까?</a>
          </div>
          <Button apperance="primary" type="submit" styles="w-full text-center">로그인</Button>
          <p className="text-sm font-light text-[#7a7a7a]">
            계정이 없으십니까? <a href="/signup" className="font-medium text-blue-600 hover:underline ">회원가입</a>
          </p>
        </form>
      </div>
    </div>
  </div>;
};

export default SignIn;
