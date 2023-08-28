const Visitor = require('../model/Visitor');

// GET / => localhost:PORT/
exports.main = (req, res) => {
  res.render('index');
};

// GET /visitor => localhost:PORT/visitor
exports.getVisitors = (req, res) => {
  // [before]
  // res.render('visitor', { data: Visitor.getVisitors() });

  // [after]
  // console.log(Visitor.getVisitors());
  Visitor.getVisitors((result) => {
    console.log('controller >>', result);
    res.render('visitor', { data: result });
  });
};
