
import { MongoClient } from 'mongodb';
import bcrypt from 'bcryptjs'; // or 'bcrypt'

const uri = 'your_mongodb_atlas_connection_string'; // <-- your Atlas URL here
const client = new MongoClient(uri);

async function createAdmin() {
  try {
    await client.connect();
    const db = client.db('your_db_name');
    const admins = db.collection('admins');

    const adminId = 'admin123';
    const plainPassword = 'yourpassword123';

    // Hash the password
    const hashedPassword = await bcrypt.hash(plainPassword, 10);

    // Insert into database
    const result = await admins.insertOne({
      adminId: adminId,
      password: hashedPassword,
    });

    console.log('✅ Admin created successfully', result.insertedId);
  } catch (error) {
    console.error('❌ Error creating admin:', error);
  } finally {
    await client.close();
  }
}

createAdmin();
