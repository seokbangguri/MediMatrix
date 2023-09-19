import React from 'react'

const ResultsTable = ({image, score}: {
    image: string,
    score: string
}) => {
  return (
    <div className='w-full drop-shadow-xl bg-white py-3 px-2 rounded-md'>
        <div className="flex  flex-wrap justify-center gap-4">
            <TableCard image={image} score={score}/>
            <TableCard image={image} score={score}/>
            <TableCard image={image} score={score}/>
            <TableCard image={image} score={score}/>
            <TableCard image={image} score={score}/>
            <TableCard image={image} score={score}/>
            <TableCard image={image} score={score}/>
            <TableCard image={image} score={score}/>
            {/* <TableCard image={image} score={score}/>
            <TableCard image={image} score={score}/>
            <TableCard image={image} score={score}/>
            <TableCard image={image} score={score}/>
            <TableCard image={image} score={score}/> */}
            {/* <TableCard image={image} score={score}/>
            <TableCard image={image} score={score}/>
            <TableCard image={image} score={score}/>
            <TableCard image={image} score={score}/>
            <TableCard image={image} score={score}/>
            <TableCard image={image} score={score}/>
            <TableCard image={image} score={score}/>
            <TableCard image={image} score={score}/>
            <TableCard image={image} score={score}/>
            <TableCard image={image} score={score}/>
            <TableCard image={image} score={score}/>
            <TableCard image={image} score={score}/>
            <TableCard image={image} score={score}/> */}
        </div>
    </div>
  )
}

export default ResultsTable;


export const TableCard = ({image, score}: {
    image: string,
    score: string
}) =>  {
    return (
        <div className="w-[160px] drop-shadow-xl bg-slate-200 px-3 py-3 rounded-sm">
            <img src={image?.length ? image : 'https://www.seekpng.com/png/detail/110-1100707_person-avatar-placeholder.png'} className='w-full max-h-[150px] rounded-sm bg-cover mb-2' alt='patient'/>
            <div className="flex items-center font-medium text-black justify-between px-2">문헝번호 <span className=' font-normal text-dark-green'>{1}</span></div>
            <div className="flex items-center font-medium text-black justify-between px-2">점수 <span className=' font-normal text-dark-green'>{score}</span></div>
        </div>
    )
}