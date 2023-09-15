import React from 'react'
import {Text, Card, Heading} from "../../components";

function Products() {
  return (
    <div className=''>
        <Heading tag='h2' className='my-10'>Our Products and Services</Heading>
        <Text size="l" styles="max-w-[480px] text-center m-auto">
          Complete the form below to connect with our team of experts on
          implementing digital primary care solutions.
        </Text>
        <div className='flex w-[974px] m-auto my-10'>
          <Card
            source="https://www.viewhotels.jp/asakusa-annex/wp-content/uploads/sites/6/2020/03/test-img.jpg"
            name="Beery VMI"
            explain={["explain1 1-1", "explain2 1-2", "explain3 1-3", "test 1-4"]}
          >
            Complete the form below to connect with our team of experts on implementing.
          </Card>
          <Card
            source="https://www.viewhotels.jp/asakusa-annex/wp-content/uploads/sites/6/2020/03/test-img.jpg"
            name="Beery VMI"
            explain={["explain1 2-1", "explain2 2-2", "explain3 2-3", "test 2-4"]}
          >
            Complete the form below to connect with our team of experts on implementing.
          </Card>
          <Card
            source="https://www.viewhotels.jp/asakusa-annex/wp-content/uploads/sites/6/2020/03/test-img.jpg"
            name="Beery VMI"
            explain={["explain1 2-1", "explain2 2-2", "explain3 2-3", "test 2-4"]}
          >
            Complete the form below to connect with our team of experts on implementing.
          </Card>
        </div>
    </div>
  )
}

export default Products;