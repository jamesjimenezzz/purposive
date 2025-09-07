import React from 'react'
import data from "../data.json"
import { dataCamapings } from '../index'
import Data from './Data'
import Image from 'next/image'
import campaign from "../public/campaign.png"
import Footer from '@/components/Footer'

const Home = () => {
  return (
    <div className='max-w-[1400px] my-10  flex flex-col items-center mx-auto'>
        <h1 className='font-bold text-3xl'>Stand for Social Justice. Break the Cycle of Poverty</h1>
        <p className='text-sm text-center text-muted-foreground my-1.5 '>This site is part of our campaign to <span className='font-bold underline'>raise awareness</span> about poverty and social justice in the Philippines. <br/>Explore the links below to learn more and take action.</p>

    <div className='max-w-3xl mt-10'>
      <Image className='object-cover' src={campaign} alt='Photo of Campaign' width={500} height={500} />
    </div>

     <div className='flex flex-col gap-10 my-10 '>
       {data.map((data: dataCamapings, i ) =>  (
        <Data key={i} data={data} />
      ))}
     </div>

      <Footer />
    </div>
  )
}

export default Home
