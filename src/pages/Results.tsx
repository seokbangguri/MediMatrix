import { Heading, PatientCard, ResultsCharts, ResultsTable, ScoringTable, Text } from '../components'


const Results = () => {
  return (
    <div className='flex flex-col  mt-[120px] py-5 px-5 lg:px-10  md:max-w-[1445px] md:h-screen lg:py-0'>
        <Heading tag='h2'>채점결과</Heading>
        <Text size='s' styles='mt-3 text-[#888] text-center'>채점결과가 도착했습니다</Text>
        <div className='py-16 flex gap-5'>
            <PatientCard name="재현" id='1244' score='12'/>
            <ResultsTable image='https://placehold.co/600x400' score='1'/>
        </div>
        <ResultsCharts/>
        <div className='flex gap-5 my-10'>
        <ScoringTable/>
        <div></div>
        </div>
        
    </div>
  )
}

export default Results