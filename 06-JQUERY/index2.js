// val() - value

function getValue() {
  // js
  //   const inputVal = document.querySelector('input').value;
  //   alert(inputVal);

  // jquery
  const value = $('input').val();
  alert(value);
}

function setValue() {
  // js
  //   document.querySelector('input').value = 'Hello~~';

  // jquery
  $('input').val('Hi~');
}

// css()
function changeCssJS() {
  const span = document.querySelector('span');
  span.style = 'font-size: 20px; color: red';
} // js -> 안녕11 만 변경 -> 모두 변경하려면 All + 반복문 설정 필요

function changeCssJquery() {
  // case 1
  //   $('span').css('font-size', '40px');
  //   $('span').css('color', 'blue');

  // case 2. css 여러 속성 한번에 적용
  $('span').css({
    fontSize: '40px', // 모든 span에 대해 크기 변경
    color: 'blue', // 모든 span에 대해 폰트 색상 변경
  });
} // jquery -> 안녕11, 안녕22 모두 변경

function getCssJquery() {
  console.log(document.querySelector('span').style.color); // js
  console.log($('span').css('color')); // jquery
}

// attr()
function changeAttrJS() {
  // 퀴즈: a 태그를 선택하고, href 속성 값을 naver 주소로 변경
  const link = document.querySelector('a');
  link.href = 'https://www.naver.com';
}
function changeAttrJquery() {
  $('a').attr('href', 'https://daum.net');
}

// text()
function changeTextJS() {
  // 퀴즈: p-text 클래스를 갖는 요소 선택하고, 요소의 텍스트를 임의의 값으로 변경
  const text = document.querySelector('.p-text');
  text.innerText = 'bye bye';
  // text.textContent = '' // text.innerHTML = ''
}
function changeTextJquery() {
  $('.p-text').text('jquery~~~~~');
}

// html()
function changeHtmlJS() {
  // 퀴즈: p-html 클래스 갖는 요소 선택하고, <h3>javascript</h3>로 변경
  const html = document.querySelector('.p-html');
  html.innerHTML = '<h3>javascript</h3>';
}
function changeHtmlJquery() {
  $('.p-html').html('<h3>jquery</h3>');
}

// 요소 추가하기
// append()
function appendJS() {
  // 1. color 클래스 갖는 요소 선택하고
  const colors = document.querySelector('.colors');
  // 2. li 태그 요소를 생성한 후
  const li = document.createElement('li');
  // 3. li 태그의 텍스트로 '마지막 자식으로 추가된 js' 추가
  li.innerText = '마지막 자식으로 추가된 js';
  // 4. color 클래스를 갖는 요소에 "맨 마지막 자식"으로 li 요소 추가
  colors.append(li);
}

function appendJquery() {
  $('.colors').append('<li>마지막 자식으로 추가된 jquery</li>');
}

// prepend()
function prependJS() {
  // 1. color 클래스 갖는 요소 선택하고
  // 2. li 태그 요소를 생성한 후
  // 3. li 태그의 텍스트로 '첫 자식으로 추가된 js' 추가
  // 4. color 클래스를 갖는 요소에 "가장 첫 자식"으로 li 요소 추가
  const colors = document.querySelector('.colors');
  const li = document.createElement('li');
  li.innerText = '첫 자식으로 추가된 js';

  colors.prepend(li);
}

function prependJquery() {
  $('.colors').prepend('<li>첫 자식으로 추가된 jquery</li>');
}

// before()
function beforeJS() {
  // 1. green 클래스를 갖는 요소 선택하고
  // 2. li 태그 요소를 생성한 후
  // 3. li 태그의 텍스트로 'green 클래스를 갖는 요소의 이전 형제 요소로 추가(js)' 추가
  // 4. green 클래스를 갖는 요소의 "바로 이전 형제 요소"로 li 요소 추가
  // 힌트: https://developer.mozilla.org/en-US/docs/Web/API/Element/before
  const green = document.querySelector('.green');
  const p = document.createElement('li');
  p.innerText = '바로 이전 형제 요소 js';
  green.before(p);
}

function beforeJquery() {
  $('.green').before('<li>바로 이전 형제 요소 jquery</li>');
}

// after()
function afterJS() {
  // 1. green 클래스를 갖는 요소 선택하고
  // 2. li 태그 요소를 생성한 후
  // 3. li 태그의 텍스트로 'green 클래스를 갖는 요소의 다음 형제 요소로 추가(js)' 추가
  // 4. green 클래스를 갖는 요소의 "바로 다음 형제 요소"로 li 요소 추가
  // 힌트: https://developer.mozilla.org/en-US/docs/Web/API/Element/after
  const green = document.querySelector('.green');
  const p = document.createElement('li');
  p.innerText = '바로 다음 형제 요소 js';
  green.after(p);
}

function afterJquery() {
  $('.green').after('<li>바로 다음 형제 요소 jquery</li>');
}

function removeJS() {
  const li2 = document.querySelector('#li2');
  li2.remove();
}

function removeJquery() {
  $('#li2').remove();
}

function emptyJS() {
  const nums = document.querySelector('ul.nums');
  nums.innerHTML = '';
}

function emptyJS() {
  $('.nums').empty('');
}

// 요소 탐색하기
function findParent() {
  // child2 클래스 갖는 요소의 부모 요소
  console.log(document.querySelector('.child2').parentElement);
  console.log($('.child2').parent());
}

function findParents() {
  // JS 없습니다! 패스~~
  console.log($('.child2').parents());
}

function findNext() {
  // child2 클래스 갖는 요소의 다음 형제 요소
  console.log(document.querySelector('.child2').nextElementSibling);
  console.log($('.child2').next());
}

function findPrev() {
  // child2 클래스 갖는 요소의 이전 형제 요소
  console.log(document.querySelector('.child2').previousElementSibling);
  console.log($('.child2').prev());
}

function findChildren() {
  // parent 클래스 갖는 요소의 자식 요소
  console.log(document.querySelector('.parent').children);
  console.log($('.parent').children());
}

// 클래스 조작하기
function addClass() {
  // hi 아이디 갖는 요소 선택하여 "fs-50" 클래스 추가
  //   document.getElementById('hi').classList.add('fs-50');
  $('hi').addClass('fs-50');
}

function removeClass() {
  // hi 아이디 갖는 요소 선택하여 "fs-50" 클래스 삭제
  //   document.getElementById('hi').classList.remove('fs-50');
  $('hi').removeClass('fs-50');
}

function hasClass() {
  // hi 아이디 갖는 요소 선택하여 "fs-50" 클래스 포함 여부 확인
  //   document.getElementById('hi').classList.contains('fs-50');
  console.log($('hi').hasClass('fs-50'));
}

function toggleClass() {
  // hi 아이디 갖는 요소 선택하여 "bg-link" 클래스 토글 (있으면 삭제, 없으면 추가)
  //   document.getElementById('hi').classList.toggle('bg-pink');
  $('hi').toggleClass('bg-pink');
}
