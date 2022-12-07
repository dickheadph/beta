import React, { useState } from 'react';
import axios from 'axios';
import '../index.css';
function Form() {
  const [projects, setProjects] = useState({
    name: '',
    img: '',
    live: '',
    repo: '',
    desc: '',
  });
  const { name, img, live, repo, desc } = projects;

  const onMutate = (e) => {
    setProjects((prevSate) => ({
      ...prevSate,
      [e.target.id]: e.target.value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    axios.post(`https://groovy-groove-268003.firebaseio.com/projects.json`, {
      name: projects.name,
      img: projects.img,
      live: projects.live,
      repo: projects.repo,
      desc: projects.desc,
    });
    setProjects([]);
    alert('Submitted Succesfully');
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <label htmlFor='name'>Name</label>
        <br />
        <input
          type='text'
          id='name'
          value={name}
          className='form'
          onChange={onMutate}
        />
        <br />
        <label htmlFor='img'>Img url</label>
        <br />
        <input
          type='text'
          id='img'
          value={img}
          className='form'
          onChange={onMutate}
        />
        <br />
        <label htmlFor='live'>Live url</label>
        <br />
        <input
          type='text'
          id='live'
          value={live}
          className='form'
          onChange={onMutate}
        />
        <br />
        <label htmlFor='repo'>Repo url</label>
        <br />
        <input
          type='text'
          id='repo'
          value={repo}
          className='form'
          onChange={onMutate}
        />
        <br />
        <label htmlFor='repo'>Description</label>
        <br />
        <textarea
          name=''
          id='desc'
          value={desc}
          cols='30'
          rows='10'
          onChange={onMutate}
          className='my-2 rounded-lg border-[1px] border-stone-800 outline-none'></textarea>
        <br />
        <button type='submit'>Submit</button>
      </form>
    </>
  );
}

export default Form;
