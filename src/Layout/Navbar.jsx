import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import Logo from '../assets/s.png';
import Sidebar from './Sidebar';
function Navbar() {
  const [open, setOpen] = useState(false);
  const onSet = () => {
    console.log('clicked');
    if (open) {
      setOpen(false);
      document.body.style.overflow = 'unset';
    } else {
      setOpen(true);
      document.body.style.overflow = 'hidden';
    }
  };
  return (
    <div className='z-10'>
      <div className='flex items-center justify-between border-none bg-[#0a0a0a] px-[8%] py-[2%] text-lg text-white md:px-[12%] md:py-[3%] lg:px-[10%] lg:py-[10px]'>
        <div className=''>
          <img src={Logo} alt='' className='w-[60px] xl:w-[100px]' />
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
          <FaBars size='20px' onClick={onSet} />
          {open && (
            <div onClick={onSet}>
              <Sidebar />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
