// 조건 문

// if 문
if (5 > 3) {
  console.log('얍!');
}

// // let number = Number(prompt('숫자를 입력해주세요!'));
// // 1. prompt()로 사용자로부터 값을 입력받고(문자열)
// // 2. Number() 문자열 -> 숫자열 형변환

// // if (number > 10) {
// //   console.log('입력한 수는 10보다 크군요!');
// // } else {
// //   console.log('입력한 수는 10보다 작거나 같네요!');
// // }

// // if (number > 10) {
// //   console.log('입력한 수는 10보다 크군요!');
// // } else if (number === 10) {
// //   console.log('입력한 수는 10이네요!');
// // } else {
// //   console.log('입력한 수는 10보다 작네요!');
// // }

// // if (number > 100 || number < 0) {
// //   console.log('입력값이 잘못되었습니다. 숫자의 범위는 0~100');
// // } else if (number >= 90) {
// //   console.log('A');
// // } else if (number >= 80) {
// //   console.log('B');
// // } else if (number >= 70) {
// //   console.log('C');
// // } else if (number >= 60) {
// //   console.log('D');
// // } else {
// //   console.log('F');
// // }

// // practice
// // let age = Number(prompt('연령을 입력하세요!'));
// // if (age >= 20) {
// //   console.log('성인');
// // } else if (age >= 17) {
// //   console.log('고등학생');
// // } else if (age >= 14) {
// //   console.log('중학생');
// // } else if (age >= 8) {
// //   console.log('초등학생');
// // } else if (age >= 0) {
// //   console.log('유아');
// // }

// // 중첩 if 문
// let userId = 'user01';
// let userPw = '1234';

// // id, pw 검사하는 함수
// function loginUser() {
//   let inputId = prompt('아이디 입력');
//   let inputPw = prompt('비밀번호 입력');

//   // - userID와 inputID가 같다면
//   //     - userPw와 inputPw를 비교
//   // - inputId에 빈값 입력됐다면
//   //     - '아이디 입력 안함' 문구 반환
//   // - 두경우가 아니라면 (inputId가 틀렸을 때)
//   //     - '아이디 틀림' 문구 반환

//   if (userId === inputId) {
//     if (userPw === inputPw) {
//       return '로그인 성공';
//     } else {
//       return '비번 오류! 로그인 실패';
//     }
//   } else if (inputId === '') {
//     return '아이디 입력 안함';
//   } else {
//     return '아이디 오류! 로그인 실패';
//   }
// }
// const result = loginUser();
// // -> loginUser 함수의 리턴값(반환값)을 result 변수에 저장
// console.log(result);

// swich 문
// - 하나 이상의 case 문으로 구성
// - default 필수는 아니지만, 쓰길 권장
// - 여러 개의 case를 묶을 수도 있다
// break: 조건을 빠져나갈 때 사용하는 키워드
let a = 3;
switch (a) {
  case 1:
  case 2:
  case 3: // if (a === 3)
    console.log('a가 3 이하입니다');
    break;
  case 4:
    console.log('a가 4입니다');
    break;
  case 5:
    console.log('a가 5입니다');
    break;
  default:
    console.log('a가 무슨 값인지 모르겠습니다.');
    break;
}

// 퀴즈. 학점 계산기
// 조건. 0~100 이외 숫자는 들어오지 않는다고 가정
// 힌트. number / 10, parseInt()
let score = 100; // 결과는 'A' 가 나와야겠죠?
console.log(parseInt(score / 10)); // 점수의 앞자리 수를 알 수 있겠죠?
switch (parseInt(score / 10)) {
  case 10:
    console.log('A+');
    break;
  case 9:
    console.log('A');
    break;
  case 8:
    console.log('B');
    break;
  case 7:
    console.log('C');
    break;
  case 6:
    console.log('D');
    break;
  default:
    console.log('F');
    break;
}

// 삼항 연산자
let num = 5;
if (num % 2 === 1) {
  console.log('홀수');
} else {
  console.log('짝수');
}

num % 2 === 1 ? console.log('홀수') : console.log('짝수');

let now = new Date().getHours();
now >= 12 ? console.log('오후') : console.log('오전');
