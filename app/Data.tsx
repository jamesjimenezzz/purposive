import React from 'react'
import { dataCamapings } from '..'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'



const Data = ({data}: {data: dataCamapings}) => {
  return (
    <div className='flex flex-col'>
        <h1 className='font-bold text-xl'>{data.title}</h1>
        <div className='my-2'>
             <p>{data.content}</p>
        <p className='text-sm text-muted-foreground'>{data.note}</p>
        </div>
        <Link className='' href={`${data.link}`}>
            <Button variant={"outline"} className='mt-2.5 cursor-pointer h-8.5 text-sm'>
                <ArrowRight /> Learn More
            </Button>
        </Link>
    </div>
  )
}

export default Data
