import React from 'react'
import {u7,u8,u9,u10,u11,u12,u13,u14,u15,u16,u17,u18,u19,u20,u21,u22,u23,u24,u25,u26,u27,u28,u29,u30} from '../../assets';

const imageArray = [
    u7,
    u8,
    u9,
    u10,
    u11,
    u12,
    u13,
    u14,
    u15,
    u16,
    u17,
    u18,
    u19,
    u20,
    u21,
    u22,
    u23,
    u24,
    u25,
    u26,
    u27,
    u28,
    u29,
    u30,
];
const scoreArray = [
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "0",
    "1",
    "0",
    "1",
    "1",
    "1",
    "1",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0"
]

const ResultsTable = ({ image, score, }: { image: string, score: string }) => {
    const imageRange = Array.from({ length: 24 }, (_, index) => index + 7);

return (
    <div className='w-full h-[807px] drop-shadow-xl bg-white py-3 px-2 rounded-md overflow-x-scroll'>
    <div className="flex flex-wrap justify-center gap-4">
      {imageRange.map((imageNumber, index) => (
          <TableCard
            index={index+7}
            key={imageNumber}
            image={imageArray[index]} // 이미지 import 배열을 사용하여 이미지를 지정합니다.
            score={scoreArray[index]}
          />
      ))}
    </div>
    </div>
)
}

export default ResultsTable;


export const TableCard = ({image, score, index}: {
    image: string,
    score: string,
    index: number,
}) =>  {
    return (
        <div className="w-[160px] drop-shadow-xl bg-slate-200 px-3 py-3 rounded-sm">
            <img src={image?.length ? image : 'https://www.seekpng.com/png/detail/110-1100707_person-avatar-placeholder.png'} className='w-full max-h-[150px] rounded-sm bg-cover mb-2' alt='patient'/>
            <div className="flex items-center font-medium text-black justify-between px-2">문항번호 <span className=' font-normal text-dark-green'>{index}</span></div>
            <div className="flex items-center font-medium text-black justify-between px-2">점수 <span className=' font-normal text-dark-green'>{score}</span></div>
        </div>
    )
}