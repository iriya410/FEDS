var div = document.createElement("div");
div.setAttribute("class", "modal");

var h2 = document.createElement("h2");
h2.setAttribute("class", "modal-title");
h2.innerText = "Modal Window";
div.appendChild(h2);

var p = document.createElement("p");
p.setAttribute("class", "modal-desc");
p.innerText = "Modal Window Content....";
div.appendChild(p);

var button_send = document.createElement("button");
button_send.setAttribute("class", "modal-cta");
button_send.setAttribute("type", "button");
button_send.innerText = "send message";
div.appendChild(button_send);

var button_close = document.createElement("button");
button_close.setAttribute("class", "modal-close");
button_close.setAttribute("type", "button");
button_close.setAttribute("aria-label", "close modal window");
button_close.innerText = "x";
div.appendChild(button_close);

var script = fQuerySelector("script");
var last_script = script[script.length-1];
// script.parentNode.insertBefore1(div, script);

// <body> 요소 맨 앞에 삽입(추가)
// 방법 1. 표준 DOM API 방법인 insertBefore() 메소드를 활용
// target_node.parentNode.insertBefore(insert_node, target_node)

// 방법 2. 사용자 정의(Custom) 정의 함수 prependChild()를 활용
// fInsertAfter(last_script, div);

// .innerHTML 현재 선택된 ELEMENT 안의 HTML코드를 리턴
// .outerHTML 현재 선태된 ELEMENT를 포함한 HTML코드를 리턴

// n번째 사람을 탈출시킴
// var prisoner = document.querySelectorAll(".prisoners")[n];
// var tunnel = document.querySelector(".tunnel");
// tunnel.innerHTML += prisoner.outerHTML;
// prisoner.outerHTML = "";

// throw new error - 에러가 발생시 코드 중단
// console.error - 에러가 발생해도 코드 진행

// 함수명을 변수로 받아 호출하는 방법
// 선언 : var 함수명변수 = "함수명";
// 호출 : window[함수명변수](인자);

var btn_show = fQuerySelect("button");
btn_show.onclick = function() {
	fInsertAfter(last_script, div);
	btn_show.setAttribute("disabled", "true");
	
	var modal = fQuerySelect(".modal");
	var btn_x = fQuerySelector(".modal-close");
	btn_x.onclick = function() {
		fRemoveChild(modal);
		btn_show.removeAttribute("disabled");
	};
};