import React from 'react';
import { FaBars, FaDownload } from 'react-icons/fa';
import Logo from '../assets/s.png';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { sidebarAction } from '../Store';
function Navbar() {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.showSidebar);

  const sidebarHandler = () => {
    dispatch(sidebarAction.showSidebar());
    document.body.style.overflow = 'hidden';
  };
  return (
    <div className='z-50' id='profile'>
      <div className='flex items-center justify-between border-none bg-transparent px-10 py-6 text-white'>
        <div className=''>
          <Link to={'/auth'}>
            <img src={Logo} alt='' className='relative w-[60px] xl:w-[100px]' />
          </Link>
        </div>
        <div className='hidden lg:block'>
          <ul className='flex justify-evenly'>
            <li className='mx-4'>Profile</li>
            <a href='#projects'></a>
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
          {!open && (
            <FaBars size='20px' className='relative' onClick={sidebarHandler} />
          )}
          {open && (
            <Sidebar />
            // <div className='' onClick={onSet}>
            // </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
