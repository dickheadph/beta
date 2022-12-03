import React from 'react';
import { FaXing } from 'react-icons/fa';

function Sidebar() {
  return (
    <>
      <div className='absolute inset-0 z-10 bg-[#0003]'>
        <FaXing />
        <h1>Sample</h1>
        <div>
          <ul>
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
