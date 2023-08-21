const express = require('express');
const app = express();
const PORT = 8000;

// multer 관련 설정
const multer = require('multer');
const path = require('path'); // 경로에 관한 내장 모듈
const upload = multer({
  dest: 'uploads/', // dest: 클라이언트가 업로드한 파일을 저장할 서버측 경로
});
const uploadDetail = multer({
  // storage: 저장할 공간에 대한 정보
  storage: multer.diskStorage({
    destination(req, file, done) {
      // done: callback함수
      done(null, 'uploads/'); // 파일을 업로드할 경로 설정
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname); // 파일 '확장자'를 추출
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
      // basename: 확장자를 제외한 원본 파일 이름 추출
      // base + Date.now() + ext: 파일이름 + 날짜 + 확장자
      // Date.now() => 1. 파일 이름 중복을 막기 위해 2. 파일 이름만으로 파일이 저장된 시점 유추 가능
    },
  }),
  // limits: 파일 제한 정보
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
});

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.render('index');
});

// 1. single(): 하나의 파일을 업로드
// upload.single('userfile'): 클라이언트의 요청이 들어오면
// multer 설정(upload 변수)에 따라 파일을 업로드 한 후, req.file 객체 생성
// single() 인자는 input 태그의 name 속성과 일치시켜야 함
app.post('/upload', uploadDetail.single('userfile'), (req, res) => {
  // req.file: 파일 업로드 정보
  // req.body: 파일 외의 정보
  console.log(req.file);
  console.log(req.body);
  res.send('파일 업로드 완료!');
});

// req.file 객체 자세히 보기
// {
//     fieldname: 'userfile', // 폼에 정의한 name 값
//     originalname: 'gyodong.png', // 원본 파일명
//     encoding: '7bit', // 파일 이코딩 타입
//     mimetype: 'image/png', // 파일 타입
//     destination: 'uploads/', // 파일 저장 경로
//     filename: '6fd51a94d0208af516b5af17edd36fd2', // destination 저장된 파일명
//     path: 'uploads\\6fd51a94d0208af516b5af17edd36fd2', // 업로드된 파일 전체 경로
//     size: 60346 // 파일 크기
//   }

app.listen(PORT, function () {
  console.log(`Port ${PORT} is opening!`);
});
