import { PatientCardProps } from './patientCard.props'

const PatientCard = ({name, id, score, image}: PatientCardProps) => {
  return (
    <div className='min-w-[240px] bg-white py-3 px-4 rounded-md h-fit'>
        <div className=" border-b border-button-green/20 pb-2">
            <img src={image?.length ? image : 'https://www.seekpng.com/png/detail/110-1100707_person-avatar-placeholder.png'} className='w-full max-h-[150px] rounded-sm bg-cover mb-2' alt='patient'/>
            <p className='text-center font-semibold text-lg py-2'>환자 정보</p>
            <div className="flex items-center font-semibold text-black justify-between px-2">성명 <span className=' font-normal text-dark-green'>{name}</span></div>
            <div className="flex items-center font-semibold text-black justify-between px-2">번호 <span className=' font-normal text-dark-green'>{id}</span></div>
            <div className="flex items-center font-semibold text-black justify-between px-2">총점 <span className=' font-normal text-dark-green'>{score}</span></div>
        </div>
        <div className="max-h-[500px] overflow-x-hidden overflow-y-scroll !scrollbar-thin !scrollbar-track-transparent !scrollbar-thumb-[#e3e6e5] ">
            <p className='text-center font-semibold text-lg py-2'>문항별 정답률</p>
            <div className="flex items-center font-semibold text-black justify-between px-2">7번 <span className=' font-normal text-dark-green'>45.4%</span></div>
            <div className="flex items-center font-semibold text-black justify-between px-2">8번 <span className=' font-normal text-dark-green'>45.4%</span></div>
            <div className="flex items-center font-semibold text-black justify-between px-2">9번 <span className=' font-normal text-dark-green'>45.4%</span></div>
            <div className="flex items-center font-semibold text-black justify-between px-2">10번 <span className=' font-normal text-dark-green'>45.4%</span></div>
            <div className="flex items-center font-semibold text-black justify-between px-2">11번 <span className=' font-normal text-dark-green'>45.4%</span></div>
            <div className="flex items-center font-semibold text-black justify-between px-2">12번 <span className=' font-normal text-dark-green'>45.4%</span></div>
            <div className="flex items-center font-semibold text-black justify-between px-2">13번 <span className=' font-normal text-dark-green'>45.4%</span></div>
            <div className="flex items-center font-semibold text-black justify-between px-2">14번 <span className=' font-normal text-dark-green'>45.4%</span></div>
            <div className="flex items-center font-semibold text-black justify-between px-2">15번 <span className=' font-normal text-dark-green'>45.4%</span></div>
            <div className="flex items-center font-semibold text-black justify-between px-2">16번 <span className=' font-normal text-dark-green'>45.4%</span></div>
            <div className="flex items-center font-semibold text-black justify-between px-2">17번 <span className=' font-normal text-dark-green'>45.4%</span></div>
            <div className="flex items-center font-semibold text-black justify-between px-2">18번 <span className=' font-normal text-dark-green'>45.4%</span></div>
            <div className="flex items-center font-semibold text-black justify-between px-2">19번 <span className=' font-normal text-dark-green'>45.4%</span></div>
            <div className="flex items-center font-semibold text-black justify-between px-2">20번 <span className=' font-normal text-dark-green'>45.4%</span></div>
            <div className="flex items-center font-semibold text-black justify-between px-2">21번 <span className=' font-normal text-dark-green'>45.4%</span></div>
            <div className="flex items-center font-semibold text-black justify-between px-2">22번 <span className=' font-normal text-dark-green'>45.4%</span></div>
            <div className="flex items-center font-semibold text-black justify-between px-2">23번 <span className=' font-normal text-dark-green'>45.4%</span></div>
            <div className="flex items-center font-semibold text-black justify-between px-2">24번 <span className=' font-normal text-dark-green'>45.4%</span></div>
            <div className="flex items-center font-semibold text-black justify-between px-2">25번 <span className=' font-normal text-dark-green'>45.4%</span></div>
            <div className="flex items-center font-semibold text-black justify-between px-2">26번 <span className=' font-normal text-dark-green'>45.4%</span></div>
            <div className="flex items-center font-semibold text-black justify-between px-2">27번 <span className=' font-normal text-dark-green'>45.4%</span></div>
            <div className="flex items-center font-semibold text-black justify-between px-2">28번 <span className=' font-normal text-dark-green'>45.4%</span></div>
            <div className="flex items-center font-semibold text-black justify-between px-2">29번 <span className=' font-normal text-dark-green'>45.4%</span></div>
            <div className="flex items-center font-semibold text-black justify-between px-2">30번 <span className=' font-normal text-dark-green'>45.4%</span></div>
        </div>
    </div>
  )
}

export default PatientCard