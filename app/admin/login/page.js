"use client";
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
export default function AdminLogin() {
  const router = useRouter();
  const [adminId, setAdminId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/admin/login', { adminId, password });
      if (res.status === 200) {
        router.push('/admin/dashboard'); 
      }
    } catch (err) {
      console.error(err);
      setError('Invalid ID or password.');
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: 'auto', marginTop: 100 }}>
      <h2>Admin Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Admin ID"
          value={adminId}
          onChange={(e) => setAdminId(e.target.value)}
          required
          style={{ width: '100%', marginBottom: 10, padding: 8 }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ width: '100%', marginBottom: 10, padding: 8 }}
        />
        <button type="submit" style={{ width: '100%', padding: 10, backgroundColor: '#0070f3', color: 'white' }}>
          Login
        </button>
        {error && <p style={{ color: 'red', marginTop: 10 }}>{error}</p>}
      </form>
    </div>
  );
}
