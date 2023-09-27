import { Button, Heading } from "../components";
import signinBg from '../assets/signin-blob.svg'
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useState } from "react";
import { PiEyeBold, PiEyeClosedBold } from "react-icons/pi";

//Interface
interface SignUpValues {
    email: string;
    name: string;
    password: string;
    confirmPassword: string;
    hospitalName: string;
    phoneNumber?: string;
    role: string;
}
const getCharacterValidationError = (str: string) => {
    return `Your password must have at least 1 ${str} character`;
};
//Validation
const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email').required('Required'),
    //email: Yup.string().matches(/^[^@\s]+@[^@\s]+\.[^@\s]+$/, '이메일 형식에 맞지 않습니다.').required('이메일을 입력해주세요.'),
    name: Yup.string().min(2, 'Minimum 2 characters').required('Required'),
    password: Yup.string().min(8, 'Password must be at least 6 characters').max(16, 'Too long').matches(/[0-9]/, getCharacterValidationError("digit")).matches(/[a-z]/, getCharacterValidationError("lowercase"))
        .required('Required'),
    confirmPassword: Yup.string().required('Please retype your password').oneOf([Yup.ref('password')], 'Passwords must match'),
    hospitalName: Yup.string().required('Required'),
    phoneNumber: Yup.string()
        .matches(/^[0-9]{3}[0-9]{4}[0-9]{4}$/, 'Invalid phone number')
        .nullable()
        .notRequired(),
});

