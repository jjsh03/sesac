const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views', './views');
app.use('/static', express.static(__dirname + '/static'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// [라우터 분리]
const indexRouter = require('./routes'); // index생략가능!
app.use('/', indexRouter); // localhost:PORT/ 경로를 기본으로 ./routes/index.js 파일에 선언한대로 동작

// 404 error 처리
// 반드시 맨 마지막 라우트로 선언 -> 나머지 코드 무시되기 때문!
app.get('*', (req, res) => {
  res.render('404');
});

// localhost:PORT로 express 앱이 실행~~
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
