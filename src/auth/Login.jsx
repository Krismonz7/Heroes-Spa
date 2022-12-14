import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';

export const Login = () => {

  const {login} = useContext(AuthContext)
  const navigate = useNavigate();

  const onLogin = () =>{
    const lastPath =  localStorage.getItem('lastPath') || '/'
    login('Kirby :D')
    
    navigate(lastPath,{
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
