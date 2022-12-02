import React from 'react';
import { FaBars } from 'react-icons/fa';
function Navbar() {
  return (
    <div className='z-10'>
      <div className='flex items-center justify-between text-white lg:px-[10%] lg:py-[35px] p-[5%] bg-stone-900 text-lg border-none'>
        <div className=''>
          <h1>Logo</h1>
        </div>
        <div className='lg:block hidden'>
          <ul className='flex justify-evenly'>
            <li className='mx-4'>Profile</li>
            <li className='mx-4'>Projects</li>
            <li className='mx-4'>Services</li>
            <li className='mx-4'>Contact</li>
            <li className='mx-4'>Resume</li>
          </ul>
        </div>
        <div className='lg:hidden'>
          <FaBars size='25px' />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
