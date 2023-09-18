import React from 'react'
import goqimage from "../../assets/GoQba_logo.svg";
import chaimage from "../../assets/CHA_logo.png";
import {Text, Heading} from "../../components";

function Partners() {
  return (
    <div className='mt-32'>
        <div className='w-[90vw] h-96 bg-white-green p-10 pb-20 rounded-[100px] m-auto'>
            <Heading tag='h2'>Our Partners</Heading>
            <Text size='l' styles='text-center my-3'>
                Biggest companies in Korea trust us and you can trust us as well.
            </Text>
            <div className='flex mx-auto mt-20'>
                <img src={goqimage} alt="goq" className='w-[25vw] m-auto'/>
                <img src={chaimage} alt="cha" className='w-[30vw] m-auto'/>
            </div>
        </div>
    </div>
  )
}

export default Partners;