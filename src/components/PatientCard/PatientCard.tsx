import { PatientCardProps, SelectedPatient, SelectedTest } from './patientCard.props'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';

const apiUrl = process.env.REACT_APP_API_PATIENTS;

const PatientCard = ({ patientList, getData }: PatientCardProps) => {
  const navigate = useNavigate()

  //select에 뿌릴 환자 목록 배열화
  const patientsArray = Array.from(new Set(patientList.map((patient) => patient.patientNo)));
  console.log(patientsArray);
  //선택 날짜
  const [selectedDate, setSelectedDate] = useState<string | undefined>(undefined);
  //선택된 환자의 전체 테스트 데이터
  const [selectedTotalData, setSelectedTotalData] = useState<SelectedTest[]>();
  //선택된 날짜의 테스트 데이터
  const [selectedTestData, setSelectedTestData] = useState<SelectedTest>();
  //선택된 환자 정보
  const [selectedPatient, setSelectedPatient] = useState<SelectedPatient>();
  //선택된 환자의 테스트 날짜 배열
  const [testDates, setTestDates] = useState<any[]>([]);
  //현재 url 파라미터 값
  const currentPatientId = new URLSearchParams(window.location.search).get("patientId");
  //선택 환자
  const [selectedOption, setSelectedOption] = useState<string>(currentPatientId ? currentPatientId : '');

  //선택 환자가 변할 시 환자 번호 변경
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // setPatientId(e.target.value);
    setSelectedOption(e.target.value);
  };
  //선택 날짜가 변경시 선택된 날짜 변경
  const handleDateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDate(e.target.value);
  };
  //iso형식의 날짜 yyyy-mm-dd형식으로 변환하는 함수
  const formatDateString = (inputDateString: string) => {
    const dateObject = new Date(inputDateString);
    const year = dateObject.getFullYear();
    const month = String(dateObject.getMonth() + 1).padStart(2, '0');
    const day = String(dateObject.getDate()).padStart(2, '0');
    const formattedDateString = `${year}-${month}-${day}`;
    return formattedDateString;
  }

  //환자의 번호와 병원정보로 해당 환자의 데이터를 가져오는 함수
  const fetchData = async () => {
    try {
      const data = {
        id: selectedPatient?.patientNo,
        hospital: selectedPatient?.hospital
      };
      const response = await axios.post(apiUrl + '/patientdata', data);
      const formattedData = response.data.testData.map((data: any) => {
        return {
          ...data,
          Date: formatDateString(data.Date)
        };
      });

      const dates = new Set(formattedData.map((data: any) => data.Date));
      setTestDates(Array.from(dates));

      return formattedData;
    } catch (error) {
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

  //url 파라미터에 환자번호가 없으면 인덱스[0]의 환자를 선택함
  useEffect(() => {
    if (!currentPatientId) {
      console.log(patientsArray.length);
        console.log('test');
      if (patientsArray.length > 0) {
        setSelectedOption(patientList[0].patientNo);
      }
    } else {
      setSelectedPatient(patientList.find(patient => patient.patientNo === selectedOption) as SelectedPatient | undefined);
    }
  }, []);

  //선택된 환자가 변하면 해당 환자의 테스트 데이터를 가져옴
  useEffect(() => {
    if (selectedPatient) {
      fetchData().then(data => {
        setSelectedTotalData(data);
      });
    }
  }, [selectedPatient]);

  useEffect(() => {
    if (selectedTotalData) {
      setSelectedTestData(selectedTotalData.find(data => data.Date === selectedDate));
    } else {

    }
  }, [selectedDate, selectedTestData]);

  // url파리미터 변경해서 페이지 리로드
  useEffect(() => {
    if (selectedOption && selectedOption !== currentPatientId) {
      navigate(`/results?patientId=${selectedOption}`);
    }
  }, [selectedOption, selectedDate]);

  //선택된 날짜가 없으면 인덱스[0]의 날짜 선택
  useEffect(() => {
    if (selectedDate === undefined) {
      setSelectedDate(testDates[0]);
    }
  }, [testDates]);

  //환자,날짜에 맞는 데이터를 부모 컴포넌트로 보냄
  useEffect(() => {
    if (selectedTestData) {
      getData(selectedTestData);
    }
  }, [selectedTestData]);

  return (

    <div className='min-w-[240px] bg-white py-3 px-4 rounded-md h-fit'>
      <div className=" border-b border-button-green/20 pb-2">
        <select value={selectedOption} onChange={handleSelectChange} className='w-full border-4 border-button-green/20 rounded-sm mb-2 text-center'>
          <option value={selectedOption}>{selectedOption ? "환자번호 : " + selectedOption : "-- 환자번호 --"}</option>
          {patientsArray.map((patient, index) => (
            <option key={index} value={patient}>
              {patient}
            </option>
          ))}
        </select>
        <select value={selectedDate} onChange={handleDateChange} className='w-full border-4 border-button-green/20 rounded-sm mb-2 text-center'>
          <option value={selectedDate}>{selectedDate ? "날짜 : " + selectedDate : "-- 테스트 날짜 --"}</option>
          {testDates.map((date, index) => (
            <option key={index} value={date}>
              {date}
            </option>
          ))}
        </select>
        {/* <img src={image?.length ? image : 'https://www.seekpng.com/png/detail/110-1100707_person-avatar-placeholder.png'} className='w-full max-h-[150px] rounded-sm bg-cover mb-2' alt='patient'/> */}
        <p className='text-center font-semibold text-lg py-2'>환자 정보</p>
        <div className="flex items-center font-semibold text-black justify-between px-2">성명 <span className=' font-normal text-dark-green'>{selectedPatient?.name || "undefined"}</span></div>
        <div className="flex items-center font-semibold text-black justify-between px-2">번호 <span className=' font-normal text-dark-green'>{selectedPatient?.patientNo || "undefined"}</span></div>
        <div className="flex items-center font-semibold text-black justify-between px-2">성별 <span className=' font-normal text-dark-green'>{selectedPatient?.sex === "M" ? "Male" : "Female"}</span></div>
        <div className="flex items-center font-semibold text-black justify-between px-2">개월 <span className=' font-normal text-dark-green'>{selectedTestData?.month}</span></div>
        <div className="flex items-center font-semibold text-black justify-between px-2">총점 <span className=' font-bold text-dark-green'>{selectedTestData?.totalScore}</span></div>
      </div>
      <p className='text-center font-semibold text-lg py-2'>문항별 정답률</p>
      <div className="max-h-[500px] overflow-x-hidden overflow-y-scroll !scrollbar-thin !scrollbar-track-transparent !scrollbar-thumb-[#e3e6e5] ">
        <div className="flex items-center font-semibold text-black justify-between px-2">7번 <span className=' font-normal text-dark-green'>45.4%</span></div>
        <div className="flex items-center font-semibold text-black justify-between px-2">8번 <span className=' font-normal text-dark-green'>45.4%</span></div>
        <div className="flex items-center font-semibold text-black justify-between px-2">9번 <span className=' font-normal text-dark-green'>45.4%</span></div>
        <div className="flex items-center font-semibold text-black justify-between px-2">10번 <span className=' font-normal text-dark-green'>45.4%</span></div>
        <div className="flex items-center font-semibold text-black justify-between px-2">11번 <span className=' font-normal text-dark-green'>45.4%</span></div>
        <div className="flex items-center font-semibold text-black justify-between px-2">12번 <span className=' font-normal text-dark-green'>45.4%</span></div>
        <div className="flex items-center font-semibold text-black justify-between px-2">13번 <span className=' font-normal text-dark-green'>45.4%</span></div>
        <div className="flex items-center font-semibold text-black justify-between px-2">14번 <span className=' font-normal text-dark-green'>45.4%</span></div>
        <div className="flex items-center font-semibold text-black justify-between px-2">15번 <span className=' font-normal text-dark-green'>45.4%</span></div>
        <div className="flex items-center font-semibold text-black justify-between px-2">16번 <span className=' font-normal text-dark-green'>45.4%</span></div>
        <div className="flex items-center font-semibold text-black justify-between px-2">17번 <span className=' font-normal text-dark-green'>45.4%</span></div>
        <div className="flex items-center font-semibold text-black justify-between px-2">18번 <span className=' font-normal text-dark-green'>45.4%</span></div>
        <div className="flex items-center font-semibold text-black justify-between px-2">19번 <span className=' font-normal text-dark-green'>45.4%</span></div>
        <div className="flex items-center font-semibold text-black justify-between px-2">20번 <span className=' font-normal text-dark-green'>45.4%</span></div>
        <div className="flex items-center font-semibold text-black justify-between px-2">21번 <span className=' font-normal text-dark-green'>45.4%</span></div>
        <div className="flex items-center font-semibold text-black justify-between px-2">22번 <span className=' font-normal text-dark-green'>45.4%</span></div>
        <div className="flex items-center font-semibold text-black justify-between px-2">23번 <span className=' font-normal text-dark-green'>45.4%</span></div>
        <div className="flex items-center font-semibold text-black justify-between px-2">24번 <span className=' font-normal text-dark-green'>45.4%</span></div>
        <div className="flex items-center font-semibold text-black justify-between px-2">25번 <span className=' font-normal text-dark-green'>45.4%</span></div>
        <div className="flex items-center font-semibold text-black justify-between px-2">26번 <span className=' font-normal text-dark-green'>45.4%</span></div>
        <div className="flex items-center font-semibold text-black justify-between px-2">27번 <span className=' font-normal text-dark-green'>45.4%</span></div>
        <div className="flex items-center font-semibold text-black justify-between px-2">28번 <span className=' font-normal text-dark-green'>45.4%</span></div>
        <div className="flex items-center font-semibold text-black justify-between px-2">29번 <span className=' font-normal text-dark-green'>45.4%</span></div>
        <div className="flex items-center font-semibold text-black justify-between px-2">30번 <span className=' font-normal text-dark-green'>45.4%</span></div>
      </div>
    </div>
  )
}

export default PatientCard
