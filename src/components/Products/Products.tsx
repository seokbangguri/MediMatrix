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
          source="https://www.viewhotels.jp/asakusa-annex/wp-content/uploads/sites/6/2020/03/test-img.jpg"
          name="Beery VMI"
          explain={["explain1 1-1", "explain2 1-2", "explain3 1-3", "test 1-4"]}
        >
          Complete the form below to connect with our team of experts on
          implementing.
        </Card>
        <Card
          source="https://www.viewhotels.jp/asakusa-annex/wp-content/uploads/sites/6/2020/03/test-img.jpg"
          name="Beery VMI"
          explain={["explain1 2-1", "explain2 2-2", "explain3 2-3", "test 2-4"]}
        >
          Complete the form below to connect with our team of experts on
          implementing.
        </Card>
        <Card
          source="https://www.viewhotels.jp/asakusa-annex/wp-content/uploads/sites/6/2020/03/test-img.jpg"
          name="Beery VMI"
          explain={["explain1 2-1", "explain2 2-2", "explain3 2-3", "test 2-4"]}
        >
          Complete the form below to connect with our team of experts on
          implementing.
        </Card>
      </div>
    </section>
  );
}

export default Products;
