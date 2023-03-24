import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css'

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [passwordMatch, setPasswordMatch] = useState(true);
    const [showRed, setShowRed] = useState(false);

    const handleNameChange = (event) => {
      setName(event.target.value);
    }

    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    }

    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    }

    const handleConfirmPasswordChange = (event) => {
      setShowRed(false);
      setConfirmPassword(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password === confirmPassword) {
          const response = await fetch("http://localhost:8082/api/users/register", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, password }),
          });
      
          if (response.status === 200) {
            const { message, userId, token } = await response.json();
            localStorage.removeItem('token');
            localStorage.removeItem('userId');
            localStorage.setItem('token', token); // Save JWT token to local storage
            localStorage.setItem('userId', userId);
            navigate(`/profile/${userId}`);
          } else {
            const { message } = await response.json();
            setError(message);
          }
        } else {
          setShowRed(true);
          setPasswordMatch(false);
        }
    }

    return (
      <div className='main'>
        <div className='register-session'>
          <div className='register-left'>
          </div>
          <form className='form' onSubmit={handleSubmit}>
            <h2>Register</h2>
            <div>
              <label>Name:</label>
              <input className='register-input' type="text" value={name} onChange={handleNameChange} />
            </div>
            <div>
              <label>Email:</label>
              <input className='register-input' type="email" value={email} onChange={handleEmailChange} />
            </div>
            <div>
              <label>Password:</label>
              <input className='register-input' type="password" value={password} onChange={handlePasswordChange} />
            </div>
            <div>
              <label>Confirm Password:</label>
              <input className='register-input' type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} style={{ borderColor: showRed ? 'red' : 'initial' }} />
              {showRed ? <p style={{ color: 'red' }}>Passwords do not match</p> : null}
            </div>
            <button className='register-button' type="submit">Register</button>
          </form>
        </div>
      </div>
      
    );
    
}

export default Register;