require('dotenv').config();

const PORT = process.env.PORT || 5000;
const express = require('express');

const userRoutes = require('./routes/users.js');
const middlewareLogRequest = require('./middleware/logs.js');
const upload = require('./middleware/multer.js');

const app = express();

app.use(middlewareLogRequest);

app.use(express.json());

app.use('/assets', express.static('public/images'));

app.use('/users', userRoutes);

app.post('/upload', upload.single('gambar'), (req, res) => {
  res.json({
    message: 'Upload gambar berhasil',
  });
});

app.listen(PORT, () => {
  console.log(`berhasil jalan di port ${PORT}`);
});
