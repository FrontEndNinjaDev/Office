import React, { useState } from 'react';
import axios from 'axios';

const Signin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');

  const handleSignin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:5000/users?username=${username}&password=${password}`);
      if (response.data.length > 0) {
        setError('Signin successful!');
      } else {
        setError('Invalid username or password');
      }
    } catch (err) {
      setError('Error during signin');
    }
  };

  return (
    <div className='signup-container'>
      <h2>Signin</h2>
      <form onSubmit={handleSignin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
          <input
          type="text"
          placeholder="Email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Signin</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Signin;
