
const Progress = ({ step, completed }: { step: String, completed: Boolean }) => {
    return (
        <div className='flex flex-col w-[430px] mb-4'>
            <p className="text-lg mb-4">Complete patient registration</p>
            <div className="text-sm text-right mb-2">
                <span className='text-blue-500'>Step {step} of </span>
                2</div>
            <div className='bg-[#ebebeb] relative h-[10px] w-full rounded-2xl'>
                <div className={`bg-dark-green absolute top-0 left-0 h-full rounded-2xl ${completed ? 'w-[100%]' : 'w-1/2'}`}></div>
            </div>
        </div>
    )
}

export default Progress;