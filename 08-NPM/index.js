// http 모듈로 웹 서버 생성

const http = require('http');
const fs = require('fs'); // 파일 관련 내장 모듈
const server = http.createServer(function (request, response) {
  //   response.writeHead(200, { 'content-type': 'text/html; charset=utf8' }); // 응답 헤더
  //   response.write('<h1>Hello, Node.js!</h1>'); // 응답 본문
  //   response.end('<p>My first node server! 우와아아아</p>'); // 응답 본문 작성 후에 응답 종료

  try {
    // html 파일 불러오기
    const data = fs.readFileSync('./index2.html');
    response.writeHead(200, { 'content-type': 'text/html; charset=utf8' });
    response.write(data);
    response.end();
  } catch (error) {
    // 에러시 텍스트 찍히기
    // console.error(error);
    // response.writeHead(404, { 'content-type': 'text/html; charset=utf8' });
    // response.write('존재하지 않는 파일입니다. 다시 요청해주세요!');
    // response.end();
    // Quiz: 404.html 만들어서 해당 html을 응답으로 보내기
    const error404 = fs.readFileSync('./404.html');
    response.writeHead(404, { 'content-type': 'text/html; charset=utf8' });
    response.write(error404);
    response.end();
  }
});
const PORT = 8000;

// request 이벤트: 클라이언트 요청
// connection 이벤트: 클라이언트가 접속(클라이언트와 서버가 연결되었을 때) 발생
server.on('connection', function (request, response) {
  console.log('connection 이벤트 발생!!');
});

// 서버 실행
server.listen(PORT, function () {
  console.log(`server listening on ${PORT} port`);
});

// 10초 후 서버 종료
// setTimeout(function () {
//   console.log('10초가 지나 서버가 종료되었습니다.');
//   server.close(); // 서버 종료 메서드
// }, 10000);
