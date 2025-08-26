// import mongoose from 'mongoose';

// const connectDB = async () => {
//   try {
//     await mongoose.connect('mongodb+srv://4hesam0:Hesam1386@cluster0.srdpf66.mongodb.net/Simorgh_Code?retryWrites=true&w=majority', {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log('✅ Connected to MongoDB');
//   } catch (err) {
//     console.error('❌ Error connecting to MongoDB:', err.message);
//     process.exit(1);
//   }
// };

// export default connectDB;
import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://4hesam0:a123456@cluster0.srdpf66.mongodb.net/Simorgh_Code?retryWrites=true&w=majority');
    console.log('✅ Connected to MongoDB');
  } catch (err) {
    console.error('❌ Error connecting to MongoDB:', err.message);
    process.exit(1);
  }
};

export default connectDB;

// import mongoose from 'mongoose';
// 
// const connectDB = async () => {
//   try {
//     await mongoose.connect('mongodb+srv://4hesam0:Hes@m1386@cluster0.srdpf66.mongodb.net/myDatabase?retryWrites=true&w=majority');
//     console.log('✅ Connected to MongoDB');
//   } catch (err) {
//     console.error('❌ Error connecting to MongoDB:', err.message);
//     process.exit(1);
//   }
// };

// export default connectDB;
