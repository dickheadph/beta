import React from 'react';
import { FaBars } from 'react-icons/fa';
import Logo from '../assets/s.png';
function Navbar() {
  return (
    <div className='z-10'>
      <div className='flex items-center justify-between border-none bg-[#0a0a0a] px-[7%] py-[4%] text-lg text-white md:px-[12%] md:py-[3%] lg:px-[10%] lg:py-[10px]'>
        <div className=''>
          <img src={Logo} alt='' className='w-[70px] xl:w-[100px]' />
        </div>
        <div className='hidden lg:block'>
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
