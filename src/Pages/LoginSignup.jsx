import React from 'react';
import { useHistory } from 'react-router-dom'; // Import useHistory from react-router-dom
import './CSS/LoginSignup.css';

const LoginSignup = () => {
  const history = useHistory(); // Use useHistory hook

  const handleLogin = async () => {
    try {
      const result = await window.hive_keychain.requestSignIn('example'); // Replace 'example' with the actual username
      if (result.success) {
        // Authentication successful, redirect to the desired page
        history.push('/');
      } else {
        // Authentication failed, handle accordingly
        console.error('Authentication failed:', result.message);
      }
    } catch (error) {
      console.error('Error requesting sign-in:', error);
    }
  };

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Password' />
        </div>
        <button onClick={handleLogin}>Continue</button>
        <p className="loginsignup-login">Already have an account? <span>Login here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