const bgStyle = {
    backgroundImage: `url(${signinBg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% auto',
    backgroundPosition: '0 500px',
    width: '100%',
    height: '100vh',
};
const SignUp: React.FC = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
    const togglePasswordVisibility = (type: 'password' | 'confirm') => {
        if (type === 'password') {
            setShowPassword(!showPassword);
        } else {
            setShowPasswordConfirm(!showPasswordConfirm);
        }
    };

    //initial value
    const initialValues: SignUpValues = {
        email: '',
        name: '',
        password: '',
        confirmPassword: '',
        hospitalName: '',
        phoneNumber: '',
        role: 'therapists',
    }

    // Handle signup
    const handleSignUp = async (values: SignUpValues, { setSubmitting }: FormikHelpers<SignUpValues>) => {
        const { email, password, hospitalName, phoneNumber, name, role } = values;
        try {
            // 전송할 데이터
            const userData = {
                email: email,
                name: name,
                password: password,
                hospitalName: hospitalName,
                phoneNumber: phoneNumber,
                role: role
            };

            // Axios를 사용하여 서버로 POST 요청 보내기
            const response = await axios.post('http://20.214.184.115:3001/signup', userData);

            // 서버 응답 확인
            if (response.status === 201) {
                console.log('회원가입 성공:', response.data);
                // 회원가입 성공 처리
                sessionStorage.setItem('name', name);
                window.location.href = "/"; // 회원가입이 성공하면 홈페이지로 이동
            } else {
                console.error('서버 응답 오류:', response.status);
                // 서버 응답에 따른 처리 (예: 에러 메시지 표시)
            }
        } catch (error) {
            console.error('회원가입 에러:', error);
            // 오류 처리 (예: 에러 메시지 표시)
        }
        setSubmitting(false);
    };

    return <div className="flex items-center justify-center px-6 mt-10 mx-auto md:h-screen lg:py-0" style={bgStyle}>
        <div className="w-[800px] bg-white rounded-lg drop-shadow-2xl ">
            <div className="p-10 space-y-4 md:space-y-6 sm:p-8">
                <Heading tag='h3' className="text-center">
                    회원가입
                </Heading>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSignUp}
                >

                    {({ isSubmitting }) => (
                        <Form className="w-full " >
                            <div className="flex flex-col gap-5 w-full">
                                <div className="flex w-full gap-6">
                                    <div className="w-1/2">
                                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">이름</label>
                                        <Field type="text" name="name" id="name" className="bg-stone-100 border border-gray-300 text-gray-900 sm:text-sm rounded-xs focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  " placeholder="이름...." required />
                                        <ErrorMessage name="name" component="div" className="text-red-700 text-sm" />
                                    </div>
                                    <div className="w-1/2">
                                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">이메일</label>
                                        <Field type="email" name="email" id="email" className="bg-stone-100 border border-gray-300 text-gray-900 sm:text-sm rounded-xs focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  " placeholder="name@company.com" required />
                                        <ErrorMessage name="email" component="div" className="text-red-700 text-sm" />
                                    </div>
                                </div>
                                <div className="flex w-full gap-6">
                                    <div className="w-1/2">
                                        <label htmlFor="phoneNumber" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">전화번호</label>
                                        <Field type="tel" name="phoneNumber" id="phoneNumber" pattern="[0-9]{3}[0-9]{4}[0-9]{4}" className="bg-stone-100 border border-gray-300 text-gray-900 sm:text-sm rounded-xs focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  " placeholder="Enter phone number..." />
                                        <ErrorMessage name="phoneNumber" component="div" className="text-red-700 text-sm" />
                                    </div>
                                    <div className="w-1/2">
                                        <label htmlFor="hospitalName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">병원 이름</label>
                                        <Field type="text" name="hospitalName" id="hospitalName" className="bg-stone-100 border border-gray-300 text-gray-900 sm:text-sm rounded-xs focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  " placeholder="Enter hospital name..." required />
                                        <ErrorMessage name="hospitalName" component="div" className="text-red-700 text-sm" />
                                    </div></div>
                                <div className="flex w-full gap-6">

                                    <div className="w-1/2">
                                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-slate-900 ">비밀번호</label>
                                        <div className="relative">
                                            <Field type={showPassword ? 'text' : 'password'} name="password" id="password" placeholder="••••••••" className="bg-stone-100 border border-gray-300  sm:text-sm rounded-xs focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required />
                                            <button onClick={() => togglePasswordVisibility('password')} type='button' className="p-1 text-lg absolute top-2 right-2 ">{showPassword ? <PiEyeBold /> : <PiEyeClosedBold />}</button>
                                        </div>
                                        <ErrorMessage name="password" component="div" className="text-red-700 text-sm" />
                                    </div>
                                    <div className="w-1/2">
                                        <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-slate-900 ">비밀번호 확인</label>
                                        <div className="relative"><Field type={showPasswordConfirm ? 'text' : 'password'} name="confirmPassword" id="confirmPassword" placeholder="••••••••" className="bg-stone-100 border border-gray-300  sm:text-sm rounded-xs focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required />
                                            <button onClick={() => togglePasswordVisibility('confirm')} type='button' className="p-1 text-lg absolute top-2 right-2 ">{showPasswordConfirm ? <PiEyeBold /> : <PiEyeClosedBold />}</button>
                                        </div><ErrorMessage name="confirmPassword" component="div" className="text-red-700 text-sm" />
                                    </div></div>
                                <div className="flex w-full gap-6">
                                    <div className="w-1/2">
                                        <label htmlFor="role" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">역할</label>
                                        <Field as="select" name="role" className="bg-stone-100 border border-gray-300 text-gray-900 sm:text-sm rounded-xs focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required>
                                            <option value="therapist">치료사</option>
                                            <option value="administrator">관리자</option>
                                        </Field>
                                    </div>
                                    <div className="w-1/2"></div>
                                </div>
                            </div>


                            <div className="mt-10 mb-6 text-center">
                                <Button apperance="primary" type="submit" styles="w-full text-center" disabled={isSubmitting}>회원가입</Button>
                            </div>
                            <p className="text-sm font-light text-[#7a7a7a] text-right">
                                계정이 있으십니까? <a href="/signin" className="font-medium text-blue-600 hover:underline "> 로그인</a>
                            </p>
                        </Form>
                    )}
                </Formik>

            </div>
        </div>
    </div>;;
};

export default SignUp;
