import React from 'react';
import Spinner from '../assets/bars.gif';
function Loading() {
  return (
    <>
      <div className='absolute inset-0 z-50 flex items-center justify-center bg-[#5c5d65]'>
        <img src={Spinner} className='' alt='' /> <br />
        <p className='z-50 text-white'>Please wait...</p>
      </div>
    </>
  );
}

export default Loading;
