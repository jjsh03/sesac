// only typescript type

// Tuple
let drink: [string, string] = ['사이다', '롯데'];
drink[0] = 'cider';
drink[1] = 'lotte';

// drink.push('얏호'); // tuple 한계: 요소의 길이를 고정하기 때문에 push를 쓰면 tuple을 쓰는 이유가 없음
console.log(drink);

let drink2: readonly [string, number] = ['사이다', 2200];
// drink2.push('얏호'); // error

// Tuple ex
type productInfo = [number, string, number]; // type 별칭 Type 선언
let product1: productInfo = [1, '로지텍 MX master3', 130000];
let product2: productInfo = [2, '로지텍 K380', 52000];
// let product3: productInfo = [2, '로지텍 K380', 'apple']; // type error

// Enum
enum Auth {
  admin = 0,
  user = 1,
  guest = 2,
}

enum Cafe {
  americano = '아메리카노',
  latte = '카페라떼',
}

console.log(Auth.admin);
console.log(Cafe.latte);

enum Cake {
  choco,
  vanilla,
  kiwi = '키위 케이크',
}

console.log(Cake.choco); // 0
console.log(Cake.kiwi); // 키위 케이크

///////////////////////////////////////////////////////////
// any
// 명시적으로
let val: any;
val = true;
val = '하이';
val = 10000;
val = { name: 'sesac' };

// 암묵적으로
let val2;
val2 = false;
val2 = '바이';

// 실습
let olimpic_newgame: readonly [object, boolean] = [
  {
    name: '쇼트트랙',
    type: '혼성 계주',
  },
  true,
];