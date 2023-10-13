import { Heading, PatientCard, ResultsCharts, ResultsChartAge, ResultsTable, ScoringTable, Text, Footer } from '../components'


const Results = () => {
  const userName = sessionStorage.getItem('name');
  
  return (
    <div className='w-screen mt-[140px] '>
      <div className="flex flex-col items-center lg:px-10 mb-16">
        <Heading tag='h2'>{userName}님의 환자 목록</Heading>
        <Text size='s' styles='mt-3 text-[#888] text-center'>좌측 환자 번호를 선택하시면 해당 번호의 결과를 확인하실 수 있습니다.</Text>
        <div className='my-16 flex gap-5 max-w-[1445px] p-5 bg-white drop-shadow-2xl rounded-md'>
          <PatientCard name="재현" id='1244' score='12' options={['test1','test2']}/>
          <ResultsTable image='https://placehold.co/600x400' score='1' />
        </div>
        <ResultsCharts/>
        <div className='flex flex-col md:flex-row justify-between my-10 max-w-[1445px] p-5 bg-white drop-shadow-2xl rounded-md'>
        <ResultsChartAge/>
        <ScoringTable/>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Results