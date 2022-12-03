import React from 'react';
import Button from '../Shared/PrimButton';
import Wave from '../assets/wave.png';
import { FaFolder, FaPhone, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import '../index.css';
function Contact() {
  return (
    <>
      <h1 className='my-[3%] text-center text-xl font-semibold md:text-zinc-800 xl:text-4xl'>
        CONTACT
      </h1>
      <div className='absolute z-20 flex w-full flex-wrap justify-center object-cover'>
        <div className='mx-10 w-full xl:mx-0 xl:w-6/12 xl:px-20'>
          <h1 className='text-2xl font-semibold'>
            LETS <em>WORK TOGETHER</em>
          </h1>
          <h2 className='mb-2 text-lg font-semibold'>SEND ME AN E-MAIL</h2>
          <form action=''>
            <label htmlFor=''>Name</label>
            <br />
            <input type='text' className='input' />
            <br />
            <label htmlFor=''>E-mail</label>
            <br />
            <input type='email' className='input' />
            <br />
            <label htmlFor=''>Subject</label>
            <br />
            <input type='text' className='input' />
            <br />
            <label htmlFor=''>Message</label>
            <br />
            <textarea
              name=''
              type='text'
              className='textArea'
              id=''
              cols='30'
              rows='5'></textarea>
            <div className=''>
              <Button type='submit' name='Send' />
            </div>
          </form>
        </div>
        <div className='space-y-4 text-center text-white xl:w-6/12 xl:text-zinc-800'>
          <h1 className='text-2xl font-semibold'>
            LET'S <em>TALK</em>
          </h1>
          <h2 className='mb-2 text-lg font-semibold'>MY SOCIALS</h2>
          <div className='text-sm md:text-base  lg:ml-[10%]'>
            <p className='flex items-center'>
              <FaPhone />
              &nbsp; +63 915-203-0863
            </p>
            <p className='flex items-center'>
              <FaMapMarkerAlt />
              &nbsp; Nabua, Camarines Sur
            </p>
            <p className='flex items-center'>
              <FaEnvelope /> &nbsp; shancarl.belgica.3@gmail.com
            </p>
          </div>
          <p className='text-xs text-white lg:text-base'>
            &copy; ALL RIGHTS RESERVED - 2022
          </p>
        </div>
      </div>
      <img
        src={Wave}
        alt=''
        className='h-[750px] w-full rotate-180 overflow-auto'
      />
    </>
  );
}

export default Contact;
