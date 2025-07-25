import React, { useState, useEffect } from 'react';
import '../index.css';
import Expirience from './Expirience';
import CV from '../../public/ShanCarl_Belgica_Tech_Supp.pdf';
import {
  SiHtml5,
  SiNodedotjs,
  SiTailwindcss,
  SiReact,
  SiJavascript,
  SiPostman,
  SiGit,
  SiVisualstudiocode,
  SiMysql,
  SiSap,
  SiJira,
} from 'react-icons/si';
import { VscAzureDevops } from 'react-icons/vsc';
import { BsFiletypeXml } from "react-icons/bs";
import Socials from './Socials';
import Projects from '../Components/Projects';
import Placard from './Placard';
import Contact from './Contact';
import axios from 'axios';
import serviceFor from '../Components/ServicesLits';
import LoadingProjects from '../Shared/LoadProjects';
const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT;

function Stack() {
  const [projects, setProjects] = useState([]);
  const [category, setCategory] = useState('projects');
  const getProjects = () => {
    axios
      .get(`${API_ENDPOINT}/${category}`)
      .then((res) => {
        const projects = res.data.data.projects;
        setProjects(projects);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getProjects();
  }, [category]);
  // const getProjects = () => {
  //   axios
  //     //.get(`api/${category}`)
  //     .get('https://groovy-groove-268003.firebaseio.com/projects.json')
  //     .then((res) => {
  //       //setProjects(res.data);
  //       const val = res.data;
  //       //console.log(val);
  //       let projects = [];

  //       for (const key in val) {
  //         projects.push({
  //           id: key,
  //           name: val[key].name,
  //           img: val[key].img,
  //           live: val[key].live,
  //           repo: val[key].repo,
  //           desc: val[key].desc,
  //         });
  //       }
  //       //console.log(projects);
  //       setProjects(projects);
  //     })
  //     .catch((err) => console.log(err));
  // };
  // useEffect(() => {
  //   getProjects();
  // }, []);

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
      <br />
      <section className='absolute top-[55%] w-full sm:top-[30%] md:top-[50%] lg:top-[65%] xl:top-[62%] '>
        <div className='pb-6 text-center md:pt-0 xl:pt-5'>
          <a
            href={CV}
            name='DOWNLOAD CV'
            className='rounded-sm bg-[#f0b547]/90 py-2 px-3'>
            DOWNLOAD CV
          </a>
        </div>
        <div className='mt-5 lg:mt-[2%] xl:mt-0'>
          <ul className='flex flex-wrap items-center justify-center space-x-2 md:space-x-7 lg:space-x-8 xl:space-x-10 xl:pt-8'>
            <li>
              <SiHtml5 className='stack' />
            </li>
            <li>
              <SiReact className='stack' />
            </li>
            <li>
              <SiNodedotjs className='stack' />
            </li>
            <li>
              <SiJavascript className='stack text-[#f0b547]/90 animate-bounce' />
            </li>
            <li>
              <SiTailwindcss className='stack' />
            </li>
            <li>
              <BsFiletypeXml className='stack' />
            </li>
            <li>
              <SiMysql className='stack' />
            </li>
          </ul>
          <h1 className='my-4 text-center text-xl font-semibold text-zinc-800 xl:text-black'>
            Tech<em className='text-[#f0b547]'> Stack</em>
          </h1>
        </div>
        <div>
          <ul className='flex flex-wrap items-center justify-center space-x-2 md:space-x-7 xl:space-x-8'>
            <li className='font-bold text-[#424244]'>SNOW</li>
            <li>
              <VscAzureDevops className='tool' />
            </li>
            <li>
              <SiPostman className='tool' />
            </li>
            <li>
              <SiVisualstudiocode className='tool' />
            </li>
            <li>
              <SiJira className='tool' />
            </li>
            <li>
              <SiSap className='tool' />
            </li>
          </ul>
          <h1 className='my-2 text-center text-xl font-semibold text-zinc-900'>
            Tools
          </h1>
        </div>
        <Expirience/>
        <section id='projects'>
          <h1 className='my-[4%] text-center text-3xl font-bold md:text-zinc-800 xl:text-4xl'>
            PROJECTS
          </h1>
          <ul className='flex justify-center space-x-2 font-semibold'>
            <li
              className='category'
              onClick={() => {
                setCategory('projects');
              }}
              value='test'>
              All
            </li>
            <li
              className=''
              onClick={() => {
                setCategory('projects/full-stack');
              }}>
              Fullstack
            </li>
            <li
              onClick={() => {
                setCategory('projects/front-end');
              }}>
              Frontend
            </li>
            <li
              onClick={() => {
                setCategory('projects/back-end-api');
              }}>
              Api
            </li>
            <li
              onClick={() => {
                setCategory('projects/native-app');
              }}>
              App
            </li>
          </ul>
          <div className='m-2 flex flex-wrap justify-center'>
            {projects.length == 0 ? (
              <>
              <ul className='flex-wrap justify-center'>
                <li>
                <LoadingProjects/>
                </li>
                <li>
                <h1 className='text-sm lg:text-sm xl:text-base'>Loading...</h1>
                </li>
              </ul>
              </>
            ) : (
              projects.map((project) => (
                <Projects
                  key={project.id}
                  id={project.id}
                  img={project.projectImage}
                  name={project.name}
                  desc={project.desc}
                  cat={project.category}
                  live={project.live}
                  repo={project.repo}
                />
              ))
            )}
          </div>
        </section>
        <h1
          className='my-[3%] text-center text-3xl font-bold md:text-zinc-800 xl:text-4xl'
          id='services'>
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
