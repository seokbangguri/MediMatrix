import React from "react";
import { Text, Card, Heading } from "../../components";
import BeeryImage from "../../assets/Beery.png"
import HoduImage from "../../assets/hodu.png"
import SpermImage from "../../assets/sperm.png"

function Products() {

  return (
    <section className="px-5 my-10 flex flex-col justify-center lg:max-w-[1445px] lg:px-10 mx-auto relative">
      <Heading tag="h2" className=''>
        Products and Services
      </Heading>
      <Text size="m" styles="max-w-[480px] text-center m-auto">
        기존에 평가를 수기로 작업하고 총점을<br />산출하는 프로세스를 개선하는 AI 서비스입니다.
      </Text>
      <div className="flex items-center justify-center w-auto gap-14 mt-16 mb-10 flex-wrap">
        <Card
          source={BeeryImage}
          name="Beery VMI"
          route="/beery"
        >
          (이름)은 Beery VMI-6답안지를 AI모델이 자동으로 채점해 결과를 알려주는 솔루션입니다.
        </Card>
        <Card
          route='/sperm'
          source={SpermImage}
          name="Sperm"

        >
          Sperm은 AI모델이 정자의 움직임을 분석해 등급을 매겨 수치로 알려주는 솔루션입니다.
        </Card>
        <Card
          route='/beery'
          source={HoduImage}
          name="Hodu"

        >
          Hodu는 인지검사를 통한 재활훈련 모니터링 및 맞춤형 경도인지장애 재활 콘텐츠입니다.
        </Card>
        <Card
          route='/beery'
          source="https://placehold.co/600x580?text=Project+3"
          name="Project 3"

        >
          Early dementia prediction AI service that provides customized rehabilitation curation for dementia delay.
        </Card>
      </div>
      <div id="partners" className="absolute inset-x-0 bottom-28"></div>
    </section>
  );
}

export default Products;
