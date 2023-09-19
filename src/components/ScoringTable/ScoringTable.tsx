import React from 'react'

const ScoringTable = () => {
    const data = [
        {
          index: '7번',
          image: 'https://placehold.co/600x400',
          text: '1. 선의 1/2 이상이 수직선으로부터 30도 이상 벗어나지 않을 것',
        },
        {
          index: '8번',
          image: 'https://placehold.co/600x400',
          text: '1. 선의 1/2 이상이 수직선으로부터 30도 이상 벗어나지 않을 것',
        },
        {
          index: '9번',
          image: 'https://placehold.co/600x400',
          text: '1. 고리의 높이(height)의 폭(width) 비율이 2:1 이내일 것',
        },
        {
          index: '10번',
          image: 'https://placehold.co/600x400',
          text: '1. 고리의 높이(height)의 폭(width) 비율이 2:1 이내일 것. 1. 고리의 높이(height)의 폭(width) 비율이 2:1 이내일 것',
        },
        {
          index: '11번',
          image: 'https://placehold.co/600x400',
          text: '1. 고리의 높이(height)의 폭(width) 비율이 2:1 이내일 것. 1. 고리의 높이(height)의 폭(width) 비율이 2:1 이내일 것.',
        },
      ];
  return (
    <div className="w-[800px] bg-white rounded-lg drop-shadow-2xl p-4">
      <table className="w-full table-fixed text-sm text-left text-gray-500 ">
        <tbody className=''>
          {data.map((item) => (
            <tr className='bg-white border-b border-[#888]' key={item.index}>
              <td className="text-center w-1/12 text-dark-green p-2">{item.index}</td>
              <td className='w-2/12 p-2'>
                <img src={item.image} alt={`example ${item.index}`} className="rounded-sm max-w-[95px]" />
              </td>
              <td className='w-5/12 p-2 text-xs'>{item.text}</td>
              <td className='w-2/12 p-2'><img src={item.image} alt={`example ${item.index}`} className="rounded-sm max-w-[95px]" /></td>
              <td className='w-2/12 p-2'><img src={item.image} alt={`example ${item.index}`} className="rounded-sm max-w-[95px]" /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ScoringTable