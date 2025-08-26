import express from 'express';
import connectDB from './db.js'; 
import User from './src/models/User.js'; // مدل User

const app = express();
const PORT = 3000;

// Middleware برای خواندن JSON
app.use(express.json());

// اتصال به دیتابیس و سپس ران کردن سرور
await connectDB();

// روت تستی
app.get('/', (req, res) => {
  res.send('✅ Server is running');
});

// 📌 ساخت کاربر (ثبت‌نام)
app.post('/users', async (req, res) => {
  try {
    const user = new User(req.body);  // داده از بدنه درخواست میاد
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// 📌 لیست همه کاربران
app.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 📌 گرفتن یک کاربر خاص با id
app.get('/users/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// اجرای سرور
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
