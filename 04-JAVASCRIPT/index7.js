// 반복문

// for문
for (let i = 0; i < 10; i++) {
  // i가 0 ~ 9 총 10번 반복
  console.log('안녕', i);
}
console.log('--------');

// i += 2 // i = i + 2
for (let i = 0; i < 10; i += 2) {
  // i가 0 ~ 9 총 10번 반복
  console.log('안녕', i);
}
console.log('--------');

// 1 ~ 5 출력
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
console.log('--------');

// 5 ~ 1 출력
for (let i = 5; i >= 1; i--) {
  console.log(i);
}
console.log('--------');

// 1부터 n까지의 합 구하기
let n = 10; // 어떤 숫자까지 합을 구할지에 대한 n
let sum = 0; // 합을 저장할 변수
for (let i = 1; i <= n; i++) {
  // sum 변수에 값을 재할당 (이전 sum 변수의 값 + 현재 반복변수 i 값)
  sum = sum + i;
  //   console.log(i, sum);
}
console.log(sum);
console.log('--------');

for (let a = 2; a <= 9; a++) {
  for (let b = 1; b <= 9; b++) {}
}

console.log(a + 'X' + b + '='(i * j));
