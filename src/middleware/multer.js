const multer = require('multer');
// const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'public/images');
  },
  filename: (req, file, callback) => {
    const timestamp = new Date().getTime();
    const originalname = file.originalname;

    callback(null, `${timestamp}-${originalname}`);
  },
});

const upload = multer({
  storage: storage,
});

module.exports = upload;
