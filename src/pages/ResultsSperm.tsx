import { Heading, Text, Footer, Button } from '../components'
import { useState, useEffect } from 'react';
import { verifyToken } from '../auth/auth';
import Swal from "sweetalert2";
import { useAppContext } from '../state/index';
import { useNavigate } from 'react-router-dom';
import { VscRunAll } from "react-icons/vsc";
import axios from 'axios';
import SpermCharts from '../components/SpermModal/SpermCharts';

const apiUrl = process.env.REACT_APP_API_SPERMS;
// const apiUrl = 'http://127.0.0.1:5000';
const TdStyle = {
  ThStyle: `w-1/6 min-w-[160px] border-l border-transparent py-4 px-3 text-lg font-medium text-white lg:py-4 lg:px-4`,
  TdStyle: `text-dark border border-[#E8E8E8] bg-[#F3F6FF] dark:bg-dark-3 dark:border-dark dark:text-dark-7 py-5 px-2 text-center text-base font-medium`,
  TdStyle2: `text-dark border border-[#E8E8E8] bg-white dark:border-dark dark:bg-dark-2 dark:text-dark-7 py-5 px-2 text-center text-base font-medium`,
}
interface module4 {
  ACC: string
  AUC: string
}

const ResultsSperm = () => {
  const navigate = useNavigate()
  const { state } = useAppContext();
  const [chromosome, setChromose] = useState<module4>();
  const [intertelity, setIntertelity] = useState<module4>();
  const [chromosomeProcessing, setChromoseProcessing] = useState<boolean>(false);
  const [intertelityProcessing, setIntertelityProcessing] = useState<boolean>(false);
  const [data, setData] = useState<any>();
  
  console.log(state.res);


  useEffect(() => {
    if(state.res.data) setData(JSON.parse(state.res.data));
    // 여기에 원하는 동작을 추가하세요.
    verifyToken().then(decodedToken => {
      if (decodedToken) {
        const fetchData = async () => {
          try {
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

  const getChromosomalAbnormality = async () => {
    setChromoseProcessing(true);
    try {
      await axios.get(apiUrl + '/flask/getChromosome').then((data)=> {
        setChromose(data.data)
        setChromoseProcessing(false);
      });
    } catch (error) {
      console.log('error');

    }
  };
  const getPredictInfertility = async () => {
    setIntertelityProcessing(true);
    try {
      await axios.get(apiUrl + '/flask/getInfertility').then((data) =>{
        setIntertelity(data.data)
        setIntertelityProcessing(false);
      });
    } catch (error) {
      console.log('error');

    }
  };

  return (
    <div className='w-screen mt-[140px] '>
      <div className="flex flex-col items-center lg:px-10 mb-16">
        <Heading tag='h2'>모델 성능</Heading>
        <div className='mb-10 mt-16 flex flex-col gap-5 w-[1000px] md:w-[1445px] p-5 bg-white drop-shadow-2xl rounded-md'>
          <Heading tag='h3'>염색체 이상 및 난임 예측</Heading>
          <hr />
          <div className='flex gap-8 items-center justify-evenly w-full'>
            <div className='flex flex-col gap-4'>
              <div onClick={getChromosomalAbnormality}>
                <Button appearance='custom' styles='px-10 py-3 flex items-center justify-between gap-4 bg-[#4F7F9D] w-[300px]'>염색체 이상 예측 <VscRunAll /></Button>
              </div>
              <div onClick={getPredictInfertility}>
                <Button appearance='custom' styles='px-10 py-3 flex items-center justify-between gap-4 w-[300px]'>난임 예측 <VscRunAll /></Button>
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <div className='w-[500px] md:w-[800px] rounded-sm overflow-x-auto bg-white drop-shadow-md'>
                <table className='w-full table-auto'>
                  <thead className='text-center bg-dark-green'>
                    <tr>
                      <th className={TdStyle.ThStyle}> 평균 정확도: </th>
                      {chromosomeProcessing ? 
                        (<th className={TdStyle.ThStyle}>
                          <div className="inline-flex items-center font-semibold text-sm text-white cursor-default">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            계산 중...
                          </div>
                        </th>)
                        : 
                        (<th className={TdStyle.ThStyle}> {chromosome ? (parseFloat(chromosome.ACC) * 100).toFixed(2) : ''}%</th>)
                      }
                      <th className={TdStyle.ThStyle}> 평균 신뢰도: </th>
                      {chromosomeProcessing ? 
                        (<th className={TdStyle.ThStyle}>
                          <div className="inline-flex items-center font-semibold text-sm text-white cursor-default">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            계산 중...
                          </div>
                        </th>)
                        : 
                        (<th className={TdStyle.ThStyle}> {chromosome ? (parseFloat(chromosome.AUC) * 100).toFixed(2) : ''}%</th>)
                      }
                    </tr>
                  </thead>
                </table>
              </div>
              <div className='w-[500px] md:w-[800px] rounded-sm overflow-x-auto bg-white drop-shadow-md'>
                <table className='w-full table-auto'>
                  <thead className='text-center bg-dark-green'>
                    <tr>
                      <th className={TdStyle.ThStyle}> 평균 정확도: </th>
                      {intertelityProcessing ? 
                        (<th className={TdStyle.ThStyle}>
                          <div className="inline-flex items-center font-semibold text-sm text-white cursor-default">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            계산 중...
                          </div>
                        </th>)
                        : 
                        (<th className={TdStyle.ThStyle}> {intertelity ? (parseFloat(intertelity.AUC) * 100).toFixed(2) : ''}%</th>)
                      }
                      <th className={TdStyle.ThStyle}> 평균 신뢰도: </th>
                      {intertelityProcessing ? 
                        (<th className={TdStyle.ThStyle}>
                          <div className="inline-flex items-center font-semibold text-sm text-white cursor-default">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            계산 중...
                          </div>
                        </th>)
                        : 
                        (<th className={TdStyle.ThStyle}> {intertelity ? (parseFloat(intertelity.AUC) * 100).toFixed(2) : ''}%</th>)
                      }
                    </tr>
                  </thead>
                </table>
              </div>
            </div>
          </div>
        </div>
        <Heading tag='h2' className=' mt-7'>정자 분석 결과</Heading>
        <SpermCharts />
        <div className='my-10 flex flex-col gap-5 w-[1445px] p-5 bg-white drop-shadow-2xl rounded-md'>
          <Heading tag='h3'>정자 분석 결과</Heading>
          <hr />
          <div className="flex flex-center justify-between gap-4">
            {data ? (data.map((item: any, i: any) => (
              <div key={i} className="w-[230px] drop-shadow-sm flex flex-col gap-2 text-white rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-slate-700">
                <div className="py-4 font-bold text-xl text-center border-b">
                  <span className='capitalize'>{item.name} Class</span>
                </div>
                <div className="flex flex-col gap-4 px-5 py-4 text-lg">
                  <p className="font-semibold capitalize">평균 속도: <span className='ml-4 font-light lowercase'>{item.speed.toFixed(3)}&micro;m/s</span></p>
                  <p className="font-semibold capitalize">평균 거리: <span className='ml-4 font-light lowercase'>{item.distance.toFixed(3)}&micro;m</span></p>
                  <p className="font-semibold capitalize">전체 개수: <span className='ml-4 font-light lowercase'>{item.count}개</span></p>
                </div>
              </div>
            ))) : (
              <Text size='l' styles='text-[#888]'>데이터가 없습니다.</Text>
            )}
          </div>
        </div>
        <div className='my-10 flex flex-col gap-5 w-[1445px] p-5 bg-white drop-shadow-2xl rounded-md'>
          <Heading tag='h3'>상대 위치</Heading>
          <Text size='s' styles='text-[#888]'>내 정자 개수에 대한 상대적인 지표를 나타냅니다.</Text>
          <hr />
          <div className="">
            {
              postionData.map((item: any, index: any) => (
                <div className='flex flex-wrap gap-6 justify-between' key={index}>
                  {Object.keys(item.relativePosition).map((key, subIndex) => (
                    <div key={subIndex} className="relative mb-5 pt-1">
                      <div className="mb-4 flex h-8 rounded bg-slate-100 text-xs w-[300px] overflow-visible duration-500 hover:scale-110">
                        <div style={{ width: `${(parseFloat(item.patient[key]) / parseFloat(item.relativePosition[key]) * 100).toFixed(2)}%` }} className="bg-green-500 flex items-center justify-end rounded">
                          <span className="pr-1 text-balck-500 font-bold">{(parseFloat(item.patient[key]) / parseFloat(item.relativePosition[key]) * 100).toFixed(2)}%</span>
                        </div>
                      </div>
                      <div className="mb-2 flex items-center justify-between text-xs">
                        <div className="text-gray-600 font-semibold">{key}</div>
                        <div className='text-gray-600 '>50%</div>
                        <div className="text-gray-600">100%</div>
                      </div>
                    </div>
                  ))}
                </div>
              ))

            }
          </div>
        </div>
      </div>
      <Footer />
    </div >
  )
}

export default ResultsSperm;

export const postionData = [
  {
    "patient": {
      "ageAClass": "29",
      "ageBClass": "26",
      "ageCClass": "20",
      "ageDClass": "33",
      "allAClass": "29",
      "allBClass": "26",
      "allCClass": "20",
      "allDClass": "33",
    },
    "relativePosition": {
      "ageAClass": "59",
      "ageBClass": "104",
      "ageCClass": "73",
      "ageDClass": "120",
      "allAClass": "60",
      "allBClass": "106",
      "allCClass": "75",
      "allDClass": "120"
    }
  }
]
