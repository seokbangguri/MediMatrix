import React from 'react'
import {c7,c8,c9,c10,c11,c12,c13,c14,c15,c16,c17,c18,c19,c20,c21,c22,c23,c24,c25,c26,c27,c28,c29,c30,  uc7,uc8,uc9,uc10,uc11,uc12,uc13,uc14,uc15,uc16,uc17,uc18,uc19,uc20,uc21,uc22,uc23,uc24,uc25,uc26,uc27,uc28,uc29,uc30,  uw7,uw8,uw9,uw10,uw11,uw12,uw13,uw14,uw15,uw16,uw17,uw18,uw19,uw20,uw21,uw22,uw23,uw24,uw25,uw26,uw27,uw28,uw29,uw30} from '../../assets';

const ScoringTable = () => {
    const data = [
        {
          index: '7번',
          image: c7,
          imageCorrect: uc7,
          imageWrong: uw7,
          text: '<ul><li>1. 선의 1/2 이상이 수직선으로부터 30도 이상 벗어나지 않을 것</li></ul>',
        },
        {
          index: '8번',
          image: c8,
          imageCorrect: uc8,
          imageWrong: uw8,
          text: '<ul><li>1. 선의 1/2 이상이 수직선으로부터 30도 이상 벗어나지 않을 것</li></ul>',
        },
        {
          index: '9번',
          image: c9,
          imageCorrect: uc9,
          imageWrong: uw9,
          text: '<ul><li>1. 고리의 높이(height)의 폭(width) 비율이 2:1 이내일 것</li></ul>',
        },
        {
          index: '10번',
          image: c10,
          imageCorrect: uc10,
          imageWrong: uw10,
          text: `<ul><li>1. 2개의 선이 교차할 것</li><li>2. 교차점에서부터 뻗어 나온 4개의 발(legs)은 길이가 적어도 6.4mm일 것 (추가된 부분은 포함시키지 않음)<li>3. 2개의 선은 각각 적어도 1/2이 수평 또는 수직으로부터 20도 이상 벗어나지 않을 것</li></li></ul>`,
        },
        {
          index: '11번',
          image: c11,
          imageCorrect: uc11,
          imageWrong: uw11,
          text: `<ul><li>1. 하나의 선일 것 (추가로 그린 것도 가능)</li><li>2. 선의 1/2 이상이 110~160도 사이에 있을 것</li><li>3. 갑작스런 방향 변화가 없을 것</li></ul>`,
        },
        {
          index: '12번',
          image: c12,
          imageCorrect: uc12,
          imageWrong: uw12,
          text: `<ul><li>1. 4개의 분명한 변이 존재할 것 (모서리는 각지지 않아도 됨)</li></ul>`,
        },
        {
          index: '13번',
          image: c13,
          imageCorrect: uc13,
          imageWrong: uw13,
          text: `<ul><li>1. 하나의 선일 것 (추가로 그린 것도 가능)</li><li>선의 1/2 이상이 20~70도 사이, 110~160도 사이일 것</li><li>3. 갑작스런 방향 변화가 없을 것</li></ul>`,
        },
        {
          index: '14번',
          image: c14,
          imageCorrect: uc14,
          imageWrong: uw14,
          text: `<ul><li>1. 2개의 선이 교차할 것</li><li>2. 선의 각도가 각각 20~70도 사이, 110~160도 사이일 것</li><li>3. 4개의 발(legs) 중 가장 긴 것은 가장 짧을 것의 2배를 넘지 않을 것(추가된 부분은 포함시키지 않음)</li><li>4. 2개의 선을 교차시키지 않고 4개의 선을 각각 따로 그려서 연결한 경우 0점으로 채점</li></ul>`,
        },
        {
          index: '15번',
          image: c15,
          imageCorrect: uc15,
          imageWrong: uw15,
          text: `<ul><li>1. 3개의 분명한 변이 존재할 것</li><li>2. 하나의 모서리가 다른 두 모서리보다 명백하게 높은 위치에 있을 것</li></ul>`,
        },
        {
          index: '16번',
          image: c16,
          imageCorrect: uw16,
          imageWrong: uw16,
          text: `<ul><li>1. 열린 정사각형과 원의 겹침/떨어짐 정도가 1.6mm 이하일 것</li><li>2. 원 도는 열린 정사각형에 심각한 뒤틀림(distortions)이 없을 것</li><li>3. 원과 열린 정사각형의 크기가 서로 비슷할 것(비율이 2:1 이내)</li><li>4. 열린 정사각형의 한각을 지나 원을 2등분하는 직선은 정사각형 안으로 들어가 있어야 힘</li></ul>`,
        },
        {
          index: '17번',
          image: c17,
          imageCorrect: uc17,
          imageWrong: uw17,
          text: `<ul><li>1. 3개의 선이 교차할 것</li><li>2. 교차의 간격(intersection zap)이 3.2mm 이하일 것</li><li>3. 수평선의 12이상이 15도 이내로만 기울어질 것</li><li>4. 수평센이 아닌 2개의 사선은 컬이의 1/2이상이 수직에서부터 10이상의 각도를 가질 것</li><li>5. 3개의 선을 교차시키지 않고 6개의 선을 각각 따로 그려 연결한 경우 0점으로 채점</li></ul>`,
        },
        {
          index: '18번',
          image: c18,
          imageCorrect: uc18,
          imageWrong: uw18,
          text: `<ul><li>1. 화살 방향이 역전되거나 막대에서 떨어져 있지 않을 것</li><li>2. 선의 끝부분이 날카로운 각을 형성할 것</li><li>3. 방향 표시가 명확하고, 혼선이 없을 것</li><li>4. 4개의 발(legs) 중 가장 긴 것은 가장 짧은 것의 2배를 넘지 않을 것</li><li>5. 도형 10(수직•수평선 교차)의 모든 기준을 중촉할 것</li></ul>`,
        },
        {
          index: '19번',
          image: c19,
          imageCorrect: uc19,
          imageWrong: uw19,
          text: `<ul><li>1. 3개의 원이 겹치 있고, 7개의 공간이 있을 것 (공간의 중심에 삼각형이 나타나야 함)</li><li>2. 1개의 원이 다른 2개의 원보다 명확히 밑에 있을 것</li></ul>`,
        },
        {
          index: '20번',
          image: c20,
          imageCorrect: uc20,
          imageWrong: uw20,
          text: `<ul><li>1. 6개의 원</li><li>2. 밑변(Baseline)과 적어도 나머지 한 변이 "직선"을 이룰 것</li><li>3. 밑변은 수평으로부터 기울어진 정도가 10도 이내일 것</li><li>4. 같은 변(side)에서 원들 간 공간의 비율은 2:1 이하일 것</li></ul>`,
        },
        {
          index: '21번',
          image: c21,
          imageCorrect: uc21,
          imageWrong: uw21,
          text: `<ul><li>4개의각을 가진 정사각형과 원</li><li>2. 정사각형의 대각선은 수직 또는 수평으로부터 벗어난 정도가 10도 이내이며, 원과 막힌 각으로 접해있을 것</li><li>3. 도형을 간 겹침/떨어짐의 정도가 1.6mm 이하일 것</li><li>4. 접점은 원 높이의 중아 3/1 이내에 있을 것</li><li>5. 원과 정사각형의 크기의 비율이 2:1 이하일 것</li></ul>`,
        },
        {
          index: '22번',
          image: c22,
          imageCorrect: uc22,
          imageWrong: uw22,
          text: `<ul><li>1, 4개의 각이 잘 그려져 있는 것(등은 1.6mm 이하일 것)</li><li>2. 2개의 둔각을 연결하는 선은 수평으로부터 벗어난 정도가 20도 이내일 것</li><li>3. 개의 귀(dog ears) 모양의 각이 없을 것</li><li>4. 가장 많은 변이 가장 간 변의 2/3보다 길 것</li><li>5. 2개의 예각은 모두 60도 보다 좁을 것</li></ul>`,
        },
        {
          index: '23번',
          image: c23,
          imageCorrect: uc23,
          imageWrong: uw23,
          text: `<ul><li>1. 2개의 삼각형</li><li>2. 내측 삼각형의 3각 중 적어도 2개는 외측 삼각형의 번의 거의 중앙에 닿아야 하고, 1개는 외측 삼각형의 변과 겹침/떨어짐의 정도가 1.6mm 이하일
          것</li><li>3. 외측 삼각형의 좌축각의 각도는 60~120도 사이에 있을 것</li><li>4. 외측 삼각형의 우측변은 수직으로부터 10도 이상 기울어져 있을 것</li><li>5. 내측 상각형의 꼭지점은 외즉 삼각형의 변의 중앙 근처에서 닿아있을 것</li></ul>`,
        },
        {
          index: '24번',
          image: c24,
          imageCorrect: uc24,
          imageWrong: uw24,
          text: `<ul><li>1. 정확하게 8개의 점, 또는 원, 또는 봉선(dashes)</li><li>2. 원 모양을 이룰 것: 인접한 3개의 점이 직선으로 배열되지 않을 것</li><li>3. 간격(spacing): 2개의 점 사이의 간격은 가장 큰 것이 가장 작은 것의 2배를 넘지 않음</li></ul>`,
        },
        {
          index: '25번',
          image: c25,
          imageCorrect: uc25,
          imageWrong: uw25,
          text: `<ul><li>1. 모든 변이 분명하게 나타날 것 (둔각 중 하나는 둥글게 되어 있어도 됨)</li><li>2. 모서리에 방향의 혼란이 없을 것</li><li>3. 겹침이 분명하게 존재하되, 과도하게 겹치지는 않을 것</li></ul>`,
        },
        {
          index: '26번',
          image: c26,
          imageCorrect: uc26,
          imageWrong: uw26,
          text: `<ul><li>1. 4개의 각이 잘 그려져 있을 것(틈은 1.6mm 이하일 것)</li><li>2. 2개의 예각은 각각 60도 보다 좁을 것</li><li>3. 2개의 예각을 연결하는 선은 수평으로부터 벗어난 정도가 20도 이내일 것</li><li>4. 가장 짧은 빈이 가장 긴 벤의 2/3보다 길 것</li></ul>`,
        },
        {
          index: '27번',
          image: c27,
          imageCorrect: uc27,
          imageWrong: uw27,
          text: `<ul><li>1. 완전한 이중 원이 3개 있을 것</li><li>2. 모든 원이 중첩될 것</li><li>3. 명확한 입체적인 중첩이 적어도 한 번은 있을 것</li></ul>`,
        },
        {
          index: '28번',
          image: c28,
          imageCorrect: uc28,
          imageWrong: uw28,
          text: `<ul><li>1. 부분들(parts)의 개수(7개)가 정확할 것</li><li>2. 방향이 정확할 것</li><li>3. 혼란이 보이지 않을 것</li><li>4. 꼭지점을 이루는 3개의 선이 1.6mm 이상 떨어져 있지 않을 것</li></ul>`,
        },
        {
          index: '29번',
          image: c29,
          imageCorrect: uc29,
          imageWrong: uw29,
          text: `<ul><li>1. 외측 도형은 평행사변형(또는 정사각형) 밀 것</li><li>2. 내측 도형은 가로가 세로보다 긴 직사각형 일 것</li><li>3. 내측 도형이 명확하게 우측. 아래쪽에 있을 것 (우측-아래의 대각선이 가장 밟을</li><li>4. 혼란이나 외곡이 없을 것</li><li>5. 3개의 선이 만날 때 1.5mm 이상 떨어져 있지 않을 것</li></ul>`,
        },
        {
          index: '30번',
          image: c30,
          imageCorrect: uc30,
          imageWrong: uw30,
          text: `<ul><li>1. 삼각형의 모든 각은 마주보는 변(sides)을 지나 만들어진 것</li><li>2. 동일한 삼각형의 한 면은 위에(overlapping), 또 한 면은 아래에(underlapping) 겹쳐져 있을 것</li><li>3. 극단적인 왜곡이 없을 것</li></ul>`,
        },
      ];
  return (
    <div className="w-[800px]  max-h-[900px] bg-white rounded-lg p-4 overflow-x-scroll">
      <h4 className='p-4 pb-6 text-xl font-semibold'>채점 규칙</h4>
      <table className="w-full table-fixed text-sm text-left text-gray-500">
        <tbody className=''>
          {data.map((item) => (
            <tr className='bg-white border-b border-[#888] flex items-center' key={item.index}>
              <td className="text-center w-[50px] text-dark-green p-2 text-s">{item.index}</td>
              <td className='w-[90px] p-2'>
                <img src={item.image} alt={`example ${item.index}`} className="rounded-sm max-w-full" />
              </td>
              <td className='w-[480px] p-2 text-xs'><div dangerouslySetInnerHTML={{ __html: item.text }}></div></td>
              <td className='w-[90px] p-2 text-center flex flex-col items-center justify-center'>
                <span className='text-sm mb-1'>1점 예시</span>
                <img src={item.imageCorrect} alt={`example ${item.index}`} className="rounded-sm w-full" />
                </td>
              <td className='w-[90px] p-2 text-center flex flex-col items-center justify-center'>
              <span className='text-sm mb-1'>0점 예시</span>
                <img src={item.imageWrong} alt={`example ${item.index}`} className="rounded-sm w-full" />
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ScoringTable;