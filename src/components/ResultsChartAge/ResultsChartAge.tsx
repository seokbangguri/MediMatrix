import { ResponsivePie } from '@nivo/pie';

const data = [
  {
    "id": "elixir",
    "label": "elixir",
    "value": 153,
    "color": "hsl(275, 70%, 50%)"
  },
  {
    "id": "css",
    "label": "css",
    "value": 586,
    "color": "hsl(244, 70%, 50%)"
  },
  {
    "id": "php",
    "label": "php",
    "value": 413,
    "color": "hsl(327, 70%, 50%)"
  },
  {
    "id": "javascript",
    "label": "javascript",
    "value": 94,
    "color": "hsl(130, 70%, 50%)"
  },
  {
    "id": "make",
    "label": "make",
    "value": 566,
    "color": "hsl(182, 70%, 50%)"
  }
]
const ResultsChartAge = () => {
  return (
    <div className='w-[600px] bg-white p-4 rounded-md'>
      <h4 className='p-4 pb-6 text-sm font-semibold'>연령대별 채점 결과 점수 통계</h4>
      <div className='w-full h-[400px]'>
        <ResponsivePie
          data={data}
          margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
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
          defs={[
            {
              id: 'dots',
              type: 'patternDots',
              background: 'inherit',
              color: 'rgba(255, 255, 255, 0.3)',
              size: 4,
              padding: 1,
              stagger: true
            },
            {
              id: 'lines',
              type: 'patternLines',
              background: 'inherit',
              color: 'rgba(255, 255, 255, 0.3)',
              rotation: -45,
              lineWidth: 6,
              spacing: 10
            }
          ]}
          fill={[
            {
              match: {
                id: 'ruby'
              },
              id: 'dots'
            },
            {
              match: {
                id: 'c'
              },
              id: 'dots'
            },
            {
              match: {
                id: 'go'
              },
              id: 'dots'
            },
            {
              match: {
                id: 'python'
              },
              id: 'dots'
            },
            {
              match: {
                id: 'scala'
              },
              id: 'lines'
            },
            {
              match: {
                id: 'lisp'
              },
              id: 'lines'
            },
            {
              match: {
                id: 'elixir'
              },
              id: 'lines'
            },
            {
              match: {
                id: 'javascript'
              },
              id: 'lines'
            }
          ]}
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
      <h4 className='p-4 text-sm font-semibold'>채점시 유의사항</h4>
      <ul className='text-sm max-w-[480px] list-disc w-full ml-10 list-inside space-y-2'>
        <li className=''>수검자가 반응 과정에서 선을 두 개 이상 중첩되게 그려서 수정한 경우</li>
        <li className=''>수검자가 연결된 하나의 선이 아닌, 스케치식의 짧은 선으로 그린 경우 그려진 도형의 모양이 정답 채점 기준에 맞으면 1점을 준다.</li>
        <li className=''>수검자가 그린 도형의 크기는 채점에서 고려하지 않는다.</li>
        <li className=''>지우개 사용은 허락되지 않는다 덧그리거나 지우고 그린 경우에도 첫 번째 그림만 채점대상이 된다.</li>
        <li className=''>처음에 흐리게 스케치 한 후 진한 선으로 도형을 완성하는 것은 허용된다.</li>
        <li className=''>검사자가 미처 제지하지 못하는 사이에 수검자가 반응을 수정한 경우 수정 전의 도형이 정답 채점 기준에 명확하게 맞으면 1점을 주고, 만약 불분명하거나 확신하기 어려운 경우 오답으로 처리한다.</li>
      </ul>
      <hr className='my-2' />
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