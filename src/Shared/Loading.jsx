import React from 'react';
import Spinner from '../assets/bars.gif';
function Loading() {
  return (
    <>
      <div className='absolute inset-0 z-50 flex flex-wrap items-center justify-center bg-[#5c5d65]'>
        <img src={Spinner} className='w-[100px] lg:w-auto' alt='' />
        <p className='z-50 text-white'>Please wait...</p>
      </div>
    </>
  );
}

export default Loading;
