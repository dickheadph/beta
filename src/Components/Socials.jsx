import React from 'react';
import { SiIndeed, SiLinkedin, SiGithub, SiFitbit } from 'react-icons/si';
import { FaEnvelope, FaMobile } from 'react-icons/fa';
function Socials() {
  return (
    <>
      <div className='absolute left-12 z-30 hidden lg:bottom-[8%] lg:block lg:text-sm xl:bottom-[10%] xl:text-base'>
        <ul className='flex text-zinc-700 lg:block lg:space-y-3'>
          <li className='flex items-center'>
            <FaMobile className={''} />
            &nbsp;(+63) 915-203-0863
          </li>
          <li className='flex items-center my-3'>
            <FaEnvelope className={''} />
            &nbsp;shancarl.belgica.3@gmail.com
          </li>
          <a href='https://github.com/dickheadph'>
            <li className='flex items-center my-3'>
              <SiGithub className='' />
              &nbsp;https://github.com/dickheadph
            </li>
          </a>
          <a href='https://www.linkedin.com/in/shabelgica-ex0718'>
            <li className='flex items-center my-3'>
              <SiLinkedin className={''} />
              &nbsp;www.linkedin.com/in/shabelgica
            </li>
          </a>
          <a href='https://ph.jobstreet.com/profile/shancarl-belgica-MXt2fqB71R'>
            <li className='flex items-center my-3'>
              <SiFitbit className='' />
              &nbsp;https://jobstreet.com/shancarl-belgica
            </li>
          </a>
        </ul>
      </div>
    </>
  );
}

export default Socials;
