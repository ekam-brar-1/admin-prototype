"use client";
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Adjust this to match your actual backend route and payload:
      const res = await axios.post('/api/admin/login', { email, password });
      if (res.status === 200) {
        router.push('/admin/dashboard');
      }
    } catch (err) {
      console.error(err);
      setError('Invalid email or password.');
    }
  };

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        backgroundColor: '#65558F',  // Purple background
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Gray box container */}
      <div
        style={{
          width: 'auto',
          backgroundColor: '#F5F5F5', // Light gray background
          padding: '40px',
          borderRadius: '8px',
        }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Admin Login</h2>
        <form onSubmit={handleLogin}>
          {/* Email Field */}
          <input
            type="text"
            placeholder="Enter your Username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: '100%',
              marginBottom: '10px',
              padding: '10px',
              border: '1px solid #999',
              borderRadius: '4px',
            }}
          />
          {/* Password Field */}
          <input
            type="password"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              width: '100%',
              marginBottom: '20px',
              padding: '10px',
              border: '1px solid #999',
              borderRadius: '4px',
            }}
          />
          {/* Login Button */}
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '12px',
              backgroundColor: '#6A48E0',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              fontSize: '16px',
              cursor: 'pointer',
            }}
          >
            LOGIN
          </button>
          {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
        </form>
      </div>
    </div>
  );
}
