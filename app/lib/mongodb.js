
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI; // your MongoDB URI in .env.local
const options = {};

let client;
let clientPromise;

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your Mongo URI to .env.local');
}

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
  console.log('MongoDB connected in production environment');
}

export async function connectToDatabase() {
  const client = await clientPromise;
  const db = client.db(); // your default DB
  return { client, db };
}
