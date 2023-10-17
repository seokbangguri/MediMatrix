import { useEffect, useState } from "react";
const Progress = ({ step, completed }: { step: String, completed: Boolean }) => {
    const [width, setWidth] = useState(completed ? '100%' : '50%');
    useEffect(() => {
        // completed 값이 변경될 때마다 너비를 업데이트하여 애니메이션 효과를 줍니다.
        setWidth(completed ? "100%" : "50%");
    }, [completed]);
    return (
        <div className='flex flex-col w-[430px] mb-4'>
            <p className="text-lg mb-4">Complete patient registration</p>
            <div className="text-sm text-right mb-2">
                <span className='text-blue-500'>Step {step} of </span>
                2</div>
            <div className='bg-[#ebebeb] relative h-[10px] w-full rounded-2xl'>
                <div className={`progress-bar bg-dark-green absolute top-0 left-0 h-full rounded-2xl`} style={{ width: width }}></div>
            </div>
        </div>
    )
}

export default Progress;