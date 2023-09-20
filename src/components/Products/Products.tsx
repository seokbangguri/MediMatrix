import React from "react";
import { Text, Card, Heading } from "../../components";

function Products() {
  return (
    <section className="px-5 lg:px-10 my-10 flex flex-col items-center">
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
          explain={["explain1 1-1", "explain2 1-2", "explain3 1-3", "test 1-4"]}
          route="/beery"
        >
          Complete the form below to connect with our team of experts on
          implementing.
        </Card>
        <Card
          route='/beery'
          source="https://www.timesofautism.com/wp-content/uploads/2017/10/Autism-Spectrum-Disorder-Test.png"
          name="FuDu"
          explain={["explain1 2-1", "explain2 2-2", "explain3 2-3", "test 2-4"]}

        >
          Monitoring rehabilitation training through cognitive tests Customized mild cognitive impairment rehabilitation content.
        </Card>
        <Card
          route='/beery'
          source="https://healthjade.net/wp-content/uploads/2019/12/sperm-motility.jpg"
          name="Hongsj"
          explain={["explain1 2-1", "explain2 2-2", "explain3 2-3", "test 2-4"]}

        >
          Early dementia prediction AI service that provides customized rehabilitation curation for dementia delay.
        </Card>
        <Card
          route='/beery'
          source="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxjHRfHwDNzqxzweA6eimkRA0S_wRJ0okTuNxwP50vng&s"
          name="Usmon"
          explain={["explain1 2-1", "explain2 2-2", "explain3 2-3", "test 2-4"]}

        >
          A stroke aftereffects rehabilitation (DTx) program through interaction with XR-based 3D objects.        </Card>
      </div>
    </section>
  );
}

export default Products;
