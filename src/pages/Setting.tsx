import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Button, Heading } from '../components'
import { useState, useEffect } from 'react';

//Interface
interface UpdateInfo {
    email: string;
    name: string;
    hospitalName: string;
    phoneNumber?: string;
}
interface UpdatePassword {
    password: string;
    confirmPassword: string;
}
const getCharacterValidationError = (str: string) => {
    return `Your password must have at least 1 ${str} character`;
};
//Validation
const infoValidationSchema = Yup.object({
    email: Yup.string().email('Invalid email'),
    //email: Yup.string().matches(/^[^@\s]+@[^@\s]+\.[^@\s]+$/, '이메일 형식에 맞지 않습니다.').required('이메일을 입력해주세요.'),
    name: Yup.string().min(2, 'Minimum 2 characters'),
    hospitalName: Yup.string(),
    phoneNumber: Yup.string()
        .matches(/^[0-9]{3}[0-9]{4}[0-9]{4}$/, 'Invalid phone number')
        .nullable()
        .notRequired(),
});
const passwordValidationSchema = Yup.object({
    password: Yup.string().min(8, 'Password must be at least 6 characters').max(16, 'Too long').matches(/[0-9]/, getCharacterValidationError("digit")).matches(/[a-z]/, getCharacterValidationError("lowercase"))
        .required('Required'),
    confirmPassword: Yup.string().required('Please retype your password').oneOf([Yup.ref('password')], 'Passwords must match'),

})

