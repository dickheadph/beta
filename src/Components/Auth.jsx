import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading';
import '../index.css';
const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT;
function Auth() {
  const navigateTo = useNavigate();
  const [loading, setLoading] = useState(false);
  const [auth, setAuth] = useState({
    email: '',
    password: '',
  });
  const { email, password } = auth;

  const onMutate = (e) => {
    setAuth((prevSate) => ({
      ...prevSate,
      [e.target.id]: e.target.value,
    }));
  };
  const submitHandler = (e) => {
    e.preventDefault();

    setLoading(true);
    axios
      .post(`${API_ENDPOINT}/admin/admin-login`, {
        email: auth.email,
        password: auth.password,
      })
      .then((res) => {
        //console.log(res);
        if (res.status === 200) {
          navigateTo('/form');
          toast.success('Welcome back, My leige.');
        }
      })
      .catch((err) => {
        setLoading(false);
        toast.error('Invalid admin credentials.');
      });
  };
  return loading ? (
    <Loading />
  ) : (
    <div className='h-screen bg-stone-100'>
      <div className='mx-auto w-full'>
        <h1 className='pt-[10%] text-center text-3xl font-bold'>
          Admin <em className='text-[#f7c848]'>Log In</em>
        </h1>
        <form
          onSubmit={submitHandler}
          className='items-center p-[10%] lg:mx-[25%] lg:p-[5%]'>
          <label htmlFor=''>E-mail:</label> <br />
          <input
            type='email'
            required
            id='email'
            value={email}
            className='input'
            onChange={onMutate}
          />
          <br />
          <label htmlFor=''>Password:</label> <br />
          <input
            type='password'
            required
            autoComplete='false'
            id='password'
            value={password}
            className='input'
            onChange={onMutate}
          />{' '}
          <br />
          <button type='submit' className='submit'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Auth;
