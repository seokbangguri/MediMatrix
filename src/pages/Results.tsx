import { Heading, PatientCard, ResultsCharts, ResultsChartAge, ResultsTable, ScoringTable, Text, Footer } from '../components'
import { useState, useEffect } from 'react';
import { verifyToken } from '../auth/auth';
import axios from 'axios';
import { PatientListType, SelectedTestInterface } from '../interface/pagesProps';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { showError } from '../utils/errorHandling';

const apiUrl = process.env.REACT_APP_API_PATIENTS;

const Results = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [patientList, setPatientList] = useState<PatientListType>([]);
  const [selectedTestData, setSelectedTD] = useState<SelectedTestInterface>();

  const handleGetData = (data: SelectedTestInterface) => {
    if (data) {
      setSelectedTD(data);
    }
  };

  useEffect(() => {
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
            showError(`${t('error')}`, `${t('back_main')}`).then(() => {
              navigate("/");
            });
          }
        };
        fetchData();
      } else {
        showError(`${t('error_invalid')}`, `${t('back_main')}`).then(() => {
          navigate("/");
        });
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='w-screen mt-[140px] '>
      <div className="flex flex-col items-center px-5 lg:px-10 mb-16">
        <Heading tag='h2'>{userName}님의 환자 목록</Heading>
        <Text size='s' styles='mt-3 text-[#888] text-center'>{`${t('beery_result_text')}`}</Text>
        <div className='my-5 lg:my-10 flex gap-5 container p-5 bg-white drop-shadow-2xl rounded-md'>
          <PatientCard patientList={patientList} getData={handleGetData} />
          <ResultsTable patientData={selectedTestData} />
        </div>
        <ResultsCharts />
        <div className='flex flex-col md:flex-row justify-between my-5 lg:my-10 container p-5 bg-white drop-shadow-2xl rounded-md'>
          <ResultsChartAge />
          <ScoringTable />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Results