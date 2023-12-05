import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';

const Progress = ({ step, completed }: { step: String, completed: Boolean }) => {
    const { t } = useTranslation();
    const [width, setWidth] = useState(!completed ? '0%' : '50%');
    useEffect(() => {
        setWidth(completed ? "100%" : "50%");
    }, [completed]);
    return (
        <div className='flex flex-col w-full mb-4'>
            <p className="text-lg font-semibold">{t('complate_patient_registration')}</p>
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