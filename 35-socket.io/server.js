const express = require('express');
const http = require('http');
const SocketIO = require('socket.io');

const app = express();
const server = http.createServer(app); // express 앱으로 http 서버를 생성
const io = SocketIO(server); // socket.io를 http 서버에 연결
const PORT = 8080;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('chat');
});

// io.on(): socket 관련한 통신 작업을 처리
io.on('connection', (socket) => {
  // connection 이벤트는 클라이언트가 접속했을 때 발생
  // 콜백 함수의 인자로 소켓 객체를 제공

  console.log('서버 연결 완료 :: ', socket.id);
  // socket.id: 소켓 고유 아이디 (브라우저 탭 단위)

  // [실습1]
  //   socket.on('hello', (data) => {
  //     console.log(`${data.who}: ${data.msg}`);
  //     socket.emit('helloKr', { who: 'hello', msg: '안녕!!' });
  //   });

  //   socket.on('study', (data) => {
  //     console.log(`${data.who}: ${data.msg}`);
  //     socket.emit('studyKr', { who: 'study', msg: '공부합시다!' });
  //   });

  //   socket.on('bye', (data) => {
  //     console.log(`${data.who}: ${data.msg}`);
  //     socket.emit('byeKr', { who: 'bye', msg: '잘가!!!' });
  //   });

  // [실습3] 채팅창 입장 안내
  io.emit('notice', `${socket.id}님이 입장하셨습니다.`);
});

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
