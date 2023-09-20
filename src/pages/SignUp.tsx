import { useState, FormEvent } from "react";
import { Button, Heading } from "../components";
import signinBg from '../assets/signin-blob.svg'
import { auth, db } from "../firebase/firebase";
import { collection, addDoc } from "firebase/firestore";
import {
    createUserWithEmailAndPassword
} from "firebase/auth";
import { Navigate, useNavigate } from "react-router-dom";


const SignUp = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [hospitalName, setHospitalName] = useState<string>("");
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const bgStyle = {
        backgroundImage: `url(${signinBg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% auto', // You can adjust this based on your needs
        // Other CSS properties for the container
        backgroundPosition: '0 500px',
        width: '100%',
        height: '100vh',
    };
    const handleSignUp = async (e: FormEvent) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("비밀번호와 확인 비밀번호가 일치하지 않습니다.");
            return;
        }
        try {
            // Create a new user with email and password
            await createUserWithEmailAndPassword(auth, email, password);
            // After successful signup, you can update the user's profile or store additional data
            const user = auth.currentUser;
            if (user) {
                // await user.updateProfile({
                //   displayName: hospitalName,
                // });
                // You can also save additional user data to Firestore or Realtime Database here
                // Example using Firestore:
                const userRef = await addDoc(collection(db, "users"), {
                    email: email,
                    hospitalName: hospitalName,
                    phoneNumber: phoneNumber,
                })
            }
            // Redirect or handle the signup success
            navigate('/')
            // For example, you can redirect to a different page or display a success message.
        } catch (error) {
            console.error("Error signing up:", error);
            // Handle error, display an error message, or log it
        }
    };

    return <div className="flex items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0" style={bgStyle}>
        <div className="w-[500px] bg-white rounded-lg drop-shadow-xl ">
            <div className="p-10 space-y-4 md:space-y-6 sm:p-8">
                <Heading tag='h3' className="text-center">
                    회원가입
                </Heading>
                <form className="space-y-4 md:space-y-6" onSubmit={handleSignUp}>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">이메일</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" className="bg-stone-100 border border-gray-300 text-gray-900 sm:text-sm rounded-xs focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  " placeholder="name@company.com" required />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-slate-900 ">비밀번호</label>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" placeholder="••••••••" className="bg-stone-100 border border-gray-300  sm:text-sm rounded-xs focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required />
                    </div>
                    <div>
                        <label htmlFor="confirmPassor" className="block mb-2 text-sm font-medium text-slate-900 ">비밀번호 확인</label>
                        <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type="password" name="confirmPassor" id="confirmPassor" placeholder="••••••••" className="bg-stone-100 border border-gray-300  sm:text-sm rounded-xs focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required />
                    </div>
                    <div>
                        <label htmlFor="hospital" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">병원 이름</label>
                        <input value={hospitalName} onChange={(e) => setHospitalName(e.target.value)} type="text" name="hospital" id="hospital" className="bg-stone-100 border border-gray-300 text-gray-900 sm:text-sm rounded-xs focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  " placeholder="Enter hospital name..." required />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">전화번호</label>
                        <input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} type="tel" name="phone" id="phone" pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}" className="bg-stone-100 border border-gray-300 text-gray-900 sm:text-sm rounded-xs focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  " placeholder="Enter phone number..." />
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