const Setting = () => {
    const [changePassword, setChangePassword] = useState<boolean>(false)
    //initial value
    const infoInitialValues: UpdateInfo = {
        email: '',
        name: '',
        hospitalName: '',
        phoneNumber: '',
    }
    const passwordInitialValues: UpdatePassword = {
        password: '',
        confirmPassword: '',
    }
        // API 요청 보내기
        const fetchData = async () => {
            try {
                const data = {
                    email: sessionStorage.getItem('email'),
                    role: sessionStorage.getItem('role'),
                };

                const response = await axios.post('http://20.214.184.115:3001/mypage', data);
                console.log(response.data);
            } catch (error) {
                console.error('API 요청 에러:', error);
                // 오류 처리 (예: 에러 메시지 표시)
            }
        };
        fetchData();

    // Handle update info
    const handleUpdate = async (values: any, { setSubmitting }: any) => {
        const { email, hospitalName, phoneNumber, name, role } = values;
        try {
            // 전송할 데이터
            const userData = {
                email: email,
                name: name,
                hospitalName: hospitalName,
                phoneNumber: phoneNumber,
                role: role
            };
            console.log(userData);

            // Axios를 사용하여 서버로 POST 요청 보내기
            const response = await axios.post('http://20.214.184.115:3001/updatedata', userData);

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
    //Handle reset password
    const handleResetPassword = async (values: any, { setSubmitting }: any) => {
        const { confirmPassword, password, } = values;
        try {
            // 전송할 데이터
            const userData = {
                password: password,
                confirmPassword: confirmPassword
            };
            console.log(userData);

            // Axios를 사용하여 서버로 POST 요청 보내기
            const response = await axios.put('http://20.214.184.115:3001/signup', userData);

            // 서버 응답 확인
            if (response.status === 201) {
                console.log('회원가입 성공:', response.data);
                // 회원가입 성공 처리
                // sessionStorage.setItem('name', name);
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

    return (
        <div className="flex  px-6 py-2 mt-[150px] mx-auto h-fit" >
            <div className="w-[900px] bg-white rounded-sm py-5 px-8 drop-shadow-2xl flex flex-col ">
                <div className="flex flex-col items-start pb-5 border-b border-[#cecece]">
                    <Heading tag='h2'>Setting</Heading>
                    <span className='mt-2 text-xl '>Profile</span>
                </div>
                <div className="w-full flex">
                    <div className="w-2/6 py-5 px-2 border-r border-[#cecece]">
                        <h6 className='pb-2 text-md text-semibold'>Personal info</h6>
                        <div className=" flex flex-col gap-5 pb-5 border-b border-[#cecece] ">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-900 dark:text-white py-2.5">이름</label>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-white py-2.5">이메일</label>
                            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-900 dark:text-white py-2.5">전화번호</label>
                            <label htmlFor="hospitalName" className="block text-sm font-medium text-gray-900 dark:text-white py-2.5">병원 이름</label>
                        </div>
                        <button onClick={() => setChangePassword(!changePassword)} className='pt-5 underline text-blue-400'>Change Password</button>
                    </div>
                    <div className="w-4/6 py-5 px-7 flex flex-col">
                        <Formik
                            initialValues={infoInitialValues}
                            validationSchema={infoValidationSchema}
                            onSubmit={handleUpdate}
                        >
                            {({ isSubmitting }) => (
                                <Form className="w-full pb-5 border-b border-[#cecece]" >
                                    <div className="flex flex-col gap-5 w-full">
                                        <p className='text-xs'>
                                            Type on the input boxes to change your info, and click save button.
                                        </p>
                                        <div className="">
                                            <Field type="text" name="name" id="name" className="bg-stone-100 border border-[#888] text-gray-900 sm:text-sm rounded-xs focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  " placeholder="이름" required />
                                            <ErrorMessage name="name" component="div" className="text-red-700 text-sm" />
                                        </div>
                                        <div className="">
                                            <Field type="email" name="email" id="email" className="bg-stone-100 border border-[#888] text-gray-900 sm:text-sm rounded-xs focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  " placeholder="이메일" required />
                                            <ErrorMessage name="email" component="div" className="text-red-700 text-sm" />
                                        </div>
                                        <div className="">
                                            <Field type="tel" name="phoneNumber" id="phoneNumber" className="bg-stone-100 border border-[#888] text-gray-900 sm:text-sm rounded-xs focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  " placeholder="전화번호" required />
                                            <ErrorMessage name="phoneNumber" component="div" className="text-red-700 text-sm" />
                                        </div>
                                        <div className="">
                                            <Field type="text" name="hospitalName" id="hospitalName" className="bg-stone-100 border border-[#888] text-gray-900 sm:text-sm rounded-xs focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  " placeholder="병원 이름" required />
                                            <ErrorMessage name="hospitalName" component="div" className="text-red-700 text-sm" />
                                        </div>
                                        <div className="flex items-center justify-center gap-8">
                                            <a href="/signin">
                                                <Button styles="text-lg font-semibold rounded-xs text-black border-2 border-red-300 inline-block min-w-[130px] py-2 hover:opacity-75 uppercase" >Cancel</Button>
                                            </a>
                                            <a href="/signup">
                                                <Button apperance="custom" styles="uppercase" >Save</Button>
                                            </a>
                                        </div>
                                        <p></p>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                        {changePassword &&
                            <Formik
                                initialValues={passwordInitialValues}
                                validationSchema={passwordValidationSchema}
                                onSubmit={handleResetPassword}
                            >
                                {({ isSubmitting }) => (
                                    <Form className="w-full pt-5" >
                                        <div className="flex flex-col gap-5 w-full">
                                            <div>
                                                <h6 className='pb-2 text-lg text-semibold'>Change password</h6>
                                                <p className='text-xs'>
                                                    Password must have a Good or Strong rating. Password must be at least 8 characters long.
                                                    Good password contain either a combination of uppercase and lowercase letters or a combination of letters and one digit.
                                                    Strong passwords contain either a combination of letters and more than one digit or special characters.
                                                </p>
                                            </div>
                                            <div className="flex gap-5">
                                                <div className="w-1/2">
                                                    <Field type="password" name="password" id="password" className="bg-stone-100 border border-[#888] text-gray-900 sm:text-sm rounded-xs focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  " placeholder="Old password" required />
                                                    <ErrorMessage name="password" component="div" className="text-red-700 text-sm" />
                                                </div>
                                                <div className="w-1/2">
                                                    <Field type="password" name="confirmPassword" id="confirmPassword" className="bg-stone-100 border border-[#888] text-gray-900 sm:text-sm rounded-xs focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  " placeholder="New password" required />
                                                    <ErrorMessage name="confirmPassword" component="div" className="text-red-700 text-sm" />
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-center gap-8">
                                                <a href="/signin">
                                                    <Button styles="text-lg font-semibold rounded-xs text-black border-2 border-red-300 inline-block min-w-[130px] py-2 hover:opacity-75 uppercase" >Cancel</Button>
                                                </a>
                                                <a href="/signup">
                                                    <Button apperance="custom" styles="uppercase" >Change</Button>
                                                </a>
                                            </div>
                                        </div>

                                    </Form>
                                )}
                            </Formik>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Setting