import React, { useState } from 'react';
//import Button from '../Shared/SecButton';
import Wave from '../assets/wave.png';
import { FaPhone, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import '../index.css';
import axios from 'axios';
import { toast } from 'react-toastify';

const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT;

function Contact() {
  const [form, setForm] = useState({
    name: '',
    to: '',
    subject: '',
    message: '',
  });

  const { name, to, subject, message } = form;

  const sendMail = (e) => {
    setForm((prevSate) => ({
      ...prevSate,
      [e.target.id]: e.target.value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios.post(`${API_ENDPOINT}/send-mail/mailer`, {
      name: form.name,
      to: form.to,
      subject: form.subject,
      message: form.message,
    });
    toast.success(`${form.subject} sent. Please check your spam/mail inbox.`);
  };
  return (
    <>
      <h1
        className='my-[3%] text-center text-3xl font-bold md:text-zinc-800 xl:text-4xl'
        id='contact'>
        CONTACT
      </h1>
      <div className='absolute z-20 flex w-full flex-wrap justify-center object-cover'>
        <div className='mx-10 w-full lg:w-5/12 xl:mx-0 xl:w-6/12 xl:px-20'>
          <h1 className='text-xl font-semibold lg:text-2xl'>
            LETS <em className='text-[#f7c848]'>WORK TOGETHER</em>
          </h1>
          <h2 className='mb-2 font-semibold lg:text-xl'>SEND ME AN E-MAIL</h2>
          <form action='' onSubmit={submitHandler}>
            <label htmlFor='name'>Name</label>
            <br />
            <input
              id='name'
              type='text'
              className='input'
              required
              onChange={sendMail}
              value={name}
            />
            <br />
            <label htmlFor=''>E-mail</label>
            <br />
            <input
              id='to'
              type='email'
              className='input'
              required
              onChange={sendMail}
              value={to}
            />
            <br />
            <label htmlFor=''>Subject</label>
            <br />
            <input
              id='subject'
              type='text'
              className='input'
              required
              onChange={sendMail}
              value={subject}
            />
            <br />
            <label htmlFor=''>Message</label>
            <br />
            <textarea
              type='text'
              className='textArea text-black'
              id='message'
              required
              cols='30'
              value={message}
              onChange={sendMail}
              rows='5'></textarea>
            <div className='my-4 text-center'>
              <button
                type='submit'
                className='submit'>
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className='space-y-4 pt-10 text-white lg:w-6/12 lg:pl-[15%] lg:text-zinc-800 xl:w-6/12'>
          <h1 className='text-2xl font-semibold'>
            LET'S <em className='text-[#f0b547]'>TALK</em>
          </h1>
          <h2 className='mb-2 text-lg font-semibold'>MY SOCIALS</h2>
          <div className='space-y-3 text-sm text-[#87888b] md:text-base'>
            <p className=''>
              <FaPhone className='text-[#f0b547]' />
              (+63) 915-203-0863
            </p>
            <p className=''>
              <FaMapMarkerAlt className='text-[#f0b547]' />
              1870 Antipolo City, Rizal, Ph
            </p>
            <p className=''>
              <FaEnvelope className='text-[#f0b547]' />{' '}
              shancarl.belgica.3@gmail.com
            </p>
          </div>
          <p className='text-xs text-white lg:text-base'>
            &copy; SHAN  -  ALL RIGHTS RESERVED - 2022
          </p>
        </div>
      </div>
      <img
        src={Wave}
        alt=''
        className='h-[1000px] w-full rotate-180 overflow-auto lg:h-[600px]'
      />
    </>
  );
}

export default Contact;
