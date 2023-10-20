import { Heading, PatientCard, ResultsCharts, ResultsChartAge, ResultsTable, ScoringTable, Text, Footer, Loading } from '../components'
import { useState, useEffect } from 'react';
import { verifyToken } from '../auth/auth';
import Swal from "sweetalert2";
import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

interface PatientData {
  user_id: number;
  patientNo: string;
  name: string;
  sex: string;
  hospital: string;
  // 다른 속성들을 필요에 따라 추가할 수 있습니다.
}

// 위의 데이터 구조를 나타내는 배열의 타입 정의
type PatientList = PatientData[];

const Results = () => {
  const [userName, setUserName] = useState('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [patientList, setPatientList] = useState<PatientList>([]);

  useEffect(() => {
      // 여기에 원하는 동작을 추가하세요.
      verifyToken().then(decodedToken => {
          if(!decodedToken){
            Swal.fire({
              title: '잘못된 접근!',
              text: '확인을 누르면 메인로 이동합니다.',
              icon: 'error',
              confirmButtonText: '확인',
            }).then(() => {
              window.location.href = "/";
            });
          } else {
            setUserName(decodedToken.name);
            const fetchData = async () => {
                try {
                    const data = {
                        email: decodedToken.email,
                        name: decodedToken.name,
                        hospital: decodedToken.hospitalName
                    };
                    const response = await axios.post(apiUrl+'/patientlist', data);
                    console.log(response.data.patients);
                    setPatientList(response.data.patients);
                } catch (error) {
                    console.error('API 요청 에러:', error);
                    Swal.fire({
                      title: '에러!',
                      text: '확인을 누르면 메인로 이동합니다.',
                      icon: 'error',
                      confirmButtonText: '확인',
                    }).then(() => {
                      window.location.href = "/";
                    });
                } finally {
                  setIsLoading(false);
                }
            };
            fetchData();
          }
      });
  }, []);

  if (isLoading) {
    return <Loading context='로딩중 입니다.' hidden={isLoading} />;
  }
  return (
    <div className='w-screen mt-[140px] '>
      <div className="flex flex-col items-center lg:px-10 mb-16">
        <Heading tag='h2'>{userName}님의 환자 목록</Heading>
        <Text size='s' styles='mt-3 text-[#888] text-center'>좌측 환자 번호를 선택하시면 해당 번호의 결과를 확인하실 수 있습니다.</Text>
        <div className='my-16 flex gap-5 max-w-[1445px] p-5 bg-white drop-shadow-2xl rounded-md'>
          <PatientCard patientList={patientList} name="재현" id='1244' score='12' options={['test1','test2']}/>
          <ResultsTable image='https://placehold.co/600x400' score='1' />
        </div>
        <ResultsCharts/>
        <div className='flex flex-col md:flex-row justify-between my-10 max-w-[1445px] p-5 bg-white drop-shadow-2xl rounded-md'>
        <ResultsChartAge/>
        <ScoringTable/>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Results