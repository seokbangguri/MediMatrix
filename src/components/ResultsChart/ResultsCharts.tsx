
import { ResponsiveBar } from '@nivo/bar';


const ResultsCharts = () => {
  return (
    <div className='w-full drop-shadow-2xl bg-white p-4 my-10 rounded-md max-w-[1445px] px-5'>
        <h4 className='p-4 text-xl font-semibold'>문항별 정답률 통계</h4>
        <div className='w-full h-[350px]'>
        <ResponsiveBar
        data={data}
        keys={[
            'age',
        ]}
        indexBy="country"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'pastel2' }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'fries'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'sandwich'
                },
                id: 'lines'
            }
        ]}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Questions',
            legendPosition: 'middle',
            legendOffset: 32
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Age',
            legendPosition: 'middle',
            legendOffset: -40
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        legends={[
            {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={e=>e.id+": "+e.formattedValue+" in country: "+e.indexValue}
    />
        </div>
        
        
    </div>
  )
}

export default ResultsCharts

const data = [
  {
    "country": "4번",
    "age": 93,
    "hot dogColor": "hsl(152, 70%, 50%)",
  },
  {
    "country": "5번",
    "age": 80,
    "hot dogColor": "hsl(152, 70%, 50%)",
  },
  {
    "country": "6번",
    "age": 80,
    "hot dogColor": "hsl(154, 70%, 50%)",
  },
  {
    "country": "7번",
    "age": 95,
    "hot dogColor": "hsl(154, 70%, 50%)",
  },
  {
    "country": "8번",
    "age": 90,
    "hot dogColor": "hsl(154, 70%, 50%)",

  },
  {
    "country": "9번",
    "age": 95,
    "hot dogColor": "hsl(154, 70%, 50%)",
  },
  {
    "country": "10번",
    "age": 56,
    "hot dogColor": "hsl(149, 70%, 50%)",
  },
  {
    "country": "11번",
    "age": 54,
    "hot dogColor": "hsl(154, 70%, 50%)",
  },
  {
    "country": "12번",
    "age": 56,
    "hot dogColor": "hsl(152, 70%, 50%)",
  },
  {
    "country": "13번",
    "age": 37,
    "hot dogColor": "hsl(193, 70%, 50%)",
  },
  {
    "country": "14번",
    "age": 37,
    "hot dogColor": "hsl(154, 70%, 50%)",
  },
  {
    "country": "15번",
    "age": 35,
    "hot dogColor": "hsl(191, 70%, 50%)",

  },
  {
    "country": "16번",
    "age": 32,
    "hot dogColor": "hsl(4, 70%, 50%)",
  },
  {
    "country": "17번",
    "age": 30,
    "hot dogColor": "hsl(149, 70%, 50%)",
  },
  {
    "country": "18번",
    "age": 12,
    "hot dogColor": "hsl(340, 70%, 50%)",
  },
  {
    "country": "19번",
    "age": 12,
    "hot dogColor": "hsl(340, 70%, 50%)",
  },
  {
    "country": "20번",
    "age": 12,
    "hot dogColor": "hsl(340, 70%, 50%)",
  },
  {
    "country": "21번",
    "age": 12,
    "hot dogColor": "hsl(340, 70%, 50%)",
  },
  {
    "country": "22번",
    "age": 8,
    "hot dogColor": "hsl(340, 70%, 50%)",
  },
  {
    "country": "23번",
    "age": 7,
    "hot dogColor": "hsl(340, 70%, 50%)",
  },
  {
    "country": "24번",
    "age": 6,
    "hot dogColor": "hsl(340, 70%, 50%)",
  },
  {
    "country": "25번",
    "age": 4,
    "hot dogColor": "hsl(340, 70%, 50%)",
  },
  {
    "country": "26번",
    "age": 2,
    "hot dogColor": "hsl(340, 70%, 50%)",
  },
  {
    "country": "27번",
    "age": 2,
    "hot dogColor": "hsl(340, 70%, 50%)",
  }
  ,
  {
    "country": "28번",
    "age": 0,
    "hot dogColor": "hsl(340, 70%, 50%)",
  }
  ,
  {
    "country": "29번",
    "age": 0,
    "hot dogColor": "hsl(340, 70%, 50%)",
  }
  ,
  {
    "country": "30번",
    "age": 0,
    "hot dogColor": "hsl(340, 70%, 50%)",
  }
]