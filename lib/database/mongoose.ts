import mongoose ,{Mongoose} from 'mongoose';
import { Pontano_Sans } from 'next/font/google';
import { buffer } from 'stream/consumers';

const MONGODB_URI = process.env.MONGODB_URI;

interface MongooseConnection {
    conn : Mongoose | null;
    promise: Promise<Mongoose> | null;
    }

let cached: MongooseConnection = (global as any).mongoose 
if (!cached) {
    cached = (global as any).mongoose = { conn: null, promise: null }
} // if there is no global mongoose, create one

export const connectToDatabase = async () => {
    if (cached.conn) {
        return cached.conn
    }
    if (!MONGODB_URI) throw new Error('MONGODB_URI is missing in .env.local')

    cached.promise = cached.promise || mongoose.connect(MONGODB_URI, { dbName: "ponyedutech" , bufferCommands: false})
    cached.conn = await cached.promise
    return cached.conn
}
