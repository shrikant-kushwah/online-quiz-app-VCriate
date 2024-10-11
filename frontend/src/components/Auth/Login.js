import React, { useState } from 'react';
import { loginUser } from '../../api/index';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser({ email, password });
      localStorage.setItem('token', response.data.token);
      window.location.href = "/"
      setSuccess('User logged in successfully!');
      setError('');
    } catch (err) {
      setError('Error logging in');
      setSuccess('');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-5 border rounded shadow-md">
      <h2 className="text-2xl mb-4">Login</h2>
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">{success}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 mb-4 w-full"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 mb-4 w-full"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
