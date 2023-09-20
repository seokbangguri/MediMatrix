
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Heading from '../Heading/Heading';

const data = [
  {
    name: '2세',
    uv: 6,
    pv: 100,
    amt: 100,
  },
  {
    name: '3세',
    uv: 11,
    pv: 100,
    amt: 100,
  },
  {
    name: '4세',
    uv: 14,
    pv: 100,
    amt: 100,
  },
  {
    name: '5세',
    uv: 17,
    pv: 100,
    amt: 100,
  },
  {
    name: '6세',
    uv: 19,
    pv: 100,
    amt: 100,
  },
  {
    name: '7세',
    uv: 20,
    pv: 100,
    amt: 100,
  },
  {
    name: '8세',
    uv: 20.5,
    pv: 100,
    amt: 100,
  },
  {
    name: '9세',
    uv: 21,
    pv: 100,
    amt: 100,
  },
  {
    name: '10세',
    uv: 21.3,
    pv: 100,
    amt: 100,
  },
  {
    name: '11세',
    uv: 21.6,
    pv: 100,
    amt: 100,
  },
  {
    name: '12세',
    uv: 22,
    pv: 100,
    amt: 100,
  },
  {
    name: '15세',
    uv: 22.5,
    pv: 100,
    amt: 100,
  },
  {
    name: '16세',
    uv: 23,
    pv: 100,
    amt: 100,
  },
  {
    name: '17세',
    uv: 24,
    pv: 100,
    amt: 100,
  },
  {
    name: '18세 이상',
    uv: 25,
    pv: 100,
    amt: 100,
  },
];
const ResultsChartAge = () => {
  return (
    <div className='w-[600px] h-[300px] bg-white p-4 rounded-md'>
      <h4 className='p-4 pb-6 text-sm font-semibold'>연령대별 채점 결과 점수 통계</h4>
      <div className='w-full h-[200px]'>
        <ResponsiveContainer width="100%" height="100%" >
          <BarChart width={200} height={40} data={data}>
            <XAxis dataKey="name" />
            <YAxis type="number" domain={[0, 30]} />
            <Tooltip />
            <Bar dataKey="uv" fill="#3FB6D3" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <h4 className='p-4 text-sm font-semibold'>채점시 유의사항</h4>
      <ul className='text-sm max-w-[480px] list-disc w-full ml-10 list-inside space-y-2'>
        <li className=''>수검자가 반응 과정에서 선을 두 개 이상 중첩되게 그려서 수정한 경우</li>
        <li className=''>수검자가 연결된 하나의 선이 아닌, 스케치식의 짧은 선으로 그린 경우 그려진 도형의 모양이 정답 채점 기준에 맞으면 1점을 준다.</li>
        <li className=''>수검자가 그린 도형의 크기는 채점에서 고려하지 않는다.</li>
        <li className=''>지우개 사용은 허락되지 않는다 덧그리거나 지우고 그린 경우에도 첫 번째 그림만 채점대상이 된다.</li>
        <li className=''>처음에 흐리게 스케치 한 후 진한 선으로 도형을 완성하는 것은 허용된다.</li>
        <li className=''>검사자가 미처 제지하지 못하는 사이에 수검자가 반응을 수정한 경우 수정 전의 도형이 정답 채점 기준에 명확하게 맞으면 1점을 주고, 만약 불분명하거나 확신하기 어려운 경우 오답으로 처리한다.</li>
      </ul>
      <hr className='my-2'/>
      <h4 className='p-4 text-sm font-semibold'>총점 산정 방식</h4>
      <ul className='text-sm max-w-[480px] list-disc w-full ml-10 list-inside space-y-2'>
        <li className=''>VMI 각 문항에 대한 채점이 완성되고 나면 1점 문항의 수르 합산하여 수검자의 VMI 원점수를 산출한다.</li>
        <li className=''>이전보다 어려운 문항을 성공적으로 수행했을 때, 표준 절차상 실시하지 않은 쉬운 문항에 대해서는 성공한 것으로 간주하여 1점을 준다.</li>
        <li className=''>검사자가 각 문항에 대해 채점을 해나가는 도중 연속 5문항 득점에 실패하는 경우 그 직전까지의 득점에 성공한 문항수의 합이 그 수검자의 VMI 원점수가 된다.</li>
        <li className=''>득점에 연속 5문항 실패한 이후에 다시 득점에 성공하는 문항은 VMI 원점수에 포함하지 않는다.</li>
      </ul>

    </div>
  )
}

export default ResultsChartAge;