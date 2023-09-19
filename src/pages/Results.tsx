import React from 'react'
import { Heading, PatientCard, ResultsTable, Text } from '../components'

const Results = () => {
  return (
    <div className='flex flex-col items-center mt-[120px] py-5 px-5 lg:px-10 mx-auto md:max-w-[1445px] md:h-screen lg:py-0'>
        <Heading tag='h2'>채점결과</Heading>
        <Text size='s' styles='mt-3 text-[#888]'>채점결과가 도착했습니다</Text>
        <div className='py-16 flex gap-5'>
            <PatientCard name="재현" id='1244' score='12'/>
            <ResultsTable image='https://placehold.co/600x400' score='1'/>
        </div>
    </div>
  )
}

export default Results