// 구조분해할당: 구조를 분해해서 할당(=연산자)하겠다!
// 1. 객체({})를 구조분해
const cookie = {
  choco: '초코맛 쿠키',
  vanilla: '바닐라맛 쿠키',
  orange: '오렌지맛 쿠키',
};
console.log(cookie.choco);
console.log(cookie.vanilla);
console.log(cookie.orange);

// 객체를 구조분해 해보자!
const { choco, vanilla, orange } = cookie;
// const { choco, vanilla, orange } = {
//   choco: '초코맛 쿠키',
//   vanilla: '바닐라맛 쿠키',
//   orange: '오렌지맛 쿠키',
// };

// 객체 구조 분해를 했기 때문에 cookie.을 생략하고 사용 가능
console.log(choco); // 초코맛 쿠키
console.log(vanilla); // 바닐라맛 쿠키
console.log(orange); // 오렌지맛 쿠키

// 2. 배열([])을 구조분해
