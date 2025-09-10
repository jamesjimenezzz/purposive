"use client"
import React from 'react'
import { dataCamapings } from '..'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import {motion} from "framer-motion"


const Data = ({data}: {data: dataCamapings}) => {
  return (
    <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 1}} className='flex flex-col'>
        <h1 className='font-bold text-xl'>{data.title}</h1>
        <div className='my-2'>
             <p>{data.content}</p>
        <p className='text-sm text-muted-foreground'>{data.note}</p>
        </div>
        <Link className='' href={`${data.link}`}>
            <Button variant={"outline"} className='mt-2.5 cursor-pointer h-8.5 text-sm hover:scale-105'>
                <ArrowRight /> Learn More
            </Button>
        </Link>
    </motion.div>
  )
}

export default Data
