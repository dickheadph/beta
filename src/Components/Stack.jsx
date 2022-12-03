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
  SiNpm,
  SiGithub,
  SiVisualstudiocode,
} from 'react-icons/si';
import Socials from './Socials';
import Projects from '../Components/Projects';
function Stack() {
  return (
    <>
      <Socials />
      <section className='absolute top-[55%] w-full md:top-[56%] lg:top-[70%]'>
        <div>
          <ul className='flex flex-wrap items-center justify-center space-x-2 md:space-x-7 xl:space-x-10'>
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
          <h1 className='my-2 text-center text-xl font-semibold text-white md:text-zinc-800 xl:text-black'>
            Tech<em className='text-zinc-900'>Stack</em>
          </h1>
        </div>
        <div>
          <ul className='flex flex-wrap items-center justify-center space-x-2 md:space-x-7 xl:space-x-8'>
            <li className='font-bold text-zinc-900 xl:text-lg'>
              <CgArrowsExchange className='tool' /> A<em>X</em>IOS
            </li>
            <li>
              <SiGit className='tool' />
            </li>
            <li>
              <SiGithub className='tool' />
            </li>
            <li>
              <SiNpm className='tool' />
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
          <h1 className='my-2 text-center text-xl font-semibold text-zinc-900'>
            Tools
          </h1>
        </div>
        <h1 className='my-[4%] text-center text-xl font-semibold md:text-zinc-800'>
          PRO<em className='text-zinc-900'>JECTS</em>
        </h1>
        <div className='m-2 flex flex-wrap justify-center'>
          <Projects />
          <Projects />
          <Projects />
        </div>
      </section>
    </>
  );
}

export default Stack;
