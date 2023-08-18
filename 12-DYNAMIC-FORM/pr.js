const express = require('express');
const app = express();
const PORT = 8080;

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.render('pr');
});

app.get('/register', (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

app.post('/login', (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.listen(PORT, function () {
  console.log(`Port ${PORT} is opening!`);
});
