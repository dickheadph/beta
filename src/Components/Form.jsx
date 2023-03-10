import React, { useState } from 'react';
import axios from 'axios';
import '../index.css';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';
const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT;

function Form() {
  const [loading, setLoading] = useState(false);
  const [projects, setProjects] = useState({
    name: '',
    projectImage: null,
    live: '',
    repo: '',
    desc: '',
    category: '',
  });
  const { name, projectImage, live, repo, desc, category } = projects;

  const onMutate = (e) => {
    if (e.target.files) {
      setProjects((prevSate) => ({
        ...prevSate,
        projectImage: e.target.files[0],
      }));
    }
    if (!e.target.files) {
      setProjects((prevSate) => ({
        ...prevSate,
        [e.target.id]: e.target.value,
      }));
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();

    formData.append('name', projects.name);
    formData.append('projectImage', projects.projectImage);
    formData.append('desc', projects.desc);
    formData.append('live', projects.live);
    formData.append('repo', projects.repo);
    formData.append('category', projects.category);

    console.log(...formData);

    axios
      .post(`${API_ENDPOINT}/projects`, formData)
      .then((res) => {
        console.log(res);
        toast.success('Submitted Succesfully');
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        toast.error('Project upload failed. Try again.');
      });
  };
  return loading ? (
    <Loading />
  ) : (
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
          type='file'
          id='projectImage'
          className='form'
          accept='.png, .jpg, .jpeg'
          max={1}
          required
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
        <label htmlFor='repo'>Category</label>
        <br />
        <select name='' id='category' value={category} onChange={onMutate}>
          <option value='fullstack'>Full-stack</option>
          <option value='frontend'>Front-End</option>
          <option value='api'>API</option>
          <option value='app'>Native App</option>
        </select>
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
