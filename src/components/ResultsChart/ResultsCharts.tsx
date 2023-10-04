
// import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Heading from '../Heading/Heading';

const data = [
    {
      name: '5세',
      uv: 10,
      pv: 100,
      amt: 100,
    },
    {
      name: '5세',
      uv: 20,
      pv: 100,
      amt: 100,
    },
    {
      name: '5세',
      uv: 30,
      pv: 100,
      amt: 100,
    },
    {
      name: '5세',
      uv: 60,
      pv: 100,
      amt: 100,
    },
    {
      name: '5세',
      uv: 60,
      pv: 100,
      amt: 100,
    },
    {
      name: '5세',
      uv: 60,
      pv: 100,
      amt: 100,
    },
    {
      name: '5세',
      uv: 60,
      pv: 100,
      amt: 100,
    },
    {
        name: '5세',
        uv: 0,
        pv: 100,
        amt: 100,
      },
      {
        name: '5세',
        uv: 60,
        pv: 100,
        amt: 100,
      },
      {
        name: '5세',
        uv: 60,
        pv: 100,
        amt: 100,
      },
      {
        name: '5세',
        uv: 10,
        pv: 100,
        amt: 100,
      },
      {
        name: '5세',
        uv: 0,
        pv: 100,
        amt: 100,
      },
      {
        name: '5세',
        uv: 60,
        pv: 100,
        amt: 100,
      },
      {
        name: '5세',
        uv: 60,
        pv: 100,
        amt: 100,
      },
      {
        name: '5세',
        uv: 10,
        pv: 100,
        amt: 100,
      },
  ];
const ResultsCharts = () => {
  return (
    <div className='w-full drop-shadow-2xl bg-white p-4 my-10 rounded-md max-w-[1445px] px-5'>
        <h4 className='p-4 pb-6 text-xl font-semibold'>문항별 정답률 통계</h4>
        <div className='w-full h-[250px]'>
            {/* <ResponsiveContainer  width="100%" height="100%" >
                <BarChart width={150} height={40} data={data}>
                    <XAxis dataKey="name" />
                    <YAxis type="number" domain={[0, 100]} />
                    <Tooltip />
                    <Bar dataKey="uv" fill="#36ACEA" />
                </BarChart>
            </ResponsiveContainer> */}
        </div>
        
        
    </div>
  )
}

export default ResultsCharts