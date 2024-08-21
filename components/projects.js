import React from 'react'
import { Portfolio } from '@/Information'
import { Rethink_Sans } from 'next/font/google'
const projects = () => {
  const port = Portfolio.map(item=>{return item})
  const i = port.length
  return (
    <>
    <div className='w-full h-16 text-4xl text-center mt-5'>PORTFOLIO</div>
    <div className='w-full min-h-[50vh] flex justify-start flex-col items-start gap-5 text-[22px]'>
      {port.map(item=>{
        return(
          <>
          <div className='w-4/5 m-auto'> {item}</div>
          </>
        )
      })}
    </div>
    </>
  )
}

export default projects
