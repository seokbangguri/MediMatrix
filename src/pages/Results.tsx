import { Heading, PatientCard, ResultsCharts, ResultsChartAge, ResultsTable, ScoringTable, Text, Footer, Loading } from '../components'
import { useState, useEffect } from 'react';
import { verifyToken } from '../auth/auth';
import Swal from "sweetalert2";
import axios from 'axios';
import { PatientListType, SelectedTestInterface } from '../interface/pagesProps';
import { useNavigate } from 'react-router-dom';

const apiUrl = process.env.REACT_APP_API_PATIENTS;

const Results = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [patientList, setPatientList] = useState<PatientListType>([]);
  //전달받은 선택된 날짜의 테스트 데이터
  const [selectedTestData, setSelectedTD] = useState<SelectedTestInterface>();

  const handleGetData = (data: SelectedTestInterface) => {
    if (data) {
      setSelectedTD(data);
    }
  };

  useEffect(() => {
    // 여기에 원하는 동작을 추가하세요.
    verifyToken().then(decodedToken => {
      if (decodedToken) {
        setUserName(decodedToken.name);
        const fetchData = async () => {
          try {
            const data = {
              email: decodedToken.email,
              name: decodedToken.name,
              hospital: decodedToken.hospitalName
            };
            const response = await axios.post(apiUrl + '/patientlist', data);
            setPatientList(response.data.patients);
          } catch (error) {
            console.error('API 요청 에러:');
            Swal.fire({
              title: '에러!',
              text: '확인을 누르면 메인로 이동합니다.',
              icon: 'error',
              confirmButtonText: '확인',
            }).then(() => {
              navigate("/");
            });
          }
        };
        fetchData();
      } else {
        Swal.fire({
          title: '잘못된 접근!',
          text: '확인을 누르면 메인로 이동합니다.',
          icon: 'error',
          confirmButtonText: '확인',
        }).then(() => {
          navigate("/");
        });
      }
    });
  }, []);

  window.onload = function () {
    setIsLoading(false);
  };

  if (isLoading) {
    return <Loading context='로딩중 입니다.' hidden={isLoading} />;
  }
  return (
    <div className='w-screen mt-[140px] '>
      <div className="flex flex-col items-center lg:px-10 mb-16">
        <Heading tag='h2'>{userName}님의 환자 목록</Heading>
        <Text size='s' styles='mt-3 text-[#888] text-center'>좌측 환자 번호를 선택하시면 해당 번호의 결과를 확인하실 수 있습니다.</Text>
        <div className='my-16 flex gap-5 max-w-[1445px] p-5 bg-white drop-shadow-2xl rounded-md'>
          <PatientCard patientList={patientList} getData={handleGetData} />
          <ResultsTable patientData={selectedTestData} />
        </div>
        <ResultsCharts />
        <div className='flex flex-col md:flex-row justify-between my-10 max-w-[1445px] p-5 bg-white drop-shadow-2xl rounded-md'>
          <ResultsChartAge />
          <ScoringTable />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Results