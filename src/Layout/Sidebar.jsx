import React from 'react';
import { FaXing } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { sidebarAction } from '../Store';
import '../index.css';
function Sidebar() {
  const dispatch = useDispatch();
  useSelector((state) => state.showSidebar);
  const sidebarHandler = () => {
    dispatch(sidebarAction.showSidebar());
    document.body.style.overflow = 'unset';
  };
  return (
    <>
      <div className='absolute inset-0 z-50'>
        <FaXing
          size='20px'
          onClick={sidebarHandler}
          className='absolute right-0 z-50 m-9'
        />
        <div className='absolute inset-0 bg-[#0005] text-center font-semibold'>
          <ul className='absolute top-[25%] mx-auto w-full px-5'>
            <li className='link'>
              <a href='#profile' onClick={sidebarHandler}>
                Profile
              </a>
            </li>
            <li className='link'>
              <a href='#projects' onClick={sidebarHandler}>
                Projects
              </a>
            </li>
            <li className='link'>
              <a href='#services' onClick={sidebarHandler}>
                Services
              </a>
            </li>
            <li className='link'>
              <a href='#contact' onClick={sidebarHandler}>
                Contact
              </a>
            </li>
            <li className='link'>
              <a
                href='https://drive.google.com/file/d/1EGotGR8NI5k38B6btd0cKUl0Fr2-4uKT/view?usp=sharing'
                onClick={sidebarHandler}>
                CV
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
