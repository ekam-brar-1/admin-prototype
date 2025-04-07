import { connectToDatabase } from '@/app/lib/mongodb';
import bcrypt from 'bcryptjs';

export async function POST(req) {
  const body = await req.json();
  console.log("Request body:", body); // Debug log
  const { adminId, password } = body;

  try {
    const { db } = await connectToDatabase();
    // Look up the admin using the received adminId (which corresponds to the username field in DB)
    const admin = await db.collection('Admin').findOne({ username: adminId });
    
    if (!admin) {
      return new Response(JSON.stringify({ message: 'Invalid credentials' }), { status: 401 });
    }
    else {
      console.log("Admin found:", admin); // Debug log
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return new Response(JSON.stringify({ message: 'Invalid credentials' }), { status: 401 });
    }

    return new Response(JSON.stringify({ message: 'Login successful' }), { status: 200 });
  } catch (error) {
    console.error('Login Error:', error);
    return new Response(JSON.stringify({ message: 'Internal server error' }), { status: 500 });
  }
}
