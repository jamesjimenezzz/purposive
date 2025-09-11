"use client"
import React from 'react'
import data from "../data.json"
import { dataCamapings } from '../index'
import Data from './Data'
import Image from 'next/image'
import campaign from "../public/campaign4.png"
import Footer from '@/components/Footer'
import Link from 'next/link'
import {motion} from "framer-motion"
import { SquareArrowOutUpRight } from 'lucide-react';

const Home = () => {
  return (
    <div className='max-w-[1400px] my-10  flex flex-col items-center mx-auto'>
      <motion.div  initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 1}} >
          <h1 className='font-bold text-3xl text-center text-blue-900'>Stand for Social Justice. Break the Cycle of Poverty</h1>
        <p className='text-sm text-center text-muted-foreground my-1.5 '>This site is part of our campaign to <span className='font-bold underline text-blue-900'>raise awareness</span> about poverty and social justice in the Philippines. <br/>Explore the links below to learn more and take action.</p>
      </motion.div>

    <motion.div  initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 1, delay: 0.5}}  className='max-w-3xl mt-10'>
      <Image className='object-cover' src={campaign} alt='Photo of Campaign' width={500} height={500} />
    </motion.div>

    <div className='py-1'>
      <Link className='hover:underline' href={"https://eco-business.shorthandstories.com/child-scavengers-casualties-of-the-philippines-war-against-waste/"}>
      <h1 className='text-sm flex items-center gap-2.5 text-muted-foreground  cursor-pointer'>Learn more about Rachelle Anne <SquareArrowOutUpRight size={15}/></h1>
      </Link>
    </div>

     <div className='flex flex-col gap-3 my-10 '>
      <h1 className='font-bold text-blue-900 text-3xl underline '>// Join the Movement for Social Justice</h1>
       {data.map((data: dataCamapings, i ) =>  (
        <Data key={i} data={data} />
      ))}
     </div>

      <Footer />
    </div>
  )
}

export default Home
