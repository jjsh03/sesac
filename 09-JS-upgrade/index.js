// 구조 분해 할당
// 1. 배열 구조 분해 할당
// - 배열 구조 분해 할당시 "순서" 중요(변수 이름 중요하지 않음)
const arr1 = [1, 2, 3, 4, 5];
const arr2 = ['a', 'b', 'c'];

const [one, two, three, four, five] = arr1;
console.log(one, two, three, four, five);
const [x, y, z, alpha] = arr2;
console.log(x, y, z, alpha); // alpha자리는 undefined

let num1 = 1;
let num2 = 3;
console.log('swap 전 >', num1, num2); // 1,3
[num2, num1] = [num1, num2];
console.log('swap 후 >', num1, num2); // 3,1

const lists = ['apple', 'grape'];
[f1, f2, f3 = 'orange'] = lists;
console.log(f1, f2, f3); // apple grape orange

// 2. 객체 구조 분해 할당
// - 변수를 선언하는 순서는 중요하지 않음
// - "키 값"과 "변수명"이 일치해야함
const obj = {
  title: '엘리멘탈',
  content: '재밌어요',
  num: 5,
};
// 객체 구조 분해 쓰지 않았을 때
console.log(obj.title, obj.content, obj.num, '번 봤어요');

// 객체 구조 분해 쓰고 싶다면
// key 가 존재하지 않을 때를 대비하여 = 연산자를 이용하면 default 값 할당 가능
const { num, title, content, star = 1000 } = obj;
console.log(title, content, num, star);

const { n1, h1, c1 } = obj;
console.log(n1, h1, c1); // undefined undefined undefined

// 콜론(:)을 이용하면 새 변수명으로 바꿔서 저장할 수 있다.
const { title: t2, num: n2, content: c2 } = obj;
console.log(t2, n2, c2);

////////////////////////////////////
// Quiz
function getInfo(lecture) {
  // TODO: 구조 분해 할당을 사용하여 값 추출
  const { name, part, leader } = lecture;
  // TODO: 출력 문장 생성
  const output = `${name} 강의는 ${part} 개발을 공부합니다. 수업의 리더는 ${leader}입니다`;
  return output;
}

const lectureInfo = {
  name: 'SESAC x CODINGOn',
  part: 'WEB',
  leader: 'Sean',
};

const result = getInfo(lectureInfo);
console.log(result); // SESAC x CODINGOn 강의는 WEB 개발을 공부합니다. 수업의 리더는 Sean 입니다.

/////////////////////
// spread(...) 연산자
// 반복 가능한 객체에 대해서 단일 요소로 압축을 해제하는 역할 (== 객체의 값을 펼친다!!)
// spread in array
const a = [1, 2, 3];
const b = [4, 5];
const spread = [...a, ...b];
console.log(spread); // [ 1, 2, 3, 4, 5 ]

// spread in string
const c = [...'HELLO'];
const d = 'HELLO'.split('');
console.log(c); // [ 'H', 'E', 'L', 'L', 'O' ]
console.log(d); // [ 'H', 'E', 'L', 'L', 'O' ]

// spread in object
const chip = {
  base: 'chip',
  company: 'lotte',
};

const potatoChip = {
  ...chip,
  //   base: 'chip',
  //   company: 'lotte',
  flavor: 'potato',
};

const sweetPotatoChip = {
  ...chip,
  //   base: 'chip',
  //   company: 'lotte',
  flavor: 'sweet potato',
};

console.log(chip);
console.log(potatoChip);
console.log(sweetPotatoChip);

// Quiz
const word1 = 'abc';
const word2 = 'xyz';

const words = [...word1, ...word2];
console.log(words);

// rest 파라미터
// 1. 함수에서 rest를 사용할 때
const values = [10, 20, 30, 40, 50];

function get(a, b, ...rest) {
  console.log('a >>', a); // 10
  console.log('b >>', b); // 20
  console.log('rest >>', rest); // [30, 40, 50]: a, b 빼고 나머지
}

get(...values);

