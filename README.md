# CSS
scroll-behavior: smooth; 를 쓰면 링크를 클릭했을때 스크롤 화면이 스무스하게 이동한다.

scroll-behavior: auto; 를 쓰면 화면이 순간이동함.

text-indent : 0
text-indent는 들여쓰기와 내어쓰기를 설정한다.
0이면 기본값이고 값이 양수이면 들여쓰기 음수이면 내어쓰기가 된다.
내어 쓰기를 할 때는 왼쪽에 여백을 적절히 줘야된다.

## 스크롤 애니메이션
scrollreveal 사용
ex) 
const martScroll = ScrollReveal({
  origin: 'bottom',
  distance: '80px',
  duration: 2000,
  reset: true
})

// scroll Home
martScroll.reveal('.home__data--title', {})
martScroll.reveal('.home__data--desc', {})

### 자바스크립트
getBoundingClientRect
화면으로부터 DOM 엘리먼트의 위치 구하기

ex)
const ele = document.querySelector('#test');
const imgRect = ele.getBoundingClientRect();

imgRect를 출력해보면 
{
  bottom: 178   // 화면 상단 부터 대상의 끝 위치 값
  left: 212.5   // 화면 좌측 부터 대상의 처음 위치 값
  right: 1092.5 // 화면 좌측 부터 대상의 끝 위치 값
  top: 134      // 화면 상단 부터 대상의 처음 위치 값
  width: 880    // 대상의 너비
  height: 44    // 대상의 높이
  x: 212.5
  y: 134
}
값들이 나온다. => 시작 기준점은 화면의 좌측, 위

그래서 getBoundingClientRect().top 이런식으로 값들을 사용하면 된다.