import React from 'react';
import { SiIndeed, SiLinkedin, SiGithub } from 'react-icons/si';
import { FaEnvelope, FaMobile } from 'react-icons/fa';
function Socials() {
  return (
    <>
      <div className='absolute left-12 z-10 hidden lg:bottom-[20%] lg:block lg:text-sm xl:bottom-[10%] xl:text-base'>
        <ul className='flex text-zinc-700 lg:block lg:space-y-3'>
          <a href='https://github.com/shanegel'>
            <li className='flex items-center'>
              <SiGithub className='animate-bounce' />
              &nbsp;https://github.com/shanegel
            </li>
          </a>
          <li className='flex items-center'>
            <FaEnvelope className={''} />
            &nbsp;shancarl.belgica.3@gmail.com
          </li>
          <li className='flex items-center'>
            <FaMobile className={''} />
            &nbsp;+63 915-203-0863
          </li>
          <li>
            <SiLinkedin className={''} />
          </li>
          <li>
            <SiIndeed className={''} />
          </li>
        </ul>
      </div>
    </>
  );
}

export default Socials;
