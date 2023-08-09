// math2 module
// add 더하기 함수를 정의한 파일

const add = (a, b) => a + b;
const PI = 3.141592;
const E = 2.718;

// module.experts = {
//     add, // obj 에서 key값과 value값이 같을 때 key 생략
//     PI,
//     E,
// }

const subtraction = (a, b) => a - b;
const multiple = (a, b) => a * b;
const division = (a, b) => a / b;

// case1. 객체로 감싸서 내보내기
module.exports = {
  add,
  PI,
  E,
  subtraction,
  multiple,
  division,
};

// case2. 하나씩 내보내기
// module.exports.add = add;
// module.exports.subtraction = subtraction;
// module.exports.multiple = multiple;
// module.exports.division = division;
// module.exports.PI = PI;
// module.exports.E = E;

// case3. case2를 더 간단하게 내보내기
// exports.add = add;
// exports.subtraction = subtraction;
// exports.multiple = multiple;
// exports.division = division;
// exports.PI = PI;
// exports.E = E;
