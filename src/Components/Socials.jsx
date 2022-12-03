import React from 'react';
import { SiIndeed, SiLinkedin, SiGithub } from 'react-icons/si';
import { FaEnvelope, FaMobile } from 'react-icons/fa';
function Socials() {
  return (
    <>
      <div className='absolute bottom-[8%] left-16 hidden lg:block'>
        <ul className='flex lg:block lg:space-y-3'>
          <li>
            <SiGithub className=' animate-bounce' />
          </li>
          <li>
            <FaEnvelope className={''} />
          </li>
          <li>
            <FaMobile className={''} />
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
