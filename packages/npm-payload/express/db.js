import mongoose from 'mongoose';

export const connectDB = async (MONGODB_URI) => {
 try {
    await mongoose.connect(MONGODB_URI);
    console.log('MongoDB Connected...');
 } catch (err) {
    console.error(err.message);
    process.exit(1);
 }
};
