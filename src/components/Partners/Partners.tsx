import React from 'react'
import {Text, Card, Heading} from "../../components";

function Partners() {
  return (
    <div>
        <div className='w-[1307px] h-96 bg-white-green p-10 rounded-[100px]'>
            <Heading tag='h2'>Our Partners</Heading>
            <Text size='l' styles='text-center my-5'>
                Biggest companies in Korea trust us and you can trust us as well.
            </Text>
            <div className='flex m-auto'>
                <img src="" alt="goq" />
                <img src="" alt="cha" />
            </div>
        </div>
    </div>
  )
}

export default Partners;