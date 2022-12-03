import React from 'react';
import { SiIndeed, SiLinkedin, SiGithub } from 'react-icons/si';
import { FaEnvelope, FaMobile } from 'react-icons/fa';
function Socials() {
  return (
    <>
      <div className='absolute bottom-[8%] left-16 hidden lg:block'>
        <ul className='flex lg:block xl:space-y-3'>
          <li>
            <SiGithub className='animate-bounce' size={'25px'} />
          </li>
          <li>
            <FaEnvelope size={'20px'} />
          </li>
          <li>
            <FaMobile size={'20px'} />
          </li>
          <li>
            <SiLinkedin size={'20px'} />
          </li>
          <li>
            <SiIndeed size={'20px'} />
          </li>
        </ul>
      </div>
    </>
  );
}

export default Socials;
