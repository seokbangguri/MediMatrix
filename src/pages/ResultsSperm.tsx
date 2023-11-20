import { Heading, Text, Footer, Loading, Button } from '../components'
import { useState, useEffect } from 'react';
import { verifyToken } from '../auth/auth';
import Swal from "sweetalert2";
import { useAppContext } from '../state/index';
import { useNavigate } from 'react-router-dom';
import { VscRunAll } from "react-icons/vsc";
import axios from 'axios';
import SpermCharts from '../components/SpermModal/SpermCharts';



const apiUrl = process.env.REACT_APP_API_SPERMS;
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
  const [userName, setUserName] = useState('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [chromosome, setChromose] = useState<module4>()
  const [intertelity, setIntertelity] = useState<module4>()
  const [isButtonDisabled, setButtonDisabled] = useState(false);


  useEffect(() => {
    // 여기에 원하는 동작을 추가하세요.
    verifyToken().then(decodedToken => {
      if (decodedToken) {
        setUserName(decodedToken.name);
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

  window.onload = function () {
    setIsLoading(false);
  };

  const getChromosomalAbnormality = async () => {
    console.log('clicked')
    try {
      const response = await axios.post(apiUrl + '/getChromosome');
      console.log(response.data);
      setChromose(response.data)
      setButtonDisabled(true);
    } catch (error) {
      console.log('error');

    }
  };
  const getPredictInfertility = async () => {
    try {
      const response = await axios.post(apiUrl + '/getInfertility');
      console.log(response.data);
      setIntertelity(response.data)
    } catch (error) {
      console.log('error');

    }
  };

  if (isLoading) {
    return <Loading context='로딩중 입니다.' hidden={isLoading} />;
  }
  return (
    <div className='w-screen mt-[140px] '>
      <div className="flex flex-col items-center lg:px-10 mb-16">
        <Heading tag='h2'>정자 분석 결과</Heading>
        {/* <Text size='s' styles='mt-3 text-[#888] text-center'>좌측 환자 번호를 선택하시면 해당 번호의 결과를 확인하실 수 있습니다.</Text> */}
        <div className='mb-10 mt-16 flex flex-col gap-5 w-[1000px] md:w-[1445px] p-5 bg-white drop-shadow-2xl rounded-md'>
          <Heading tag='h3'>Title</Heading>
          <hr />
          <div className='flex gap-8 items-center justify-evenly w-full'>
            <div className='flex flex-col gap-4'>
              <div >
                <Button onClick={getChromosomalAbnormality} appearance='custom' styles='px-10 py-3 flex items-center justify-between gap-4 bg-[#4F7F9D] w-[300px]' disabled={isButtonDisabled}>염색체 이상 예측 <VscRunAll /></Button>
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
                      <th className={TdStyle.ThStyle}> {chromosome ? (parseFloat(chromosome.ACC) * 100).toFixed(2) : ''}%</th>
                      <th className={TdStyle.ThStyle}> 평균 신뢰도: </th>
                      <th className={TdStyle.ThStyle}>{chromosome ? (parseFloat(chromosome.AUC) * 100).toFixed(2) : ''}%</th>
                    </tr>
                  </thead>
                </table>
              </div>
              <div className='w-[500px] md:w-[800px] rounded-sm overflow-x-auto bg-white drop-shadow-md'>
                <table className='w-full table-auto'>
                  <thead className='text-center bg-dark-green'>
                    <tr>
                      <th className={TdStyle.ThStyle}> 평균 정확도: </th>
                      <th className={TdStyle.ThStyle}> {intertelity ? (parseFloat(intertelity.ACC) * 100).toFixed(2) : ''}%</th>
                      <th className={TdStyle.ThStyle}> 평균 신뢰도: </th>
                      <th className={TdStyle.ThStyle}>{intertelity ? (parseFloat(intertelity.AUC) * 100).toFixed(2) : ''}%</th>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>
          </div>
        </div>
        <SpermCharts />
        <div className='my-10 flex flex-col gap-5 w-[1445px] p-5 bg-white drop-shadow-2xl rounded-md'>
          <Heading tag='h3'>정자 분석결과</Heading>
          <hr />
          <div className="flex flex-center justify-between gap-4">
            {state.res.length ? (state.res.map((item: any, i: any) => (
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
                      <div className="mb-4 flex h-8 rounded bg-slate-100 text-xs w-[300px] overflow-visible">
                        <div style={{ width: `${item.relativePosition[key]}%` }} className="bg-green-500 flex items-center justify-end rounded">
                          <span className="pr-1 text-balck-500 font-bold">0.{item.relativePosition[key]}%</span>
                        </div>
                      </div>
                      <div className="mb-2 flex items-center justify-between text-xs">
                        <div className="text-gray-600 font-semibold">{key}</div>
                        <div className="text-gray-600">0.100%</div>
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
    "relativePosition": {
      "ageAClass": "20",
      "ageBClass": "50",
      "ageCClass": "70",
      "ageDClass": "30",
      "allAClass": "10",
      "allBClass": "20",
      "allCClass": "60",
      "allDClass": "40"
    }
  }
]
