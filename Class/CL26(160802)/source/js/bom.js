// 자바스크립트 변수는 변수 이름 앞에 var 키워드를 붙인다

// device_pixel_density;
// var dp = window.devicePixelRatio

// console 패널에 log를 남긴다
// console.log("devicePixelRatio:", dp);

// if(dp>1) {
// 	console.log("고해상도 디스플레이의 픽셀 비율을 가집니다.")
// } else {
// 	console.log("일반 디스플레이의 픽셀 비율을 가집니다.")
// }

// var window_w = window.innerWidth;
// var window_h = window.innerHeight;

// console.log("window_w: " + window_w);
// console.log("window_h: " + window_h);

// scrollX와 pageXoffset은 같은 값 (브라우저 마다 쓰는 속성이 다름)
// console.log("window_scrollX: " + window.scrollX);
// console.log("window_pageXOffset: " + window.pageXOffset);
// console.log("window_scrollY: " + window.scrollY);
// console.log("window_pageYOffset: " + window.pageYOffset);

// 이미 객체의 속성이 정해진 값을 사용자가 덮어쓰게 된다면, 덮어쓴 값이 출력된다. (하지 말것)

// 변수 선언시 값을 할당하지 않으면 undefined 값으로 설정
// var scroll_y;
// window 객체의 속성 중에 scrollTop이 있는지 확인
// 크로스 브라우징 용
// if(window.scrollTop) {
// 	scroll_y = window.scrollTop;
// } else {
// 	scroll_y = window.scrollY;
// }

// window.alert("this is javascript. alert message.");

// 객체의 메소드 : 객체가 소유하고 있는 함수
// window.alert("경고 다이얼로그 창");
// var is = window.confirm("true or false");
// if(window.confirm("true or false"))
// 	console.log("얍");
// else
// 	console.log("엽");

// console.log(window.prompt("혼파망"));

// window.scrollTo(x, y) 절대값
// window.scrollBy(x, y) 상대값

// window.setInterval(함수, 시간(밀리초)) 주기마다 반복
// window.setTimeout(함수, 시간(밀리초)) 1회

var count = 10;

function countDown() {
	console.log(count);
	count--;
}

// countDown 함수 연결
// countDown() 함수 실행 - 값을 리턴함
// window.setInterval(countDown, 1000);
// interval에 변수를 할당하고 clearInterval로 멈춘다