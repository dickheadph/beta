import React from 'react';
import { ImSpinner9 } from "react-icons/im";
function LoadingProjects() {
  return (
    <>
      <div className='pl-4'>
        <ImSpinner9 className='animate-spin text-[#f0b547]'/>
      </div>
    </>
  );
}

export default LoadingProjects;
