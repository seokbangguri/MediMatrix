import React from "react";
import { Text, Card, Heading } from "../../components";

function Products() {
  return (
    <section className="px-5 lg:px-10 py-10 flex flex-col items-center">
      <Heading tag="h2" className="">
        Our Products and Services
      </Heading>
      <Text size="m" styles="max-w-[480px] text-center m-auto">
        Complete the form below to connect with our team of experts on
        implementing digital primary care solutions.
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
          name="Hodu"
          explain={["explain1 2-1", "explain2 2-2", "explain3 2-3", "test 2-4"]}

        >
          Monitoring rehabilitation training through cognitive tests Customized mild cognitive impairment rehabilitation content.
        </Card>
        <Card
          route='/beery'
          source="https://healthjade.net/wp-content/uploads/2019/12/sperm-motility.jpg"
          name="BrainQ"
          explain={["explain1 2-1", "explain2 2-2", "explain3 2-3", "test 2-4"]}
          
        >
          Early dementia prediction AI service that provides customized rehabilitation curation for dementia delay.
        </Card>
        <Card
          route='/beery'
          source="https://static.wixstatic.com/media/5376b3_7f00b5099c5b49b69a853c558bd462f0~mv2.png/v1/fill/w_560,h_308,al_c,lg_1,q_85,enc_auto/%EC%95%84%ED%8A%B8%EB%B3%B4%EB%93%9C%20%E2%80%93%206.png"
          name="SeeZ"
          explain={["explain1 2-1", "explain2 2-2", "explain3 2-3", "test 2-4"]}
          
        >
          A stroke aftereffects rehabilitation (DTx) program through interaction with XR-based 3D objects.        </Card>
      </div>
    </section>
  );
}

export default Products;
