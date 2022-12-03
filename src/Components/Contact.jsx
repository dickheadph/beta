import React from 'react';
import Button from '../Shared/PrimButton';
import Wave from '../assets/wave.png';
import '../index.css';
function Contact() {
  return (
    <>
      <h1 className='my-[3%] text-center text-xl font-semibold md:text-zinc-800 xl:text-4xl'>
        CONTACT
      </h1>
      <div className='absolute z-20 flex w-full flex-wrap justify-center object-cover'>
        <div className='mx-10 w-full xl:mx-0 xl:w-6/12 xl:px-20'>
          <h1>LETS WORK TOGETHER</h1>
          <h2>SEND ME AN E-MAIL</h2>
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
        <div className='text-center xl:w-6/12'>
          <h1>Lorem Ipsum</h1>
          <h1>Lorem Ipsum</h1>
          <h1>Lorem Ipsum</h1>
        </div>
      </div>
      <img
        src={Wave}
        alt=''
        className='h-[600px] w-full rotate-180 overflow-auto'
      />
    </>
  );
}

export default Contact;
