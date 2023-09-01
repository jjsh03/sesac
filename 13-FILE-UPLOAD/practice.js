const express = require('express');
const app = express();
const PORT = 8080;

// multer 관련 설정
const multer = require('multer');
const path = require('path');
const upload = multer({
  dest: 'uploads/',
});

// multer 세부 설정
const uploadDetail = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, 'uploads/');
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(null, path.basename(req.body.id, ext) + ext);
    },
  }),

  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
});

app.set('view engine', 'ejs');
app.set('views', './views');
app.use('/uploads', express.static(__dirname + '/uploads'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.render('practice');
});

app.post('/profile', uploadDetail.single('userfile'), (req, res) => {
  console.log(req.file);
  console.log(req.body);

  const fileName = req.file.filename;
  const filePath = '/' + req.file.destination + fileName;
  res.render('result', { user: req.body, filePath });
});

app.listen(PORT, function () {
  console.log(`Port ${PORT} is opening!`);
});
