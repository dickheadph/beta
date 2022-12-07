import React, { useState, useEffect } from 'react';
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
import axios from 'axios';
import serviceFor from '../Components/ServicesLits';
function Stack() {
  const [projects, setProjects] = useState([]);
  const getProjects = () => {
    axios
      .get('https://groovy-groove-268003.firebaseio.com/projects.json')
      .then((res) => {
        //setProjects(res.data);
        const val = res.data;
        //console.log(val);
        let projects = [];

        for (const key in val) {
          projects.push({
            id: key,
            name: val[key].name,
            img: val[key].img,
            live: val[key].live,
            repo: val[key].repo,
            desc: val[key].desc,
          });
        }
        //console.log(projects);
        setProjects(projects);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getProjects();
  }, []);

  const {
    secIcon,
    security,
    securityDtls,
    mainIcon,
    maintainability,
    maintainabilityDtls,
    qualityIcon,
    quality,
    qualityDtls,
    desIcon,
    design,
    designDtls,
  } = serviceFor;
  return (
    <>
      <Socials />
      <section className='absolute top-[55%] w-full md:top-[40%] lg:top-[63%] xl:top-[62%] '>
        <div className='pb-6 text-center md:pt-0 xl:pt-5'>
          <a href='https://drive.google.com/file/d/1EGotGR8NI5k38B6btd0cKUl0Fr2-4uKT/view?usp=sharing'>
            <Button name='DOWNLOAD CV' />
          </a>
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
            Tech<em className='text-[#f0b547]'>Stack</em>
          </h1>
        </div>
        <div>
          <ul className='flex flex-wrap items-center justify-center space-x-2 md:space-x-7 xl:space-x-8'>
            <li className='text-xs font-bold text-[#4d4d50] lg:text-lg'>
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
          {projects.map((project) => (
            <Projects
              key={project.id}
              id={project.id}
              img={project.img}
              name={project.name}
              desc={project.desc}
              live={project.live}
              repo={project.repo}
            />
          ))}
        </div>
        <h1 className='my-[3%] text-center text-3xl font-bold md:text-zinc-800 xl:text-4xl'>
          SERVICES
        </h1>
        <div className='mx-10 flex flex-wrap justify-center md:mx-[10%] xl:mx-10'>
          <Placard icon={secIcon} title={security} desc={securityDtls} />
          <Placard
            icon={mainIcon}
            title={maintainability}
            desc={maintainabilityDtls}
          />
          <Placard icon={desIcon} title={design} desc={designDtls} />
          <Placard icon={qualityIcon} title={quality} desc={qualityDtls} />
        </div>
        <Contact />
      </section>
    </>
  );
}

export default Stack;
