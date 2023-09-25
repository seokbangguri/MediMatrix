import { useState, FormEvent } from "react";
import { Button, Heading } from "../components";
import signinBg from '../assets/signin-blob.svg'
import { auth, db } from "../firebase/firebase";
import { collection, addDoc } from "firebase/firestore";
import {
    createUserWithEmailAndPassword
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';

//Interface
interface SignUpValues {
    email: string;
    password: string;
    confirmPassword: string;
    hospitalName: string;
    phoneNumber?: string;
}
const getCharacterValidationError = (str: string) => {
    return `Your password must have at least 1 ${str} character`;
};
//Validation
const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email').required('Required'),
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
    const navigate = useNavigate();

    //initial value
    const initialValues: SignUpValues = {
        email: '',
        password: '',
        confirmPassword: '',
        hospitalName: '',
        phoneNumber: ''
    }
    //handle signin
    const handleSignUp = async (values: SignUpValues, { setSubmitting }: FormikHelpers<SignUpValues>) => {
        const { email, password, hospitalName, phoneNumber } = values;
        try {
            // Create a new user with email and password
            await createUserWithEmailAndPassword(auth, email, password);
            // After successful signup, you can update the user's profile or store additional data
            const user = auth.currentUser;
            if (user) {
                // await user.updateProfile({
                //   displayName: hospitalName,
                // });
                const userRef = await addDoc(collection(db, "users"), {
                    email: email,
                    hospitalName: hospitalName,
                    phoneNumber: phoneNumber,
                })
            }
            // Redirect
            navigate('/')

        } catch (error) {
            console.error("Error signing up:", error);
            // Handle error, display an error message, or log it
        }
        setSubmitting(false);
    };

    return <div className="flex items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0" style={bgStyle}>
        <div className="w-[500px] bg-white rounded-lg drop-shadow-xl ">
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
                        <Form className="space-y-4 md:space-y-6" >
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">이메일</label>
                                <Field type="email" name="email" id="email" className="bg-stone-100 border border-gray-300 text-gray-900 sm:text-sm rounded-xs focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  " placeholder="name@company.com" required />
                                <ErrorMessage name="email" component="div" className="text-red-700 text-sm" />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-slate-900 ">비밀번호</label>
                                <Field type="password" name="password" id="password" placeholder="••••••••" className="bg-stone-100 border border-gray-300  sm:text-sm rounded-xs focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required />
                                <ErrorMessage name="password" component="div" className="text-red-700 text-sm" />
                            </div>
                            <div>
                                <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-slate-900 ">비밀번호 확인</label>
                                <Field type="password" name="confirmPassword" id="confirmPassword" placeholder="••••••••" className="bg-stone-100 border border-gray-300  sm:text-sm rounded-xs focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required />
                                <ErrorMessage name="confirmPassword" component="div" className="text-red-700 text-sm" />
                            </div>
                            <div>
                                <label htmlFor="hospitalName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">병원 이름</label>
                                <Field type="text" name="hospitalName" id="hospitalName" className="bg-stone-100 border border-gray-300 text-gray-900 sm:text-sm rounded-xs focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  " placeholder="Enter hospital name..." required />
                                <ErrorMessage name="hospitalName" component="div" className="text-red-700 text-sm" />
                            </div>
                            <div>
                                <label htmlFor="phoneNumber" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">전화번호</label>
                                <Field type="tel" name="phoneNumber" id="phoneNumber" pattern="[0-9]{3}[0-9]{4}[0-9]{4}" className="bg-stone-100 border border-gray-300 text-gray-900 sm:text-sm rounded-xs focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  " placeholder="Enter phone number..." />
                                <ErrorMessage name="phoneNumber" component="div" className="text-red-700 text-sm" />
                            </div>
                            <Button apperance="primary" type="submit" styles="w-full text-center" disabled={isSubmitting}>회원가입</Button>
                            <p className="text-sm font-light text-[#7a7a7a]">
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
