import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css'
import {HiOutlineMail} from 'react-icons/hi'
import {RiLockPasswordLine} from 'react-icons/ri'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleEmailChange = (event) => {
    setError('');
    setEmail(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setError('');
    setPassword(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await fetch("http://localhost:8082/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (response.status === 200) {
        const { user, token } = await response.json();
        localStorage.setItem('token', token); // Save JWT token to local storage
        localStorage.setItem('userId', user.id);
        navigate(`/profile/${user.id}`);
      } else {
        const { message } = await response.json();
        setError(message);
      }
    } catch (error) {
      setError('An error occurred while processing your request. Please try again later.');
    }
  }

  return (
    <div className='main'>
      <div className='login-session'>
        <div className='login-left'>
        </div>
        <form onSubmit={handleSubmit} className='form'>
        <h2>We are here for you</h2>
        <p>Welcome back! Log in to your account to view today's clients:</p>
        <div className='login-box'>
          <HiOutlineMail />
          <input className='login-input' type="email" value={email} onChange={handleEmailChange} placeholder='Email' />
        </div>
        <div className='login-box'>
          <RiLockPasswordLine />
            <input className='login-input' type="password" value={password} onChange={handlePasswordChange} placeholder='Password' />
        </div>
          {error && <div style={{ color: 'red' }}>{error}</div>} {/* display error message in red */}
          <button className='login-button' type="submit">Login</button>
          <h4>Don't have an account?   <span login-to-register><Link to="/register">Register</Link></span></h4>
        </form>
      </div>

    </div>
    
  )
}

export default Login;
