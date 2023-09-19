
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
            <ResponsiveContainer  width="100%" height="100%" >
                <BarChart width={200} height={40} data={data}>
                    <XAxis dataKey="name" />
                    <YAxis type="number" domain={[0, 30]} />
                    <Tooltip />
                    <Bar dataKey="uv" fill="#3FB6D3" />
                </BarChart>
            </ResponsiveContainer>
        </div>
        
        
    </div>
  )
}

export default ResultsChartAge;