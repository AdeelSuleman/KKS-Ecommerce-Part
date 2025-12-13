import React from 'react'
import EarthShape from '../assets/earthSahpe.png'
import { Link } from 'react-router-dom'

const Page404 = () => {
  return (
     <section className='h-screen flex flex-wrap flex-col justify-center items-center'>
    <div className='w-fit flex justify-center items-center select-none'>
        <div className='xs:-mr-5 '>
            <h1 className='xs:text-[10rem] font-jost font-bold'>4</h1>
        </div>
        <div className='xs:w-[130px]  rounded-full overflow-hidden' style={{
                boxShadow: '0px 20px 20px 1px rgba(0,0,0,0.4)',
            }} >
            <img src={EarthShape} alt='' className='w-full h-full scale-105' />
        </div>
        <div className='xs:-ml-5'>
            <h1 className='xs:text-[10rem] font-jost font-bold'>4</h1>
        </div>
    </div>
    <div className='space-y-4'>
        <h1 className='font-ubuntu font-bold text-2xl text-center'>Not Found</h1>
        <p className='font-outfit text-lg text-center'>We can't find the page you are looking for</p>
        <div className='flex justify-center'>
        <Link to='/'>
            <button className='bg-blue-500 mx-auto hover:bg-blue-600 transform transition-colors cursor-pointer text-white font-bold py-3 px-6 rounded-lg'>Go back Home</button>
        </Link>
        </div>
    </div>
    </section>
  )
}

export default Page404