import React from 'react';
import Wave from '../Components/Wave';
import Me from '../assets/me.png';
function Hero() {
  return (
    <>
      <Wave />
      <section className='absolute text-white flex z-10 xl:left-[20%] lg:top-[18%] items-center lg:px-10'>
        <div className='xl:w-4/12 lg:w-5/12 border-r-[2px] xl:mr-[4%]'>
          <img src={Me} alt='me' className='lg:w-[400px] lg:block hidden rounded-full' />
        </div>
        <div className='xl:w-6/12 lg:w-6/12 md:w-9/12 w-full xl:mx-0 md:mx-auto m-10 xl:font-semibold md:text-base text-sm'>
          <p>HI THERE! I AM...</p>
          <h1 className='text-5xl xl:text-7xl md:text-6xl font-bold my-3'>
            Shan Carl Parce Belgica
          </h1>
          <p className='md:py-5'>
            I'm a Web-Developer. Specializing in Web Design and Front-end
            Development. I help start-ups Design and Deploy their Busines
            Online.
          </p>
          <div className='text-center xl:pt-5 md:pt-0 pt-5'>
            <button className='p-2 px-3 rounded bg-transparent border-[1px] text-xs outline-none'>
              REACH OUT
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
