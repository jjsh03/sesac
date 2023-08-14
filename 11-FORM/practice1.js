const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('/views', 'views');

app.use(express.urlencoded({ extended: true }));
app.unsubscribe(express.json());

app.get('/', (req, res) => {
  res.render('pr_index', { title: '실습: GET' });
  console.log(req.query);
});

app.get('/formResult', (req, res) => {
  console.log(req.query);
  res.render('pr_result', { title: '실습: get 정보받기', userInfo: req.query });
});

app.listen(PORT, () => {
  console.log(`${PORT} is open!`);
});
