import React from 'react'
import {c7,c8,c9,c10,c11,c12,c13,c14,c15,c16,c17,c18,c19,c20,c21,c22,c23,c24,c25,c26,c27,c28,c29,c30} from '../../assets';


// const cImageArray = [c7,c8,c9,c10,c11,c12,c13,c14,c15,c16,c17,c18,c19,c20,c21,c22,c23,c24,c25,c26,c27,c28,c29,c30,]

const ScoringTable = () => {
    const data = [
        {
          index: '7번',
          image: c7,
          text: '1. 선의 1/2 이상이 수직선으로부터 30도 이상 벗어나지 않을 것',
        },
        {
          index: '8번',
          image: c8,
          text: '1. 선의 1/2 이상이 수직선으로부터 30도 이상 벗어나지 않을 것',
        },
        {
          index: '9번',
          image: c9,
          text: '1. 고리의 높이(height)의 폭(width) 비율이 2:1 이내일 것',
        },
        {
          index: '10번',
          image: c10,
          text: '1. 고리의 높이(height)의 폭(width) 비율이 2:1 이내일 것. 1. 고리의 높이(height)의 폭(width) 비율이 2:1 이내일 것',
        },
        {
          index: '11번',
          image: c11,
          text: '1. 고리의 높이(height)의 폭(width) 비율이 2:1 이내일 것. 1. 고리의 높이(height)의 폭(width) 비율이 2:1 이내일 것.',
        },
      ];
  return (
    <div className="w-[800px] bg-white rounded-lg p-4">
      <h4 className='p-4 pb-6 text-xl font-semibold'>채점 규칙</h4>
      <table className="w-full table-fixed text-sm text-left text-gray-500 ">
        <tbody className=''>
          {data.map((item) => (
            <tr className='bg-white border-b border-[#888] flex items-center' key={item.index}>
              <td className="text-center w-1/12 text-dark-green p-2">{item.index}</td>
              <td className='w-2/12 p-2'>
                <img src={item.image} alt={`example ${item.index}`} className="rounded-sm max-w-[95px]" />
              </td>
              <td className='w-5/12 p-2 text-xs'>{item.text}</td>
              <td className='w-2/12 p-2 text-center flex flex-col items-center justify-center'>
                <span className='text-sm mb-1'>1점 예시</span>
                <img src={item.image} alt={`example ${item.index}`} className="rounded-sm w-[95px]" />
                </td>
              <td className='w-2/12 p-2 text-center flex flex-col items-center justify-center'>
              <span className='text-sm mb-1'>0점 예시</span>
                <img src={item.image} alt={`example ${item.index}`} className="rounded-sm w-[95px]" />
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ScoringTable