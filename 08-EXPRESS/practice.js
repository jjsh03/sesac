const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs'); // ejs 등록
app.set('views', './practice-views'); // ejs 저장 위치

// '/' 경로로 들어왔을 때 실행
app.get('/', function (req, res) {
  res.render('pr-home'); // pr.ejs파일 실행
});

// '/sage'경로로 들어왔을 때 실행
app.get('/sage', function (req, res) {
  res.render('sage', {
    me: {
      name: 'sage',
      age: '28',
      msg: 'HI!',
    },
  });
});

app.listen(PORT, function () {
  console.log(`server listening on ${PORT} port`);
});