// 2. 객체에서 rest를 사용할 때
const icecream = {
  company: 'lotte',
  flavor: 'choco',
  price: '1000',
};

const { flavor, ...rest } = icecream;
console.log(flavor); // choco
console.log(rest); // { company: 'lotte', price: '1000' }

// 3. 배열에서 rest를 사용할 때
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [one1, two1, ...rest2] = number;
console.log(one1); // 1
console.log(two1); // 2
console.log(rest2); // [ 3, 4, 5, 6, 7, 8, 9 ]

/////////////////////////
// 클래스
// : 객체 생성 템플릿 => 객체를 만들기 위해 사용!

// 집이라는 현실 세계의 객체를 만들어보자!
/* 
속성: 
    만들어진 연도(Number)
    집의 이름(String)
    창문 갯수(Number)
메서드:
    2023 - 만들어진 연도 콘솔창에 출력하는 "건물의 나이 메소드"
    창문의 갯수 콘솔창에 출력하는 메소드
*/

class House {
  // 생성자 함수: 클래스를 이용해 객체를 생성할 때 마다 속성을 초기화
  constructor(year, name, window) {
    this.year = year;
    this.name = name;
    this.window = window;
  }

  // 메서드 1: 집의 나이를 출력
  getAge() {
    console.log(`${this.name}은 건축한지 ${2023 - this.year}년 되었어요!`);
  }

  // 메서드 2: 집의 창문 개수 출력
  getWindow() {
    console.log(`${this.name}의 창문은 ${this.window}개 입니다!`);
  }
}

// 클래스(틀)를 이용해 객체를 생산하기
const house1 = new House('1996', 'UN Village', '9');
console.log('house1 >>', house1); // House { year: '1996', name: 'UN Village', window: '9' }
console.log(typeof house1); // object
console.log(house1.year); // 1996
house1.getAge(); // UN Village은 건축한지 27년 되었어요!
house1.getWindow(); // UN Village의 창문은 9개 입니다!

// house2: 2007년에 지어진 "자이" 이름이고, 창문은 10개
const house2 = new House('2007', '자이', '10');
house2.getAge(); // 자이은 건축한지 16년 되었어요!
house2.getWindow(); // 자이의 창문은 10개 입니다!

// 클래스 상속
class Apartment extends House {
  constructor(year, name, window, floor, windowMaker) {
    // super: 부모 객체에서 상속 받아옴 = 상속한 부모 클래스의 생성자를 호출
    super(year, name, window);
    this.floor = floor;
    this.windowMaker = windowMaker;
  }

  getAptInfo() {
    return `${this.year}에 지어진 ${this.name} 아파트의 
        총 층수는 ${this.floor} 이며, 창문의 개수는 ${this.window}이다.`;
  }

  // 오버라이딩(overriding)
  // 부모 클래스에 정의되어 있는 메서드 이름을 동일하게 쓰되, 내용은 다를 때
  getWindow() {
    return `${this.name} 아파트의 ${this.window}개의 창문은 ${this.windowMaker}회사에서 생산되었습니다.`;
  }
}

const apt1 = new Apartment(2022, '래미안', 3, 20, 'KCC');
console.log(apt1);
console.log(apt1.getAptInfo());
console.log(apt1.getWindow());
console.log(apt1.getAge());

// Quiz
// 부모 클래스 Shape
class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

// Shape을 상속받는 직사각형 클래스
class Rectangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }

  getSqrt() {
    return Math.sqrt(this.getArea());
  }
}

const rec = new Rectangle(3, 4);
console.log(rec.getArea());
console.log(rec.getSqrt());

// Shape을 상속받는 삼각형 클래스
class Triangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }

  getArea() {
    return (this.width * this.height) / 2;
  }
}

const tri = new Triangle(3, 4);
console.log(tri.getArea());

// Shape을 상속받는 원 클래스
class Circle extends Shape {
  constructor(width, height, radius) {
    super(width, height);
    this.radius = radius;
  }

  getArea() {
    return Math.PI * this.radius ** 2;
  }
}

const cir = new Circle(2, 2, 5);
console.log(cir.getArea());
