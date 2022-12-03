import React from 'react';
import '../index.css';
import { CgArrowsExchange } from 'react-icons/cg';
import Button from '../Shared/SecButton';
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
import Placard from './Placard';
import Contact from './Contact';
function Stack() {
  return (
    <>
      <Socials />
      <section className='absolute top-[45%] w-full md:top-[40%] lg:top-[63%] xl:top-[65%] '>
        <div className='pb-6 text-center md:pt-0 xl:pt-5'>
          <Button name='REACH OUT' />
        </div>
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
          <h1 className='font-semiboldtext-zinc-800 my-2 text-center text-xl xl:text-black'>
            Tech<em className='text-zinc-900'>Stack</em>
          </h1>
        </div>
        <div>
          <ul className='flex flex-wrap items-center justify-center space-x-2 md:space-x-7 xl:space-x-8'>
            <li className='text-xs font-bold text-zinc-900 lg:text-lg'>
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
        <h1 className='my-[4%] text-center text-3xl font-bold md:text-zinc-800 xl:text-4xl'>
          PROJECTS
        </h1>
        <div className='m-2 flex flex-wrap justify-center'>
          <Projects />
          <Projects />
          <Projects />
          <Projects />
          <Projects />
          <Projects />
        </div>
        <h1 className='my-[3%] text-center text-3xl font-bold md:text-zinc-800 xl:text-4xl'>
          SERVICES
        </h1>
        <div className='mx-10 flex flex-wrap justify-center md:mx-[10%] xl:mx-10'>
          <Placard />
          <Placard />
          <Placard />
          <Placard />
        </div>
        <Contact />
      </section>
    </>
  );
}

export default Stack;
