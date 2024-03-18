import mongoose from 'mongoose'
const connectDB=(url)=> mongoose.connect(url).then(()=> console.log('Db is connected'));
export default connectDB;