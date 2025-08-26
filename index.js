import express from 'express';
import connectDB from './db.js'; 
import User from './src/models/User.js'; // مدل User
import Question from './src/models/Question.js'; // مدل Qustion

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

//qustion

// 📌 ثبت سوال جدید
app.post('/questions', async (req, res) => {
  try {
    const question = new Question(req.body);
    await question.save();
    res.status(201).json(question);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// 📌 گرفتن همه سوال‌ها
app.get('/questions', async (req, res) => {
  try {
    const questions = await Question.find().populate('userId', 'username email');
    res.json(questions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 📌 گرفتن یک سوال خاص با id
app.get('/questions/:id', async (req, res) => {
  try {
    const question = await Question.findById(req.params.id).populate('userId', 'username email');
    if (!question) return res.status(404).json({ error: 'Question not found' });
    res.json(question);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// اجرای سرور
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
