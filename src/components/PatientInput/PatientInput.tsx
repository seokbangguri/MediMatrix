import React, { useState, useRef } from "react";
import { Button } from "../../components";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';

//Interface
interface PatientExistValues {
    name: string;
    sex: string;
    id: string;
    hospital: string | null;
    therapists: string | null;
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

    const initialValues: PatientExistValues = {
        name: '',
        sex: 'M',
        id: '',
        hospital: sessionStorage.getItem('hospital'),
        therapists: sessionStorage.getItem('name')
    }

    // Handle checking
    const handleNextStep = async (values: PatientExistValues, { setSubmitting }: FormikHelpers<PatientExistValues>) => {
        if(sessionStorage.getItem('hospital') != null && sessionStorage.getItem('name') != null) {
        const { name, id, sex, hospital, therapists } = values;
        // 전송할 데이터
        const userData = {
            name: name,
            id: id,
            sex: sex,
            hospital: hospital,
            therapists: therapists
        };
        console.log(userData);
        onNextStep(userData);
        setSubmitting(false);
        }
    };

  return (
      <div className="">
          <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleNextStep}
          >

              {({ isSubmitting }) => (
                  <Form className="w-full " >
                      <div className="flex flex-col gap-5 w-full">
                          <div className="w-full gap-6">
                                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">이름</label>
                                  <Field type="text" name="name" id="name" className="bg-stone-100 border border-gray-300 text-gray-900 sm:text-sm rounded-xs focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  " placeholder="이름" required />
                                  <ErrorMessage name="name" component="div" className="text-red-700 text-sm" />
                          </div>
                          <div className="w-full gap-6">
                                  <label htmlFor="id" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">환자번호</label>
                                  <Field type="text" name="id" id="id" className="bg-stone-100 border border-gray-300 text-gray-900 sm:text-sm rounded-xs focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  " placeholder="환자번호" required />
                                  <ErrorMessage name="hospitalName" component="div" className="text-red-700 text-sm" />
                            </div>
                          <div className="w-full gap-6">
                                  <label htmlFor="sex" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">성별</label>
                                  <Field as="select" name="sex" className="bg-stone-100 border border-gray-300 text-gray-900 sm:text-sm rounded-xs focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required>
                                      <option value="M">남자</option>
                                      <option value="F">여자</option>
                                  </Field>
                          </div>
                      </div>


                      <div className="mt-10 mb-6 text-center">
                          <Button apperance="primary" type="submit" styles="w-full text-center" disabled={isSubmitting}>다음</Button>
                      </div>
                  </Form>
              )}
          </Formik>

      </div>
  );
};

export default PatientInput;