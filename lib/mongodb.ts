// lib/mongodb.ts
import { MongoClient, Db } from "mongodb";

const MONGODB_URL = process.env.MONGODB_URL;
if (!MONGODB_URL) throw new Error("Missing MONGODB_URL environment variable");

const DATABASE_NAME = process.env.DATABASE_NAME || "infiniGrow";

const globalForMongo = globalThis as typeof globalThis & {
  mongoClientPromise?: Promise<MongoClient>;
};

const client = new MongoClient(MONGODB_URL);
const clientPromise = globalForMongo.mongoClientPromise ?? client.connect();

if (process.env.NODE_ENV !== "production") {
  globalForMongo.mongoClientPromise = clientPromise;
}

export async function getDb(): Promise<Db> {
  const client = await clientPromise;
  return client.db(DATABASE_NAME);
}

export async function getCollection(collectionName: string) {
  const db = await getDb();
  return db.collection(collectionName);
}

export { DATABASE_NAME };
export default clientPromise;