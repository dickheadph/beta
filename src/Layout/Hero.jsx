import React from 'react';
import Wave from '../Components/Wave';
import Me from '../assets/me.png';
import Button from '../Shared/Button';
function Hero() {
  return (
    <>
      <Wave />
      <section className='absolute z-10 flex items-center text-white lg:top-[13%] lg:px-10 xl:top-[18%] xl:left-[20%]'>
        <div className='border-r-[2px] lg:mr-[4%] lg:w-5/12 xl:mr-[4%] xl:w-4/12'>
          <img
            src={Me}
            alt='me'
            className='hidden rounded-full lg:ml-20 lg:block lg:w-[250px] xl:ml-0 xl:w-[400px]'
          />
        </div>
        <div className='m-10 w-full text-sm md:mx-auto md:w-9/12 md:text-base lg:w-6/12 xl:mx-0 xl:w-6/12 xl:font-semibold'>
          <p className='font-semibold md:font-normal'>HI THERE! I AM...</p>
          <h1 className='my-6 text-5xl font-bold md:text-6xl lg:text-5xl xl:text-7xl'>
            Shan Carl Parce Belgica
          </h1>
          <p className='md:py-5 lg:py-3'>
            I'm a Web-Developer. Specializing in Web Design and Front-end
            Development. I help start-ups Design and Deploy their Busines
            Online.
          </p>
          <div className='py-5 text-center md:pt-0 xl:pt-5'>
            <Button name='REACH OUT' />
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
