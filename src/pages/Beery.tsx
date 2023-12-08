import { useState, useEffect } from "react";
import { Heading, Text, Footer, FileInputBox, PatientInput, Progress, Loading } from "../components";
import hospital from '../contracted';
import { useSpring, animated } from "react-spring";
import beery_main_img from "../assets/beery_main.svg"
import { verifyToken } from "../auth/auth";
import { PatientInfoInterface, finalDataInterface } from "../interface/pagesProps";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { showError } from "../utils/errorHandling";


function Beery() {
    const { t } = useTranslation();
    const [step, setStep] = useState(1);
    const [visible, setVisible] = useState(false);
    const [progressStep, setProgressStep] = useState(step);
    const [progressBar, setProgressBar] = useState(false);
    const [hos, setHos] = useState<string>('');
    const [therapists, setTherapists] = useState<string>('');
    const navigate = useNavigate();

    const [finalData, setFinalData] = useState<finalDataInterface>({
        name: '',
        id: '',
        sex: '',
        hospital: '',
        therapists: '',
    });

    useEffect(() => {
        // Scroll to the top of the page on component mount
        window.scrollTo(0, 0);
    }, []);

    const handleNextStep = (data: PatientInfoInterface) => {
        // 1단계에서 입력한 환자 정보 저장하고 2단계로 이동
        const tpData = {
            hospital: hos,
            therapists: therapists
        }
        const assignData = Object.assign({}, data, tpData);
        setFinalData(assignData);
        setStep(2);
    };

    const handleLoading = (b: boolean) => {
        setVisible(b);
    }

    const fadeInOutProps1 = useSpring({
        opacity: step === 1 ? 1 : 0,
        display: step === 1 ? "block" : "none",
        config: {
            duration: 1000, // 애니메이션의 지속 시간을 조절합니다 (1초로 설정되어 있음)
        }
    });
    const fadeInOutProps2 = useSpring({
        opacity: step === 2 ? 1 : 0,
        display: step === 2 ? "block" : "none",
        config: {
            duration: 1000, // 애니메이션의 지속 시간을 조절합니다 (1초로 설정되어 있음)
        }
    });
    const smoothTrasform = useSpring({
        height: step === 1 ? "550px" : "500px", // 컴포넌트의 높이를 조절할 수 있습니다.
        config: {
            duration: 300,
        }
    });


    useEffect(() => {
        setProgressStep(step);
        if (step === 1) {
            setProgressBar(false);
        } else {
            setProgressBar(true);
        }
    }, [step]);

    // 페이지가 처음 로딩될 때만 실행되는 함수
    useEffect(() => {
        // 여기에 원하는 동작을 추가하세요.
        verifyToken().then(decodedToken => {
            if (decodedToken) {
                setHos(decodedToken.hospitalName);
                setTherapists(decodedToken.email);
                const selectedHospital = hospital[decodedToken.hospitalName]; // 병원 이름을 사용하여 hospital 객체에서 해당 병원 정보 가져오기
                if (!selectedHospital || !selectedHospital.beery) {
                    showError(`Beery와 계약되어 있지 않습니다.`).then((result) => {
                        if (result.isConfirmed) {
                            navigate('/');
                        }
                    });
                }
            } else {
                showError(`${t('login_first')}`).then((result) => {
                    if (result.isConfirmed) {
                        navigate("/signin");
                    }
                });
            }
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [hos, therapists]);


    return (
        <div className="w-screen">
            <Loading context="Beery 채점 중... 잠시만 기다려주세요." hidden={visible} />
            <section className="px-5 lg:px-10 flex flex-col justify-center items-center py-20 mt-12 min-h-screen">
                <Heading tag="h2" className="">
                    {`${t('beery_heading')}`}
                </Heading>
                <Text size="m" styles="max-w-[700px] text-center pt-5">
                    {`${t('beery_text')}`}
                </Text>
                <Text size="s" styles=" mb-16">
                    {`${t('beery_file_rule')}`}
                </Text>
                <div className="flex flex-col md:flex-row items-center justify-between w-[1445px] px-5 md:px-10">
                    <div className="max-w-[600px] flex justify-center">
                        <img src={beery_main_img} alt="" width={500} />
                    </div>
                    <animated.div className="flex flex-col justify-center w-[500px] md:w-[600px] min-h-[500px] bg-white rounded-md drop-shadow-2xl  p-10" style={smoothTrasform}>
                        <Progress step={String(progressStep)} completed={progressBar} />
                        {step === 1 ? (
                            <animated.div style={fadeInOutProps1}>
                                <PatientInput onNextStep={handleNextStep} />
                            </animated.div>
                        ) : (
                            <animated.div style={fadeInOutProps2}>
                                <FileInputBox finalData={finalData} visible={handleLoading} />
                            </animated.div>
                        )}
                    </animated.div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default Beery;