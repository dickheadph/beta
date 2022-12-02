import React from 'react';
import '../index.css';
import { CgArrowsExchange } from 'react-icons/cg';
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
      <section className='absolute xl:top-[70%] xl:left-[30%] top-[52%] mx-10'>
        <div>
          <ul className='flex flex-wrap xl:space-x-10 space-x-2 items-center justify-center'>
            <li>
              <SiFirebase className='stack' />
            </li>
            <li>
              <SiReact className='stack' />
            </li>
            <li>
              <SiTailwindcss className='stack' />
            </li>
            <li>
              <SiHtml5 className='stack' />
            </li>
            <li>
              <SiCss3 className='stack' />
            </li>
            <li>
              <SiBootstrap className='stack' />
            </li>
            <li>
              <SiJavascript className='stack' />
            </li>
          </ul>
          <h1 className='text-center text-white xl:text-black text-xl my-2 font-semibold'>
            Tech<em className='text-zinc-900'>Stack</em>
          </h1>
        </div>
        <div>
          <ul className='flex flex-wrap space-x-2 xl:space-x-8 items-center justify-center'>
            <li className='xl:text-lg font-bold text-zinc-900'>
              <CgArrowsExchange className='tool' /> A<em>X</em>IOS
            </li>
            <li>
              <SiGit className='tool' />
            </li>
            <li>
              <SiGithub className='tool' />
            </li>
            <li>
              <SiFramer className='tool' />
            </li>
            <li>
              <SiFigma className='tool' />
            </li>
            <li>
              <SiVisualstudiocode className='tool' />
            </li>
          </ul>
          <h1 className='text-center text-zinc-900 text-xl my-2 font-semibold'>
            Tools
          </h1>
        </div>
      </section>
    </>
  );
}

export default Stack;
