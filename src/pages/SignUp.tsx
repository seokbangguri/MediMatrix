import { Button, Heading } from "../components";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useState, useEffect } from "react";
import { PiEyeBold, PiEyeClosedBold } from "react-icons/pi";
import { verifyToken } from '../auth/auth'
import { SignUpValuesInterface } from "../interface/pagesProps";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { signupBgStyle } from "../styles/generalStyles";
import { showError } from "../utils/errorHandling";
export { showError } from '../utils/errorHandling'
const apiUrl = process.env.REACT_APP_API_USERS;

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

const SignUp: React.FC = () => {
    const { t } = useTranslation();
    const navigate = useNavigate(); const [showPassword, setShowPassword] = useState(false);
    const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

    useEffect(() => {
        verifyToken().then(decodedToken => {
            if (decodedToken) {
                Swal.fire({
                    title: `${t('success_signup_title')}`,
                    text: `${t('success_signup_text')}`,
                    icon: 'info',
                    confirmButtonText: `${t('confirm')}`,
                }).then(() => {
                    navigate('/');
                });
            }
        });
    }, [navigate, t]);


    const togglePasswordVisibility = (type: 'password' | 'confirm') => {
        if (type === 'password') {
            setShowPassword(!showPassword);
        } else {
            setShowPasswordConfirm(!showPasswordConfirm);
        }
    };

    //initial value
    const initialValues: SignUpValuesInterface = {
        email: '',
        name: '',
        password: '',
        confirmPassword: '',
        hospitalName: '',
        phoneNumber: '',
        role: 'therapists',
    }

    // Handle signup
    const handleSignUp = async ({ email, password, hospitalName, phoneNumber, name, role }: SignUpValuesInterface, { setSubmitting }: FormikHelpers<SignUpValuesInterface>) => {
        try {
            // Data to be sent
            const userData = { email, password, hospitalName, phoneNumber, name, role };

            const response = await axios.post(`${apiUrl}/signup`, userData);

            if (response.status === 201) {
                const authToken = response.headers['x-auth-token']
                sessionStorage.setItem('token', authToken);
                navigate('/');
            } else {
                console.error('Server Response Error:', response.status);
                showError(`${t('signup_fail_text')}`)
            }
        } catch (error: any) {
            console.error('Sign-Up Error:', error.message || 'Unknown error');
            showError(`${t('signup_fail_text')}`)
        }
        setSubmitting(false);
    };

    return <div className="flex items-center justify-center px-6 mt-10 mx-auto md:h-screen lg:py-0" style={signupBgStyle}>
        <div className="w-[800px] bg-white rounded-lg drop-shadow-2xl ">
            <div className="p-10 space-y-4 md:space-y-6 sm:p-8">
                <Heading tag='h3' className="text-center">
                    {t('signup')}
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
                                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-slate-900">{t('labelname')}</label>
                                        <Field type="text" name="name" id="name" className="bg-stone-100 border border-slate-300 text-slate-900 sm:text-sm rounded-xs focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  " placeholder="Enter a your full name...." required />
                                        <ErrorMessage name="name" component="div" className="text-red-700 text-sm" />
                                    </div>
                                    <div className="w-1/2">
                                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-slate-900">{t('email')}</label>
                                        <Field type="email" name="email" id="email" className="bg-stone-100 border border-slate-300 text-slate-900 sm:text-sm rounded-xs focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  " placeholder="name@company.com" required />
                                        <ErrorMessage name="email" component="div" className="text-red-700 text-sm" />
                                    </div>
                                </div>
                                <div className="flex w-full gap-6">
                                    <div className="w-1/2">
                                        <label htmlFor="phoneNumber" className="block mb-2 text-sm font-medium text-slate-900">{t('phoneNumber')}</label>
                                        <Field type="tel" name="phoneNumber" id="phoneNumber" pattern="[0-9]{3}[0-9]{4}[0-9]{4}" className="bg-stone-100 border border-slate-300 text-slate-900 sm:text-sm rounded-xs focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  " placeholder="Enter phone number..." />
                                        <ErrorMessage name="phoneNumber" component="div" className="text-red-700 text-sm" />
                                    </div>
                                    <div className="w-1/2">
                                        <label htmlFor="hospitalName" className="block mb-2 text-sm font-medium text-slate-900">{t('hospitalName')}</label>
                                        <Field type="text" name="hospitalName" id="hospitalName" className="bg-stone-100 border border-slate-300 text-slate-900 sm:text-sm rounded-xs focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  " placeholder="Enter hospital name..." required />
                                        <ErrorMessage name="hospitalName" component="div" className="text-red-700 text-sm" />
                                    </div></div>
                                <div className="flex w-full gap-6">

                                    <div className="w-1/2">
                                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-slate-900 ">{t('password')}</label>
                                        <div className="relative">
                                            <Field type={showPassword ? 'text' : 'password'} name="password" id="password" placeholder="••••••••" className="bg-stone-100 border border-slate-300  sm:text-sm rounded-xs focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required />
                                            <button onClick={() => togglePasswordVisibility('password')} type='button' className="p-1 text-lg absolute top-2 right-2 ">{showPassword ? <PiEyeBold /> : <PiEyeClosedBold />}</button>
                                        </div>
                                        <ErrorMessage name="password" component="div" className="text-red-700 text-sm" />
                                    </div>
                                    <div className="w-1/2">
                                        <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-slate-900 ">{t('passwordCheck')}</label>
                                        <div className="relative">
                                            <Field type={showPasswordConfirm ? 'text' : 'password'} name="confirmPassword" id="confirmPassword" placeholder="••••••••" className="bg-stone-100 border border-slate-300  sm:text-sm rounded-xs focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required />
                                            <button onClick={() => togglePasswordVisibility('confirm')} type='button' className="p-1 text-lg absolute top-2 right-2 ">{showPasswordConfirm ? <PiEyeBold /> : <PiEyeClosedBold />}</button>
                                        </div><ErrorMessage name="confirmPassword" component="div" className="text-red-700 text-sm" />
                                    </div></div>
                                <div className="flex w-full gap-6">
                                    <div className="w-1/2">
                                        <label htmlFor="role" className="block mb-2 text-sm font-medium text-slate-900 ">{t('role')}</label>
                                        <Field as="select" name="role" className="bg-stone-100 border border-slate-300 text-slate-900 sm:text-sm rounded-xs focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required>
                                            <option value="therapists">{t('therapist')}</option>
                                            <option value="administrators">{t('administrator')}</option>
                                        </Field>
                                    </div>
                                    <div className="w-1/2"></div>
                                </div>
                            </div>


                            <div className="mt-10 mb-6 text-center">
                                <Button appearance="primary" type="submit" styles="w-full text-center" disabled={isSubmitting}>{t('signup')}</Button>
                            </div>
                            <p className="text-sm font-light text-[#7a7a7a] text-right">
                                {t('haveaccaunt')} <Link to="/signin" className="font-medium text-blue-600 hover:underline "> {t('signin')}</Link>
                            </p>
                        </Form>
                    )}
                </Formik>

            </div>
        </div>
    </div>
};

export default SignUp;
