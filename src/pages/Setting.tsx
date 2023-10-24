import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import axios from 'axios';
import { Button, Heading } from '../components'
import { useState, useEffect } from 'react';
import { verifyToken } from '../auth/auth';

const apiUrl = process.env.REACT_APP_API_USERS;
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
    password: Yup.string().min(6, 'Password must be at least 6 characters').max(16, 'Too long').matches(/[0-9]/, getCharacterValidationError("digit")).matches(/[a-z]/, getCharacterValidationError("lowercase"))
        .required('Required'),
    confirmPassword: Yup.string().required('Please retype your password'),

})

const Setting = () => {
    const [changePassword, setChangePassword] = useState<boolean>(false)
    const [role, setRole] = useState('');
    const [initialFormValues, setInitialFormValues] = useState<UpdateInfo>({
        email: '',
        name: '',
        hospitalName: '',
        phoneNumber: '',
    });
    //initial value
    const infoInitialValues: UpdateInfo = {
        email: initialFormValues.email,
        name: initialFormValues.name,
        hospitalName: initialFormValues.hospitalName,
        phoneNumber: initialFormValues.phoneNumber,
    }
    const passwordInitialValues: UpdatePassword = {
        password: '',
        confirmPassword: '',
    }

    useEffect(() => {
        verifyToken().then(decodedToken => {
            setRole(decodedToken.role);
        if(!decodedToken) {
          Swal.fire({
            title: '잘못된 접근!',
            text: '확인을 누르면 메인로 이동합니다.',
            icon: 'error',
            confirmButtonText: '확인',
          }).then(() => {
            window.location.href = "/";
          });
        } else {
        const fetchData = async () => {
            try {
                const data = {
                    email: decodedToken.email,
                    role: decodedToken.role,
                };
                const response = await axios.post(apiUrl+'/setting', data);
                setInitialFormValues(response.data);
            } catch (error) {
                console.error('API 요청 에러:');
            }
        };
        fetchData();
        }
        });
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
                confirmButtonText: '수정',
                cancelButtonText: '취소'
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
            
                        const response = await axios.post(apiUrl+'/updateUserData', updateData);
            
                        if (response.status === 200) {
                            sessionStorage.setItem('token', response.data.token);
                            Swal.fire({
                                icon: 'success',
                                title: '회원정보 변경 완료!',
                                showConfirmButton: false,
                                timer: 1500
                            }).then(() => {
                                window.location.reload();
                            });
                        } else {
                            Swal.fire({
                                icon: 'error',
                                title: response.status,
                                showConfirmButton: false,
                                timer: 1500
                            })
                            console.error('서버 응답 오류:');
                        }
                    } catch (error) {
                        Swal.fire({
                            icon: 'error',
                            title: '에러가 발생했습니다.',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        console.error('정보 수정 에러:');
                    }
                    setSubmitting(false);

                }
              }) 
        } else {
            Swal.fire({
                icon: 'warning',
                title: '수정사항이 없습니다!',
                showConfirmButton: false,
                timer: 1500
            })
        }
    };
    //Handle reset password
    const handleResetPassword = async (values: any, { setSubmitting }: any) => {
        const { confirmPassword, password, } = values;
        try {
            // 전송할 데이터
            const userData = {
                currentPW: password,
                newPW: confirmPassword,
                email: sessionStorage.getItem('email'),
                role: sessionStorage.getItem('role'),
            };

            // Axios를 사용하여 서버로 POST 요청 보내기
            const response = await axios.post(apiUrl+'/updatePassword', userData);

            // 서버 응답 확인
            if (response.status === 200) {
                Swal.fire({
                    icon: 'success',
                    title: '비밀번호 변경 완료!',
                    showConfirmButton: false,
                    timer: 1500
                }).then(() => {
                  window.location.reload();
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: response.status,
                    showConfirmButton: false,
                    timer: 1500
                })
                console.error('서버 응답 오류:');
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: '에러가 발생했습니다.',
                showConfirmButton: false,
                timer: 1500
            })
            console.error('비밀번호 변경 에러:');
        }
        setSubmitting(false);
    };

    return (
        <div className="flex  px-6 py-2 my-[150px] mx-auto h-fit" >
            <div className="w-[900px] bg-white rounded-sm py-5 px-8 drop-shadow-2xl flex flex-col ">
                <div className="flex flex-col items-start pb-5 border-b border-[#cecece]">
                    <Heading tag='h2'>마이페이지</Heading>
                    <span className='mt-2 text-xl '>프로필</span>
                </div>
                <div className="w-full flex">
                    <div className="w-2/6 py-5 px-2 border-r border-[#cecece]">
                        <h6 className='pb-2 text-md text-semibold'>회원정보</h6>
                        <div className=" flex flex-col gap-5 pb-5 border-b border-[#cecece] ">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-900 dark:text-white py-2.5">이름</label>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-white py-2.5">이메일(수정불가)</label>
                            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-900 dark:text-white py-2.5">전화번호</label>
                            <label htmlFor="hospitalName" className="block text-sm font-medium text-gray-900 dark:text-white py-2.5">병원 이름</label>
                        </div>
                        <button onClick={() => setChangePassword(!changePassword)} className='pt-5 underline text-blue-400'>비밀번호 변경</button>
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
                                            수정하고 싶으시면, 수정 내용을 입력하시고 저장 버튼을 누르시면 됩니다.
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
                                            <a href='/'>
                                                <Button styles="text-lg font-semibold rounded-xs text-black border-2 border-red-300 inline-block min-w-[130px] py-2 hover:opacity-75 uppercase" >취소</Button>
                                            </a>
                                                <Button appearance="custom" styles="uppercase" >저장</Button>
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
                                                <h6 className='pb-2 text-lg text-semibold'>비밀번호 변경</h6>
                                                <p className='text-xs'>
                                                    Password must have a Good or Strong rating. Password must be at least 8 characters long.
                                                    Good password contain either a combination of uppercase and lowercase letters or a combination of letters and one digit.
                                                    Strong passwords contain either a combination of letters and more than one digit or special characters.
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
                                                <a href="/">
                                                    <Button styles="text-lg font-semibold rounded-xs text-black border-2 border-red-300 inline-block min-w-[130px] py-2 hover:opacity-75 uppercase" >취소</Button>
                                                </a>
                                                    <Button appearance="custom" styles="uppercase" >변경</Button>
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