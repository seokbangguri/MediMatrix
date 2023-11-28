import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import axios from 'axios';
import { Button, Heading } from '../components'
import { useState, useEffect } from 'react';
import { verifyToken } from '../auth/auth';
import { UpdateInfoInterface, UpdatePasswordInterface } from '../interface/pagesProps';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { showError } from './SignUp';
import { showErrorNoConfirm, showSuccess, showWarning } from '../utils/errorHandling';

const apiUrl = process.env.REACT_APP_API_USERS;

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
    password: Yup.string().min(6, 'Password must be at least 6 characters').max(16, 'Too long').matches(/[0-9]/, getCharacterValidationError("digit")).matches(/[a-z]/, getCharacterValidationError("lowercase"))
        .required('Required'),
    confirmPassword: Yup.string().required('Please retype your password'),

})

const Setting = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [changePassword, setChangePassword] = useState<boolean>(false)
    const [role, setRole] = useState('');
    const [initialFormValues, setInitialFormValues] = useState<UpdateInfoInterface>({
        email: '',
        name: '',
        hospitalName: '',
        phoneNumber: '',
    });
    //initial value
    const infoInitialValues: UpdateInfoInterface = {
        email: initialFormValues.email,
        name: initialFormValues.name,
        hospitalName: initialFormValues.hospitalName,
        phoneNumber: initialFormValues.phoneNumber,
    }
    const passwordInitialValues: UpdatePasswordInterface = {
        password: '',
        confirmPassword: '',
    }

    useEffect(() => {
        verifyToken().then(decodedToken => {
            setRole(decodedToken.role);
            if (decodedToken) {
                const fetchData = async () => {
                    try {
                        const data = {
                            email: decodedToken.email,
                            role: decodedToken.role,
                        };
                        const response = await axios.post(apiUrl + '/setting', data);
                        setInitialFormValues(response.data);
                    } catch (error) {
                        console.error('API 요청 에러:');
                        showError(`${t('error')}`, `${t('back_main')}`).then(() => {
                            navigate('/');
                        });
                    }
                };
                fetchData();
            } else {
                showError(`${t('error_invalid')}`, `${t('back_main')}`).then(() => {
                    navigate('/');
                });
            }
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Handle update info
    const handleUpdate = async (values: any, { setSubmitting }: any) => {
        const { email, hospitalName, phoneNumber, name } = values;
        const updatedEmail = email || initialFormValues.email;
        const updatedHospitalName = hospitalName || initialFormValues.hospitalName;
        const updatedPhoneNumber = phoneNumber || initialFormValues.phoneNumber;
        const updatedName = name || initialFormValues.name;

        if (email !== '' || hospitalName !== '' || phoneNumber !== '' || name !== '') {
            Swal.fire({
                title: '정보를 수정 하시겠습니까?',
                text: "수정 후 되돌릴 수 없습니다!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: `${t('modify')}`,
                cancelButtonText: `${t('cancel')}`
            }).then(async (result) => {
                if (result.isConfirmed) {
                    try {
                        const updateData = {
                            email: updatedEmail,
                            name: updatedName,
                            hospitalName: updatedHospitalName,
                            phoneNumber: updatedPhoneNumber,
                            role: role
                        };

                        const response = await axios.post(apiUrl + '/updateUserData', updateData);

                        if (response.status === 200) {
                            sessionStorage.setItem('token', response.data.token);
                            showSuccess(`${t('you_are_done')}`).then(() => {
                                window.location.reload();
                            });
                        } else {
                            showErrorNoConfirm(response.status)
                            console.error('서버 응답 오류:');
                        }
                    } catch (error) {
                        showErrorNoConfirm(`${t('error_rised')}`)
                        console.error('정보 수정 에러:');
                    }
                    setSubmitting(false);

                }
            })
        } else {
            showWarning(`${t('no_changes')}`)
        }
    };
    //Handle reset password
    const handleResetPassword = async ({ confirmPassword, password }: any, { setSubmitting }: any) => {
        try {
            // 전송할 데이터
            const userData = {
                currentPW: password,
                newPW: confirmPassword,
                email: sessionStorage.getItem('email'),
                role: sessionStorage.getItem('role'),
            };

            // Axios를 사용하여 서버로 POST 요청 보내기
            const response = await axios.post(apiUrl + '/updatePassword', userData);

            // 서버 응답 확인
            if (response.status === 200) {
                showSuccess(`${t('password_changed')}`).then(() => {
                    window.location.reload();
                });
            } else {
                showErrorNoConfirm(response.status)
                console.error('서버 응답 오류:');
            }
        } catch (error) {
            showErrorNoConfirm(`${t('error_rised')}`)
            console.error('비밀번호 변경 에러:');
        }
        setSubmitting(false);
    };

    return (
        <div className="flex  px-6 py-2 my-[150px] mx-auto h-fit" >
            <div className="w-[900px] bg-white rounded-sm py-5 px-8 drop-shadow-2xl flex flex-col ">
                <div className="flex flex-col items-start pb-5 border-b border-[#cecece]">
                    <Heading tag='h2'>{`${t('mypage')}`}</Heading>
                    <span className='mt-2 text-xl '>{`${t('profil')}`}</span>
                </div>
                <div className="w-full flex">
                    <div className="w-2/6 py-5 px-2 border-r border-[#cecece]">
                        <h6 className='pb-2 text-md text-semibold'>{`${t('user_info')}`}</h6>
                        <div className=" flex flex-col gap-5 pb-5 border-b border-[#cecece] ">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-900 py-2.5">{`${t('labelname')}`}</label>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-900 py-2.5">{`${t('email')}`}<span className='text-xs text-red-500'>(cannot change)</span></label>
                            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-900 py-2.5">{`${t('phoneNumber')}`}</label>
                            <label htmlFor="hospitalName" className="block text-sm font-medium text-gray-900 py-2.5">{`${t('hospitalName')}`}</label>
                        </div>
                        <button onClick={() => setChangePassword(!changePassword)} className='pt-5 underline text-blue-400'>{`${t('password_change')}`}</button>
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
                                            {`${t('setting_text')}`}
                                        </p>
                                        <div className="">
                                            <Field type="text" name="name" id="name" className="bg-white border border-[#888] text-gray-900 sm:text-sm rounded-xs focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  " placeholder={initialFormValues.name} />
                                            <ErrorMessage name="name" component="div" className="text-red-700 text-sm" />
                                        </div>
                                        <div className="">
                                            <Field type="email" name="email" id="email" className="bg-stone-100 placeholder:text-slate-600 border border-[#888] text-gray-900 sm:text-sm rounded-xs block w-full p-2.5  " placeholder={initialFormValues.email} readOnly />
                                            <ErrorMessage name="email" component="div" className="text-red-700 text-sm" />
                                        </div>
                                        <div className="">
                                            <Field type="tel" name="phoneNumber" id="phoneNumber" className="bg-white border border-[#888] text-gray-900 sm:text-sm rounded-xs focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  " placeholder={initialFormValues.phoneNumber} />
                                            <ErrorMessage name="phoneNumber" component="div" className="text-red-700 text-sm" />
                                        </div>
                                        <div className="">
                                            <Field type="text" name="hospitalName" id="hospitalName" className="bg-white border border-[#888] text-gray-900 sm:text-sm rounded-xs focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  " placeholder={initialFormValues.hospitalName} />
                                            <ErrorMessage name="hospitalName" component="div" className="text-red-700 text-sm" />
                                        </div>
                                        <div className="flex items-center justify-center gap-8">
                                            <Link to='/'>
                                                <Button styles="text-lg font-semibold rounded-xs text-black border-2 border-red-300 inline-block min-w-[130px] py-2 hover:opacity-75 uppercase" >{`${t('cancel')}`}</Button>
                                            </Link>
                                            <Button appearance="custom" styles="uppercase" >{`${t('save')}`}</Button>
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
                                                <h6 className='pb-2 text-lg text-semibold'>{`${t('password_change')}`}</h6>
                                                <p className='text-xs'>
                                                    {`${t('password_instruction')}`}.
                                                </p>
                                            </div>
                                            <div className="flex gap-5">
                                                <div className="w-1/2">
                                                    <Field type="password" name="password" id="password" className="bg-stone-100 border border-[#888] text-gray-900 sm:text-sm rounded-xs focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  " placeholder="현재 비밀번호" required />
                                                    <ErrorMessage name="password" component="div" className="text-red-700 text-sm" />
                                                </div>
                                                <div className="w-1/2">
                                                    <Field type="password" name="confirmPassword" id="confirmPassword" className="bg-stone-100 border border-[#888] text-gray-900 sm:text-sm rounded-xs focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  " placeholder="새로운 비밀번호" required />
                                                    <ErrorMessage name="confirmPassword" component="div" className="text-red-700 text-sm" />
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-center gap-8">
                                                <Link to="/">
                                                    <Button styles="text-lg font-semibold rounded-xs text-black border-2 border-red-300 inline-block min-w-[130px] py-2 hover:opacity-75 uppercase" >{`${t('cancel')}`}</Button>
                                                </Link>
                                                <Button appearance="custom" styles="uppercase" >{`${t('change')}`}</Button>
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