import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Login = () => {

  const navigate = useNavigate();

  const onLogin = () =>{
    navigate('/',{
      replace:true
    })
  };

  return (
    <div className='container mt-5'>
      Login
      <hr />

      <button 
      className='btn btn-primary'
      onClick={onLogin}
      >
        Login
      </button>
    </div>
  )
}
