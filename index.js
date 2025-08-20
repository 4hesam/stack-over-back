import express from 'express';
import connectDB from './db.js'; // هنوز نساختی ولی قراره بسازی
import User from './models/User.js'; // مسیر صحیح فایل user

const app = express();
const PORT = 3000;

// Middleware برای خواندن JSON
app.use(express.json());

// اتصال به دیتابیس
await connectDB();

// روت تستی برای بررسی
app.get('/', (req, res) => {
  res.send('✅Countine');
});

// روت تستی برای ساخت یوزر (اختیاری)
app.post('/users', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// اجرای سرور
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
