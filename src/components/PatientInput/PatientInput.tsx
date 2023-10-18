import { useEffect, useState } from "react";
import { Button } from "../../components";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { verifyToken } from "../../auth/auth";
import Swal from "sweetalert2";


//Interface
interface PatientExistValues {
    name: string;
    sex: string;
    id: string;
}
//Validation
const validationSchema = Yup.object({
    name: Yup.string().min(2, 'Minimum 2 characters').required('Required'),
    hospital: Yup.string().required('Required'),
    id: Yup.string().required(),
});

type PatientInfo = {
    name: string;
    id: string;
    sex: string;
    hospital: string | null;
    therapists: string | null;
};

type OnNextStepCallback = (data: PatientInfo) => void;

const PatientInput = ({ onNextStep }: { onNextStep: OnNextStepCallback }) => {
    const [hos, setHos] = useState('');
    const [therapists, setTherapists] = useState('');

    const initialValues: PatientExistValues = {
        name: '',
        sex: 'M',
        id: ''
    }
    // 페이지가 처음 로딩될 때만 실행되는 함수
    useEffect(() => {
        // 여기에 원하는 동작을 추가하세요.
        verifyToken().then(decodedToken => {
            if(decodedToken === false){
                Swal.fire({
                    title: "로그인 후 이용 가능합니다.",
                    icon: "error",
                    confirmButtonText: "확인",
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.href = "/signin";
                    }
                });
            } else {
                setHos(decodedToken.hospitalName);
                setTherapists(decodedToken.email);
            }
        });
    }, []);

    // Handle checking
    const handleNext = async (values: PatientExistValues, { setSubmitting }: FormikHelpers<PatientExistValues>) => {
        console.log('g');
        const { name, id, sex } = values;
        // 전송할 데이터
        const userData = {
            name: name,
            id: id,
            sex: sex,
            hospital: hos,
            therapists: therapists
        };
        setSubmitting(false);
        onNextStep(userData);
    };

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleNext}
            >
                {({ isSubmitting }) => (
                    <Form className="w-full " >
                        <div className="flex flex-col gap-3 w-full">
                            <div className="w-full gap-6">
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">이름</label>
                                <Field type="text" name="name" id="name" className="bg-stone-100 border border-gray-300 text-gray-900 sm:text-sm rounded-xs focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  " placeholder="이름" required />
                                <ErrorMessage name="name" component="div" className="text-red-700 text-sm" />
                            </div>
                            <div className="w-full gap-6">
                                <label htmlFor="id" className="block mb-2 text-sm font-medium text-gray-900">환자번호</label>
                                <Field type="text" name="id" id="id" className="bg-stone-100 border border-gray-300 text-gray-900 sm:text-sm rounded-xs focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  " placeholder="환자번호" required />
                                <ErrorMessage name="id" component="div" className="text-red-700 text-sm" />
                            </div>
                            <div className="w-full gap-6">
                                <label htmlFor="sex" className="block mb-2 text-sm font-medium text-gray-900">성별</label>
                                <Field as="select" name="sex" className="bg-stone-100 border border-gray-300 text-gray-900 sm:text-sm rounded-xs focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required>
                                    <option value="M">남자</option>
                                    <option value="F">여자</option>
                                </Field>
                            </div>
                        </div>


                        <div className="mt-10 mb-6 text-center">
                            <Button appearance="primary" styles="w-full text-center" disabled={isSubmitting}>다음</Button>
                        </div>
                    </Form>
                )}
            </Formik>

        </div>
    );
};

export default PatientInput;