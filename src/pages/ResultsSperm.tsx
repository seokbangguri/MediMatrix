import { Heading, Text, Footer, Loading } from '../components'
import { useState, useEffect } from 'react';
import { verifyToken } from '../auth/auth';
import Swal from "sweetalert2";
import axios from 'axios';
import { PatientListType, SelectedTestInterface } from '../interface/pagesProps';
import { dataReal } from '../assets/testData.js';
import { ResponsivePie } from '@nivo/pie';
// import useSpermStore from '../state';



const apiUrl = process.env.REACT_APP_API_PATIENTS;

const ResultsSperm = () => {
  const [userName, setUserName] = useState('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [patientList, setPatientList] = useState<PatientListType>([]);
  //전달받은 선택된 날짜의 테스트 데이터
  const [selectedTestData, setSelectedTD] = useState<SelectedTestInterface>();
  // Zustand store managament
  // const spermData = useSpermStore((state: { data: any; }) => state.data);
  // const addData = useSpermStore((state) => state.addData);


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
              window.location.href = "/";
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
          window.location.href = "/";
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
        <Heading tag='h2'>정자 분석 결과</Heading>
        {/* <Text size='s' styles='mt-3 text-[#888] text-center'>좌측 환자 번호를 선택하시면 해당 번호의 결과를 확인하실 수 있습니다.</Text> */}
        <div className='mb-10 mt-16 flex flex-col gap-5 w-[1000px] md:w-[1445px] p-5 bg-white drop-shadow-2xl rounded-md'>
          <Heading tag='h3'>분석결과</Heading>
          <hr />
          <Text size='l' styles='text-[#888]'>염색체 이상 분석결과</Text>
          <div className="">
            <Text size='m' styles='text-[#888]'>염색체 이상 가능성은 80% 확률로 염색체 이상 가능성 높습니다</Text>
            <Text size='s' styles='text-[#888]'>염색체 이상 가능성은 80% 확률로 염색체 이상 가능성 높습니다</Text>
            <div className="flex justify-between gap-2 w-full mt-5"><div className="text-center h-[400px] w-[400px]">
              <span className="font-bold text-center">염색체 이상 가능성</span>
              <ResponsivePie
                data={data}
                margin={{ top: 20, right: 80, bottom: 80, left: 80 }}
                innerRadius={0.5}
                padAngle={0.7}
                cornerRadius={3}
                activeOuterRadiusOffset={8}
                borderWidth={1}
                borderColor={{
                  from: 'color',
                  modifiers: [
                    [
                      'darker',
                      0.2
                    ]
                  ]
                }}
                arcLinkLabelsSkipAngle={10}
                arcLinkLabelsTextColor="#333333"
                arcLinkLabelsThickness={2}
                arcLinkLabelsColor={{ from: 'color' }}
                arcLabelsSkipAngle={10}
                arcLabelsTextColor={{
                  from: 'color',
                  modifiers: [
                    [
                      'darker',
                      2
                    ]
                  ]
                }}
                legends={[
                  {
                    anchor: 'bottom',
                    direction: 'row',
                    justify: false,
                    translateX: 0,
                    translateY: 56,
                    itemsSpacing: 0,
                    itemWidth: 100,
                    itemHeight: 18,
                    itemTextColor: '#999',
                    itemDirection: 'left-to-right',
                    itemOpacity: 1,
                    symbolSize: 18,
                    symbolShape: 'circle',
                    effects: [
                      {
                        on: 'hover',
                        style: {
                          itemTextColor: '#000'
                        }
                      }
                    ]
                  }
                ]}
              />


            </div>
              <div className="text-center h-[400px] w-[400px]">
                <span className="font-bold text-center">염색체 이상 가능성</span>
                <ResponsivePie
                  data={data2}
                  margin={{ top: 20, right: 80, bottom: 80, left: 80 }}
                  innerRadius={0.5}
                  padAngle={0.7}
                  cornerRadius={3}
                  activeOuterRadiusOffset={8}
                  borderWidth={1}
                  borderColor={{
                    from: 'color',
                    modifiers: [
                      [
                        'brighter',
                        0.2
                      ]
                    ]
                  }}
                  arcLinkLabelsSkipAngle={10}
                  arcLinkLabelsTextColor="#333333"
                  arcLinkLabelsThickness={2}
                  arcLinkLabelsColor={{ from: 'color' }}
                  arcLabelsSkipAngle={10}
                  arcLabelsTextColor={{
                    from: 'color',
                    modifiers: [
                      [
                        'brighter',
                        2
                      ]
                    ]
                  }}
                  legends={[
                    {
                      anchor: 'bottom',
                      direction: 'row',
                      justify: false,
                      translateX: 0,
                      translateY: 56,
                      itemsSpacing: 0,
                      itemWidth: 100,
                      itemHeight: 18,
                      itemTextColor: '#999',
                      itemDirection: 'left-to-right',
                      itemOpacity: 1,
                      symbolSize: 18,
                      symbolShape: 'circle',
                      effects: [
                        {
                          on: 'hover',
                          style: {
                            itemTextColor: '#000'
                          }
                        }
                      ]
                    }
                  ]}
                />
              </div>
              <div className='h-full ml-8 w-[400px]'>
                <Text size='l' styles='text-[#888] mb-2'>염색체 이상 분석결과</Text>
                <ul className="flex flex-col list-disc">
                  <li className='py-2 border-b'>
                    <Text size='s' styles='text-[#888]'>염색체 이상 가능성은 80% 확률로 염색체 이상 가능성 높습니다</Text>
                  </li>
                  <li className='py-2 border-b'>
                    <Text size='s' styles='text-[#888]'>염색체 이상 가능성은 80% 확률로 염색체 이상 가능성 높습니다</Text>
                  </li>
                </ul>

              </div>
            </div>
          </div>
        </div>
        <div className='my-10 flex flex-col gap-5 w-[1445px] p-5 bg-white drop-shadow-2xl rounded-md'>
          <Heading tag='h3'>정자 분석결과</Heading>
          <hr />
          <div className="flex flex-center justify-between gap-4">
            {spermAnalysis.map((item, i) => {
              return <div key={i} className="w-[230px] drop-shadow-sm flex flex-col gap-2 text-white rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-slate-700">
                <div className="py-4 font-bold text-xl text-center border-b">
                  <span className='capitalize'>{item.name}</span>
                </div>
                <div className="flex flex-col gap-4 px-5 py-4 text-lg">
                  <p className="font-semibold capitalize">평균 속도: <span className='ml-4 font-light lowercase'>{item.speed}&micro;m/s</span></p>
                  <p className="font-semibold capitalize">평균 거리: <span className='ml-4 font-light lowercase'>{item.distance}&micro;m</span></p>
                  <p className="font-semibold capitalize">전체 갯수: <span className='ml-4 font-light lowercase'>{item.count}개</span></p>
                </div>
              </div>
            })}
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

export const spermAnalysis = [
  {
    "name": "total",
    "speed": "0.056",
    "distance": "55.987",
    "count": "220"
  },
  {
    "name": "aClass",
    "speed": "0.021",
    "distance": "21.987",
    "count": "60"

  },
  {

    "name": "bClass",
    "speed": "0.034",
    "distance": "23.987",
    "count": "120"

  },
  {

    "name": "cClass",
    "speed": "0.021",
    "distance": "18.987",
    "count": "30"

  },
  {

    "name": "dClass",
    "speed": "0.011",
    "distance": "10.987",
    "count": "10"

  }
]


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
export const data = [
  {
    "id": "낮음",
    "label": "낮음",
    "value": dataReal[0].chromosomeAge?.low,
    "color": "hsl(130, 92.30769230769232%, 64.31372549019608%)"
  },
  {
    "id": "높음",
    "label": "높음",
    "value": dataReal[0].chromosomeAge?.high,
    "color": "hsl(0, 88.29268292682926%, 59.80392156862745%)"
  }
]
export const data2 = [
  {
    "id": "low",
    "label": "낮음",
    "value": dataReal[1].chromosomeAll?.low,
    "color": "hsl(130, 70%, 50%)"
  },
  {
    "id": "high",
    "label": "높음",
    "value": dataReal[1].chromosomeAll?.high,
    "color": "hsl(182, 70%, 50%)"
  }
]