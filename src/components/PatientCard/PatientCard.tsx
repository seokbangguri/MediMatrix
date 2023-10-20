import { PatientCardProps } from './patientCard.props'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from "sweetalert2";

const apiUrl = process.env.REACT_APP_API_URL;

interface SelectedPatient {
  hospital: string;
  name: string;
  patientNo: string;
  sex: string;
  therapists: string;
  user_id: number;
}

const PatientCard = ({name, id, score, image, options, patientList }: PatientCardProps) => {

  //선택 환자
  const [selectedOption, setSelectedOption] = useState<string | undefined>(undefined);
  //선택 날짜
  const [selectedDate, setSelectedDate] = useState<string | undefined>(undefined);
  //현재 url 파라미터 값
  const currentPatientId = new URLSearchParams(window.location.search).get("patientId");
  //환자 번호
  const [patientId, setPatientId] = useState<string | null>(currentPatientId);
  //선택된 환자 정보
  const [ selectedPatient, setSelectedPatient ] = useState<SelectedPatient>();
  //선택된 날짜의 테스트데이터
  const [ testData, setTestData ] = useState<any[]>([]);
  
  //선택 환자가 변할 시 환자 번호 변경
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPatientId(e.target.value);
  };
  //선택 날짜가 변경시 선택된 날짜 변경
  const handleDateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDate(e.target.value);
  };

  //select에 뿌릴 환자 목록 배열화
  const patients = new Set(patientList.map((patient) => patient.patientNo));
  const patientsArray = Array.from(patients);

  // url파리미터 변경해서 페이지 리로드
  useEffect(()=>{
    if (selectedOption && selectedOption !== currentPatientId) {
      window.location.href = `/results?patientId=${selectedOption}`;
    }
  },[selectedOption]);

  useEffect(()=> {
    if(patientId) {
      setSelectedOption(patientId);
    }
  },[patientId]);

  useEffect(()=> {
    if(selectedDate) {

    }
  },[selectedDate]);

  useEffect(()=> {
    if(selectedPatient) {
      const fetchData = async () => {
          try {
              const data = {
                  id: selectedPatient?.patientNo,
                  hospital: selectedPatient?.hospital
              };
            const response = await axios.post(apiUrl + '/patientdata', data);

            const testDataArray = response.data.testData.map((item: { testData: any; }) => {
              const testData = item.testData;
              return Object.keys(testData).map(questionNumber => ({
                questionNumber,
                answer: testData[questionNumber]
              }));
            });

            console.log(testDataArray);
              const dates = new Set(response.data.testData.map((data: any) => data.testData.testData));
              setTestData(Array.from(dates));
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

          }
      };
      fetchData();
    }
  },[selectedPatient]);

  useEffect(()=> {
    if(!currentPatientId) {
      if (patientList.length > 0) {
        const initialPatientId = patientList[0].patientNo; // 첫 번째 환자의 id를 가져옵니다.
        window.location.href = `/results?patientId=${initialPatientId}`;
      }
    } else {
      setSelectedPatient(patientList.find(patient => patient.patientNo === patientId) as SelectedPatient | undefined);
    }
  },[]);

  return (

    <div className='min-w-[240px] bg-white py-3 px-4 rounded-md h-fit'>
        <div className=" border-b border-button-green/20 pb-2">
          <select value={selectedOption} onChange={handleSelectChange} className='w-full border-4 border-button-green/20 rounded-sm mb-2 text-center'>
            <option value={selectedOption}>{selectedOption? "환자번호 : " + selectedOption : "-- 환자번호 --"}</option>
            {patientsArray.map((patient, index) => (
              <option key={index} value={patient}>
                {patient}
              </option>
            ))}
          </select>
          <select value={selectedDate} onChange={handleDateChange} className='w-full border-4 border-button-green/20 rounded-sm mb-2 text-center'>
            <option value={selectedDate}>{selectedDate? "날짜 : " + selectedDate : "-- 테스트 날짜 --"}</option>
            {testData.map((date, index) => (
              <option key={index} value={date}>
                {date}
              </option>
            ))}
          </select>
          <img src={image?.length ? image : 'https://www.seekpng.com/png/detail/110-1100707_person-avatar-placeholder.png'} className='w-full max-h-[150px] rounded-sm bg-cover mb-2' alt='patient'/>
          <p className='text-center font-semibold text-lg py-2'>환자 정보</p>
          <div className="flex items-center font-semibold text-black justify-between px-2">성명 <span className=' font-normal text-dark-green'>{selectedPatient?.name || "undefined"}</span></div>
          <div className="flex items-center font-semibold text-black justify-between px-2">번호 <span className=' font-normal text-dark-green'>{selectedPatient?.patientNo || "undefined"}</span></div>
          <div className="flex items-center font-semibold text-black justify-between px-2">총점 <span className=' font-normal text-dark-green'>{testData}</span></div>
        </div>
        <div className="max-h-[500px] overflow-x-hidden overflow-y-scroll !scrollbar-thin !scrollbar-track-transparent !scrollbar-thumb-[#e3e6e5] ">
            <p className='text-center font-semibold text-lg py-2'>문항별 정답률</p>
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
