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

exports.postVisitor = (req, res) => {
  console.log(req.body);
  // 예상 {name: xx, comment: yy}

  Visitor.postVisitor(req.body, (insertId) => {
    console.log('controller >>', insertId);
    res.send({ id: insertId, name: req.body.name, comment: req.body.comment });
  });
};

exports.deleteVisitor = (req, res) => {
  console.log(req.body); // {id: xx}
  const { id } = req.body;

  Visitor.deleteVisitor(id, (result) => {
    console.log('controller >>', result); // result: Visitor callback에 들어있는 true
    res.send(result); // res.send(true)
  });
};

exports.getVisitor = (req, res) => {
  // console.log(req.query);
  console.log(req.params); // { id: 5 }
  const { id } = req.params;

  Visitor.getVisitor(id, (result) => {
    // result: 모델의 getVisitor callback의 인자(rows[0])
    console.log(result); // {}
    res.send(result);
  });
};

exports.updateVisitor = (req, res) => {
  console.log(req.body); // {id: x, name: x, comment: x}

  Visitor.updateVisitor(req.body, () => {
    res.send({ isUpdated: true });
  });
};
