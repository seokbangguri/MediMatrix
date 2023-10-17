import React, { useState, useEffect } from "react";
import { Heading, Text, Footer, FileInputBox, PatientInput } from "../components";
import Swal from "sweetalert2";
import hospital from '../contracted';

function Beery() {
    interface PatientInfo {
        name: string;
        id: string;
        sex: string;
        hospital: string | null;
        therapists: string | null;
    };

    const [step, setStep] = useState(1);
    const [patientInfo, setPatientInfo] = useState<PatientInfo>({
        name: '',
        id: '',
        sex: '',
        hospital: sessionStorage.getItem('hospital'),
        therapists: sessionStorage.getItem('name')
    });

  
    const handleNextStep = (data: PatientInfo) => {
      // 1단계에서 입력한 환자 정보 저장하고 2단계로 이동
      setPatientInfo(data);
      setStep(2);
    };

    // 페이지가 처음 로딩될 때만 실행되는 함수
    useEffect(() => {
        // 여기에 원하는 동작을 추가하세요.
        const signinSession = sessionStorage.getItem('name');
        const hos = sessionStorage.getItem('hospital');
        if(!signinSession || hos == null){
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
            const selectedHospital = hospital[hos]; // 병원 이름을 사용하여 hospital 객체에서 해당 병원 정보 가져오기
            if (!selectedHospital || !selectedHospital.beery) {
                Swal.fire({
                    title: "Beery와 계약되어 있지 않습니다.",
                    icon: "error",
                    confirmButtonText: "확인",
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.href = "/";
                    }
                });
            }
        }
    }, []);

    return (
        <div className="w-screen">
            <section className="px-5 lg:px-10 flex flex-col justify-center items-center py-20 h-screen">
                <Heading tag="h2" className="">
                    AI 기반 Beery VMI 답안 채점도구
                </Heading>
                <Text size="m" styles="max-w-[700px] text-center pt-5">
                    채점을 진행하기 위해 환자의 Beery VMI 답안지를 넣어주세요.
                </Text>
                <Text size="s" styles=" mb-16">
                    Beery VMI 답안지는 S(환자번호).pdf 형태 또는 .png .jpg .jpeg 등 형태로 파일 이름을 작성해주세요.
                </Text>
                <div className="flex flex-col justify-center items-center w-[800px] bg-white rounded-lg drop-shadow-2xl  py-20">
                    {step == 1 ? (
                    <PatientInput onNextStep={handleNextStep}  />
                    ):(
                    <FileInputBox patientInfo={patientInfo} />
                    )}
                </div> 
            </section>
            <Footer />
        </div>
    );
}

export default Beery;