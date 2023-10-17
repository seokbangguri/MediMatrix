import React from "react";
import { Text, Card, Heading } from "../../components";

function Products() {

  return (
    <section className="px-5 my-10 flex flex-col justify-center lg:max-w-[1445px] lg:px-10 mx-auto relative">
      <Heading tag="h2" className=''>
        Products and Services
      </Heading>
      <Text size="m" styles="max-w-[480px] text-center m-auto">
        기존에 평가를 수기로 작업하고 총점을<br />산출하는 프로세스를 개선하는 AI 서비스입니다.
      </Text>
      <div className="flex items-center justify-center w-auto gap-6 mt-16 mb-10 flex-wrap">
        <Card
          source="http://www.portailenfance.ca/wp/wp-content/uploads/2015/08/Beery-VMI-6.png"
          name="Beery VMI"
          explain={["Early Intervention", "Visiul-Motor Skills", "Diagnostic Tool", "School Readiness"]}
          route="/beery"
        >
          Beery VMI evaluates visual-motor integration skills, assessing how well a person can coordinate their visual perception with fine motor abilities.
        </Card>
        <Card
          route='/beery'
          source="https://www.timesofautism.com/wp-content/uploads/2017/10/Autism-Spectrum-Disorder-Test.png"
          name="Project 1"
          explain={["explain 1-1", "explain 1-2", "explain 1-3", "explain 1-4"]}

        >
          Monitoring rehabilitation training through cognitive tests Customized mild cognitive impairment rehabilitation content.
        </Card>
        <Card
          route='/beery'
          source="https://healthjade.net/wp-content/uploads/2019/12/sperm-motility.jpg"
          name="Project 2"
          explain={["explain 2-1", "explain 2-2", "explain 2-3", "explain 2-4"]}

        >
          Early dementia prediction AI service that provides customized rehabilitation curation for dementia delay.
        </Card>
        <Card
          route='/beery'
          source="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxjHRfHwDNzqxzweA6eimkRA0S_wRJ0okTuNxwP50vng&s"
          name="Project 3"
          explain={["explain 3-1", "explain 3-2", "explain 3-3", "explain 3-4"]}

        >
          A stroke aftereffects rehabilitation (DTx) program through interaction with XR-based 3D objects.
        </Card>
      </div>
      <div id="partners" className="absolute inset-x-0 bottom-28"></div>
    </section>
  );
}

export default Products;
