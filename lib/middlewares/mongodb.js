import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  )
}

const connectDB = handler => async (req, res) => {
    
    if (mongoose.connections[0].readyState) {
        // Use current db connection      
        return handler(req, res);
    }
      // Use new db connection
    mongoose.connect(MONGODB_URI, {});
    return handler(req, res);
  };
  
  export default connectDB;

  export const connectMongo = async () => { console.log("Connected to mongoDB....");  return mongoose.connect(MONGODB_URI);
  }

//export default connectMongo;