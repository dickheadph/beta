import React from 'react';
import Wave from '../Components/Wave';
import Me from '../assets/me.png';
function Hero() {
  return (
    <>
      <Wave />
      <section className='absolute text-white flex z-10 xl:left-[20%] xl:top-[18%] items-center'>
        <div className='lg:w-6/12 border-r-[2px] lg:mr-6'>
          <img
            src={Me}
            alt='me'
            className='w-[380px] lg:block hidden rounded-full'
          />
        </div>
        <div className='lg:w-6/12 w-full xl:mx-0 mx-10'>
          <p>Hi there, I am...</p>
          <h1 className='text-5xl xl:text-7xl font-semibold my-3'>
            Shan Carl Parce Belgica
          </h1>
          <p>
            I am a Web-Developer. Specializing in Web Design and Front-end
            Development.
          </p>
          <p>I help start-ups Design and Deploy their Busines Online.</p>
        </div>
      </section>
    </>
  );
}

export default Hero;
