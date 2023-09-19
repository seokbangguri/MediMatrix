import React from "react";
import { Button, Heading } from "../components";
import signinBg from '../assets/signin-blob.svg'
const SignUp = () => {
  const bgStyle = {
    backgroundImage: `url(${signinBg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% auto', // You can adjust this based on your needs
    // Other CSS properties for the container
    backgroundPosition: '0 500px',
    width: '100%',
    height: '100vh',
  };
  return <div className="flex items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0" style={bgStyle}>
  <div className="w-[500px] bg-white rounded-lg drop-shadow-xl ">
        <div className="p-10 space-y-4 md:space-y-6 sm:p-8">
            <Heading tag='h3' className="text-center">
                회원가입
            </Heading>
            <form className="space-y-4 md:space-y-6" action="#">
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">이메일</label>
                    <input type="email" name="email" id="email" className="bg-stone-100 border border-gray-300 text-gray-900 sm:text-sm rounded-xs focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  " placeholder="name@company.com" required/>
                </div>
                <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-slate-900 ">비밀번호</label>
                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-stone-100 border border-gray-300  sm:text-sm rounded-xs focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required/>
                </div>
                <div>
                    <label htmlFor="confirmPassor" className="block mb-2 text-sm font-medium text-slate-900 ">비밀번호 확인</label>
                    <input type="password" name="confirmPassor" id="confirmPassor" placeholder="••••••••" className="bg-stone-100 border border-gray-300  sm:text-sm rounded-xs focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required/>
                </div>
                <div>
                    <label htmlFor="hospital" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">병원 이름</label>
                    <input type="text" name="hospital" id="hospital" className="bg-stone-100 border border-gray-300 text-gray-900 sm:text-sm rounded-xs focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  " placeholder="Enter hospital name..." required/>
                </div>
                <div>
                    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">전화번호</label>
                    <input type="tel" name="phone" id="phone" pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}" className="bg-stone-100 border border-gray-300 text-gray-900 sm:text-sm rounded-xs focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  " placeholder="Enter phone number..."/>
                </div>
                
                <Button apperance="primary" type="submit" styles="w-full text-center">회원가입</Button>
                <p className="text-sm font-light text-[#7a7a7a]">
                    계정이 있으십니까? <a href="/signin" className="font-medium text-blue-600 hover:underline "> 로그인</a>
                </p>
            </form>
        </div>
    </div>
</div>;;
};

export default SignUp;
