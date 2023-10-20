import { Button } from "../../components";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';

//Interface
interface PatientExistValues {
    name: string;
    id: string;
    sex: string;
}
//Validation
const validationSchema = Yup.object({
    name: Yup.string().min(2, '최소 2자 이상').required('입력 필수!'),
    id: Yup.string().required('입력 필수!'),
});

type PatientInfo = {
    name: string;
    id: string;
    sex: string;
};

type OnNextStepCallback = (data: PatientInfo) => void;

const PatientInput = ({ onNextStep }: { onNextStep: OnNextStepCallback }) => {

    const initialValues: PatientExistValues = {
        name: '',
        sex: 'M',
        id: ''
    }

    // Handle checking
    const handleNext = async (values: PatientExistValues, { setSubmitting }: FormikHelpers<PatientExistValues>) => {
        const { name, id, sex } = values;
        const patientData = {
            name: name,
            id: id,
            sex: sex
        };
        onNextStep(patientData);
        setSubmitting(false);
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
                            <Button appearance="primary" type="submit" styles="w-full text-center" disabled={isSubmitting}>다음</Button>
                        </div>
                    </Form>
                )}
            </Formik>

        </div>
    );
};

export default PatientInput;