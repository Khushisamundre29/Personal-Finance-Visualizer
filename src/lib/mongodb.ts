import { MongoClient } from 'mongodb';

// You can replace this URI with your actual MongoDB URI
const uri = process.env.MONGODB_URI || 'your-mongodb-uri';
let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === 'development') {
  // In development mode, use a global variable to cache the MongoDB client
  let globalAny: any = global;
  if (!globalAny._mongoClientPromise) {
    client = new MongoClient(uri);
    globalAny._mongoClientPromise = client.connect();
  }
  clientPromise = globalAny._mongoClientPromise;
} else {
  // In production mode, directly create a MongoClient and connect
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

// Export the connection promise
export async function connectToDatabase() {
  const client = await clientPromise;
  return client.db();
}
