import React from 'react';
import { FaXing } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { sidebarAction } from '../Store';
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
        <div className=''>
          <ul className='absolute inset-0 bg-[#0005]'>
            <li>Test</li>
            <li>Test</li>
            <li>Test</li>
            <li>Test</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
