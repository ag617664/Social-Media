import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';


function SignUp() {
  const [formData,setFormData]=useState({});
  const [error, setError] = useState(null);
  const [files, setFiles] = useState([]);
  const navigate=useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit=async(e)=>{
    e.preventDefault();
    try{
      const res=await fetch('http://localhost:3001/auth/register',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data=res.json();
      if(data.success==false){
        setError(data.message);
        navigate('/signup')
      }

      navigate('/');

    }catch(error){
      setError(error.message)
    }
  }
  return (
    <div className='bg-2'>
      <h1 className='text-1 font-extrabold text-center p-5 text-3xl bg-3'>Sociopedia</h1>
      <div className=' p-10'>
        <div className='bg-3 p-20 w-7/12 mx-auto'>
          <p className='font-semibold '>Welcome to Socipedia, the Social Media for Sociopaths!</p>
          <form onSubmit={handleSubmit} className='flex flex-col gap-4 '>
            <div className='flex justify-between'>
              <input type="text" placeholder='First Name' className='border p-3 rounded-lg w-5/12' id='firstName' onChange={handleChange}/>
              <input type="text" placeholder='Last Name' className='border p-3 rounded-lg w-5/12' id='lastName' onChange={handleChange}/>
            </div>
            <input
          type='text'
          placeholder='location'
          className='border p-3 rounded-lg'
          id='location'
          onChange={handleChange}
          
        />
        <p className='font-semibold'>Profile Photo</p>
        <input 
        onChange={(e) => setFiles(e.target.files)}
        type="file" 
        accept='image/*'
        id='image'
        multiple={false}
        />
        <input
          type='text'
          placeholder='Occupation'
          className='border p-3 rounded-lg'
          id='occupation'
          onChange={handleChange}
          
        />
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
          SignUp
        </button>
          </form>
          <div className='mt-5'>
            <Link to={'/'}>
            <p className='text-1'>Have an account? Login here.</p>
            </Link>
          </div>
        </div>

      </div>
      {error && <p className='text-red-500 mt-5'>{error}</p>}
    </div>
  )
}

export default SignUp