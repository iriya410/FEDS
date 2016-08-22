// JavaScript 함수를 작성하는 3가지 방법
// 0. 사용하지 말아야 할 방법
var fn0 = new Function("console.log('사용하지 말자');");
fn0();

// 1. 함수 선언문
function fn1() {
	console.log("선언된 함수 실행");
}
fn1();

// 2. 함수 표현식
var fn2 = function() {
	console.log("표현식(함수 리터럴)이 참조된 변수를 통해 함수 실행");
};
fn2();
