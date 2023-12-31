const express = require('express');
const app = express();
const PORT = 8080;

console.log(__dirname); // C:\Users\user\Documents\sesac\08-EXPRESS
console.log(__dirname + '/static'); // C:\Users\user\Documents\sesac\08-EXPRESS\static

app.set('view engine', 'ejs'); // express 템플릿 엔진 종류 등록
app.set('views', './views'); // 템플릿 엔진 파일을 저장할 위치 등록
// ㄴstatic 미들 웨어 등록
app.use('/public', express.static(__dirname + '/static'));

// (임시) 데이터베이스에서 가져온 회원 정보(id, pw)
const idFromDB = 'banana';
const pwFromDB = '1234qwer';

// app.get(경로, 해당 경로로 들어왔을 때 실행할 함수)
// '/': 서버주소:포트번호/ (localhost:8080/)
app.get('/', function (request, response) {
  //   response.send('x'); x를 클라이언트한테 응답
  //   response.send('<h1>Hello! Express!</h1>');

  // response.render(ejs_filename):eje file이름을 찾아서 응답
  response.render('index', {
    userID: idFromDB,
    userPW: pwFromDB,
    btns: ['버튼1', '버튼2', '버튼3'],
    me: {
      name: 'sage',
      msg: '저는 세이지입니다.',
    },
    isLogin: false,
  });
});

// '/sesac' 경로로 들어왔을 때 "새싹 영등포캠퍼스 5기 수업중" 메세지 보이기
app.get('/sesac', function (request, response) {
  response.send('<h1>새싹 영등포캠퍼스 5기 수업중~~</h1>');
});

// Quiz
// 1. /login 경로로 요청이 들어오면 로그인 페이지를 응답
app.get('/login', function (request, response) {
  response.render('login');
});
// 2. /register 경로로 요청이 들어오면 회원가입 페이지(ejs)를 응답
app.get('/register', function (request, response) {
  response.render('register');
});

// 서버가 실행할 PORT 지정하고 실행했을 때 콘솔로그를 찍음
app.listen(PORT, function () {
  console.log(`server listening on ${PORT} port`);
});
