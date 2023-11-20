import React from 'react'
import Text from '../Text/Text'
import { ResponsivePie } from '@nivo/pie'
import Heading from '../Heading/Heading'

const SpermCharts = () => {
    return (
        <div>
            <div className='mb-10 mt-16 flex flex-col gap-5 w-[1000px] md:w-[1445px] p-5 bg-white drop-shadow-2xl rounded-md'>
                <Heading tag='h3'>분석결과</Heading>
                <hr />
                <Text size='l' styles='text-[#888]'>염색체 이상 분석 결과 차트</Text>
                <div className="">
                    <Text size='m' styles='text-[#888]'>염색체 이상 가능성은 <span className=' text-red-600 font-black'>58%</span> 확률로 염색체 이상 가능성 <span className=' text-red-600 font-black'>낮습</span>니다.</Text>
                    <div className="flex justify-between gap-2 w-full mt-5">
                        <div className="text-center h-[400px] w-[400px]">
                            <span className="font-bold text-center">연령대 염색체 이상 가능성 비율</span>
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
                            <span className="font-bold text-center">전체 연령대 이상 가능성 비율</span>
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
                        <div className='h-full ml-8 w-[400px] flex flex-col'>
                            {/* <Text size='l' styles='text-[#888] mb-2'>염색체 이상 분석결과</Text> */}
                            <ul className="flex flex-col list-disc">
                                <li className='py-2 border-b'>
                                    <Text size='s' styles='text-[#888]'>진단한 사람들 중 염색체 이상의 비율을 나타낸 지표입니다.</Text>
                                </li>
                                <li className='py-2 border-b'>
                                    <Text size='s' styles='text-[#888]'>내 연령대와 전체에 대한 염색체 이상 가능성을 보여줍니다.</Text>
                                </li>
                            </ul>
                            <span className='mt-20 py-6 px-24 bg-dark-green text-center text-3xl rounded-md self-center text-white font-bold'>낮음</span>
                        </div>
                    </div>
                </div>
                <hr />
                <Text size='l' styles='text-[#888]'>난임 이상 분석 결과 차트</Text>
                <div className="">
                    <Text size='m' styles='text-[#888]'>난임 가능성은 <span className=' text-red-600 font-black'>58%</span> 확률로 난임 가능성 <span className=' text-red-600 font-black'>낮습</span>니다.</Text>
                    <div className='flex justify-between gap-2 w-full mt-5'>
                        <div className="text-center h-[400px] w-[400px]">
                            <span className="font-bold text-center">연령대 난임 이상 가능성 비율</span>
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
                            <span className="font-bold text-center">전체 연령대에 이상 가능성 비율</span>
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
                        <div className='h-full ml-8 w-[400px]  flex flex-col'>
                            {/* <Text size='l' styles='text-[#888] mb-2'>염색체 이상 분석결과</Text> */}
                            <ul className="flex flex-col list-disc">
                                <li className='py-2 border-b'>
                                    <Text size='s' styles='text-[#888]'>진단한 사람들 중 난임 가능성의 비율을 나타낸 지표입니다.</Text>
                                </li>
                                <li className='py-2 border-b'>
                                    <Text size='s' styles='text-[#888]'>내 연령대와 전체에 대한 난임 가능성을 보여줍니다.</Text>
                                </li>

                            </ul>
                            <span className='mt-20 py-6 px-24 bg-dark-green text-center text-3xl rounded-md self-center text-white font-bold'>낮음</span>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpermCharts


export const data = [
    {
        "id": "낮음",
        "label": "낮음",
        "value": '58',
        "color": "hsl(130, 92.30769230769232%, 64.31372549019608%)"
    },
    {
        "id": "높음",
        "label": "높음",
        "value": '42',
        "color": "hsl(0, 88.29268292682926%, 59.80392156862745%)"
    }
]
export const data2 = [
    {
        "id": "낮음",
        "label": "낮음",
        "value": '57',
        "color": "hsl(130, 70%, 50%)"
    },
    {
        "id": "높음",
        "label": "높음",
        "value": '43',
        "color": "hsl(182, 70%, 50%)"
    }
]