import React from 'react';
import Wave from '../Components/Wave';
import Me from '../assets/me.png';
import Navbar from './Navbar';
function Hero() {
  return (
    <>
      <Wave />
      <Navbar />
      <section className='absolute z-10 flex items-center text-white lg:top-[13%] lg:left-[10%] xl:top-[16%] xl:left-[10%]'>
        <div className='border-r-[2px] lg:mx-[0%] lg:w-5/12 xl:mr-[4%] xl:w-4/12'>
          <img
            src={Me}
            alt='me'
            className='hidden rounded-full lg:ml-40 lg:block lg:w-[250px] xl:ml-5 xl:w-[360px]'
          />
        </div>
        <div className='mx-[8%] lg:mx-30 w-full text-sm md:mx-auto md:w-9/12 md:text-base lg:w-6/12 xl:mx-0 xl:w-6/12 xl:font-semibold'>
          <p className='font-semibold md:font-normal'>HI THERE! I AM...</p>
          <h1 className='my-6 text-5xl font-extrabold md:text-6xl lg:text-5xl xl:text-7xl'>
            Shan Carl <em className='text-[#f0b547]'>Parce</em> Belgica<em className='text-[#f0b547]'>.</em>
          </h1>
          <p className='text-stone-300 lg:text-sm xl:text-base'>A highly motivated SaaS support, web designer and tech savvy individual with a strong track 
record in resolving technical issues and supporting clients ina dynamic IT and remote 
environment. Experienced in using SNOW and JIRA for incident/case management and ticket 
tracking. Knowledgeable in SQL for data analysis and trobleshooting backend related issues.
Confident in giving clear, concise and efficient resolution to deliver high quality support for both local and foreign clients and
leverage my skills in IT Industry and related technologies to enhance business operation.</p>
        </div>
      </section>
    </>
  );
}

export default Hero;
