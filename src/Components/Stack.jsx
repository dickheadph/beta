import React from 'react';
import '../index.css';
import {
  SiFirebase,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiReact,
  SiBootstrap,
  SiJavascript,
  SiFramer,
  SiFigma,
  SiGit,
  SiGithub,
  SiVisualstudiocode,
} from 'react-icons/si';
function Stack() {
  return (
    <>
      <section className='absolute xl:top-[70%] xl:left-[30%] top-[50%] mx-10'>
        <div>
          <ul className='flex flex-wrap space-x-2'>
            <li>
              <SiFirebase className='icon' />
            </li>
            <li>
              <SiTailwindcss className='icon' />
            </li>
            <li>
              <SiReact className='icon' />
            </li>
            <li>
              <SiHtml5 className='icon' />
            </li>
            <li>
              <SiCss3 className='icon' />
            </li>
            <li>
              <SiBootstrap className='icon' />
            </li>
            <li>
              <SiJavascript className='icon' />
            </li>
          </ul>
          <h1 className='text-center'>Stack</h1>
        </div>
        <div>
          <ul className='flex flex-wrap space-x-2 items-center'>
            <li className='text-lg font-bold text-white xl:text-black'>
              A<em>X</em>IOS
            </li>
            <li>
              <SiGit className='icon' />
            </li>
            <li>
              <SiGithub className='icon' />
            </li>
            <li>
              <SiFramer className='icon' />
            </li>
            <li>
              <SiFigma className='icon' />
            </li>
            <li>
              <SiVisualstudiocode className='icon' />
            </li>
          </ul>
          <h1 className='text-center'>Tools</h1>
        </div>
      </section>
    </>
  );
}

export default Stack;
