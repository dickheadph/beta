import React from 'react';
import { FaLock } from 'react-icons/fa';
function Placard() {
  return (
    <>
      <div className='m-2 rounded border-[1px] border-zinc-700 p-5 lg:w-[400px] xl:w-[600px]'>
        <h1 className='font-bold'>
          <FaLock />
          Security
        </h1>
        <p>
          Implemets a code architecture that provides a strong and imbeded
          security that prevents leaks and data loss. Securing the websites
          confidential data and properties that serves as a building block of
          strong user trust.
        </p>
      </div>
    </>
  );
}

export default Placard;