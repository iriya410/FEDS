//////////////////////////////////////////////////
// 자바스크립트 반복문
// 1.1. while
// 1.2. do ~ while
// 2.1. for
// 2.2. for ~ in [Object]
// 2.3. forEach  [Array]
// 2.4. for ~ of [Array]

// DEMO
// forEach
var movielist = [];
movielist.push("터널");
movielist.push("덕혜옹주");
movielist.push("부산행");
movielist.push("서울역");

// console.log(movielist);

// for
// for(var i=0; i<movielist.length; i++) {
// 	console.log(movielist[i]);
// }

// for ~ in
// for(var i in movielist) {
// 	if(movielist.hasOwnProperty(i)) {
// 		console.log(movielist[i]);
// 	}
// }

// for ~ of
// for(var i of movielist) {
// 	console.log(movielist[i]);
// }

// forEach
// 반환값이 없다
// movielist.forEach(function(item, index, array) {
// 	console.log(item);
// 	console.log(index);
// 	console.log(array);
// });

// map
// 값을 가공하여 수정된 배열을 반환
// movielist = movielist.map(function(item, index, array) {
// 	return index + ":" + item;
// });

//////////////////////////////////////////////////
// 함수의 특징
// 상위 영역(Scope)와 구분되는 별도의 독립적이 영역을 생성한다.
// 함수 내부에 "var" 키워드, "function" 키워드로 정의된 데이터 값은 외부 영역에서 접근이 불가능하다.
// 함수 내부는 독립된 공간이기에 내부에 "var" 키워드, "function" 키워드로 정의된 데이터는 호이트스 된다.

// 호이스트
// "function" 으로 정의된 함수는 몸체가 전부 호이스팅된다.
// "var" 키워드로 정의된 변수는 변수 선언부만 호이스팅될뿐 값을 할당하지는 않는다.

// DEMO
// 선언식
// function scopeFn() {...}

// 표현식
// var scopeFnExpression = function() {
// 	let movielist = "let movie";
// 	if(movielist) {
// 		movielist = "movielist";
// 		console.log("if 내부", movielist)
// 	}
// 	console.log("함수 내부", movielist);
// }
// scopeFnExpression();

// function showMe() {
// 	return this;
// }
// var fds = {
// 	callMe: showMe
// };
// fds.callMe() === fds;

// 엄격 모드가 아닌, 자바스크립트에서는 전역에서 함수를 호출할 경우, 그 함수의 컨텍스트를 암묵적으로 전역 객체인 window를 가리켰다.(문제 발생)
// 반면 엄격모드에서 명시적으로 특정 객체가 함수를 호출하게되면 this 컨텍스트 참조 변수는 해당 객체를 참조한다.

// var fn = function(cb) {
// 	if(typeof cb === "function")
// 		window.setTimeout(cb, 2000);
// }

// var demo_box = document.querySelector(".demo-box");
// function movingBox(element, position) {
// 	position = position || {"x": 0, "y": 0};
// 	element.style.left = position.x-40 + "px";
// 	element.style.top = position.y-40 + "px";
// }
// document.body.onclick = function(event) {
// 	movingBox(demo_box, {"x": event.clientX, "y": event.clientY });
// };

// 자바스크립트 클로저 함수란
// 자바스크립트 함수는 일급 객체의 요건을 모두 충족한다.
// 인자로서 전달도 가능하며, 값으로서 반환 또한 가능하다.
// 함수가 실행되어 내부에 존재하는 함수를 외부로 반환할 경우 클로저가 생성되며, 반환된 함수는 클로저 영역을 참조할 수 있다.
// 이 때 반환된 함수를 클로저 함수라 명한다.

function countDown(number) {
	var _countDown = function() { console.log(number--); }
	return _countDown;
}

var demo_nav = document.querySelector(".demo-navigation");
var demo_nav_links = demo_nav.querySelectorAll("a");

function showIndex(index) {
	return function _showIndex() { console.log(index) };
}

for(var i=0; i<demo_nav_links.length; i++) {
	demo_nav_links[i].onclick = showIndex(i);
}

// 비용을 절감하는 형태로 클로저 함수를 만드는 방법
// IIFE패턴 (즉시 실행되는 함수)
// 일반적인 함수의 호출과정과 달리 이름이 없는 함수를 
var countDown = (function(number){
	var _num = number;
	return function() {
			return _num--;
		}
}(10));

(function($){
	var testDate = 10;
	console.log($.f_isType(testDate));
}(this.as));