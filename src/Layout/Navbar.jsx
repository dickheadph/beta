import React, { useState } from 'react';
import { FaBars, FaDownload } from 'react-icons/fa';
import Logo from '../assets/s.png';
import Sidebar from './Sidebar';
function Navbar() {
  const [open, setOpen] = useState(false);
  const onSet = () => {
    if (open) {
      setOpen(false);
      document.body.style.overflow = 'unset';
    } else {
      setOpen(true);
      document.body.style.overflow = 'hidden';
    }
  };
  return (
    <div className='z-50'>
      <div className='flex items-center justify-between border-none bg-transparent px-10 py-6 text-white'>
        <div className=''>
          <img src={Logo} alt='' className='relative w-[60px] xl:w-[100px]' />
        </div>
        <div className='hidden lg:block'>
          <ul className='flex justify-evenly'>
            <li className='mx-4'>Profile</li>
            <li className='mx-4'>Projects</li>
            <li className='mx-4'>Services</li>
            <li className='mx-4'>Contact</li>
            <a href='https://drive.google.com/file/d/1EGotGR8NI5k38B6btd0cKUl0Fr2-4uKT/view?usp=sharing'>
              <li className='mx-4 flex items-center'>
                CV
                <FaDownload size={'12px'} />
                &nbsp;
              </li>
            </a>
          </ul>
        </div>
        <div className='lg:hidden'>
          <FaBars size='20px' className='' onClick={onSet} />
          {open && (
            <div className='' onClick={onSet}>
              <Sidebar />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
