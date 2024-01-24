import React from 'react'
import { Link } from 'react-router-dom'
import {useNavigate } from 'react-router-dom';
import {useState} from 'react';
import { useDispatch } from 'react-redux';
import {setLogin} from '../../state/index.js'

function LoginPage() {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const [formData, setFormData] = useState({});
  const [error,setError]=useState(false);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:3001/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      dispatch(
        setLogin({
          user: data.user,
          token: data.token,
        })

      );
      
      if (data.success === false) {
        
        navigate('/');
      }
      navigate('/home');
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    
    <div className='bg-2'>
      <h1 className='text-1 font-extrabold text-center p-5 text-3xl bg-3'>Sociopedia</h1>
      <div className=' p-10'>
        <div className='bg-3 p-20 w-7/12 mx-auto'>
          <p className='font-semibold '>Welcome to Socipedia, the Social Media for Sociopaths!</p>
          <form onSubmit={handleSubmit} className='flex flex-col gap-4 '>
          <input
          type='email'
          placeholder='email'
          className='border p-3 rounded-lg'
          id='email'
          onChange={handleChange}
          
        />
        <input
          type='password'
          placeholder='password'
          className='border p-3 rounded-lg'
          id='password'
          onChange={handleChange}
        />
        <button
          className='bg-1 text-3 p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'
        >
          Login
        </button>
          </form>
          <div className='mt-5'>
            <Link to={'/signUp'}>
            <p className='text-1'>Don't have an account? Sign Up here.</p>
            </Link>
          </div>
        </div>

      </div>
      {error && <p className='text-red-500 mt-5'>{error}</p>}
    </div>
  )
}

export default LoginPage