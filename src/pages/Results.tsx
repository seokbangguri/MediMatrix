import { Footer, Heading, PatientCard, ResultsCharts, ResultsTable, ScoringTable, Text } from '../components'


const Results = () => {
  return (
    <div className='w-screen mt-[140px] '>
      <div className="flex flex-col items-center lg:px-10">
        <Heading tag='h2'>채점결과</Heading>
        <Text size='s' styles='mt-3 text-[#888] text-center'>채점결과가 도착했습니다</Text>
        <div className='my-16 flex gap-5 max-w-[1445px] p-5 bg-white drop-shadow-2xl rounded-md'>
            <PatientCard name="재현" id='1244' score='12'/>
            <ResultsTable image='https://placehold.co/600x400' score='1'/>
        </div>
        <ResultsCharts/>
        <div className='flex gap-5 my-10 max-w-[1445px] px-5'>
          <ScoringTable/>
          <div></div>
        </div>
      </div>
        
      <Footer/>
    </div>
  )
}

export default Results