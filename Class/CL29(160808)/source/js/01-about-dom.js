// DOM
// [선택]
// id: document.getElementById
// tag: document.getElementsByTagName

// [탐색]
// 부모노드: element.parentNode
// 첫번째 자식노드: element.firstChild
// 첫번째 자식요소노드: element.firstElementChild
// 마지막 자식노드: element.lastChild
// 이전 형제노드: element.previousSibling
// 다음 형제노드: element.nextSibling
// 자식 노드들: elemnet.childNodes

var parent = document.getElementById("parent");
// var parent_children = parent.childNodes;

// for(let i=0; i<parent_children.length; i++)
// 	if(parent_children[i].nodeType === 1)
// 		console.log("%c current node is ELEMENT_NODE", "background: #222; color: #bada55;");
// 	else
// 		console.log("current node is TEXT_NODE");

// var first_child = parent.firstChild.nextSibling;

// for(let i=0; i<first_child.children.length; i++)
// 	console.log(first_child.children[i]);

// 노드(node)의 유형/이름/값을 출력하는 방법
// 1. nodeType
//		ELEMENT_NODE = 1
//		TEXT_NODE = 3
//		COMMENT_NODE = 8
// 2. nodeName
//		ELEMENT_NODE는 요소 이름을 대문자로 반환
//		TEXT_NODE는 "#text"로 반환
// 3. nodeValue
//		TEXT_NODE의 경우만 접근이 가능
//		ELEMENT_NODE의 경우는 null 반환

// HTML DOM 방식의 속성 접근 방법
// 웹의 초창기 떄부터 존재하던 속성들
// id, className, title, ...
// element.id, element.className, element.title, ...
// 새롭게 등장한 속성들
// data-*, aria-*, role, ...
// element.getAttribute("data-*"), element.getAttribute("aria-*"), element.getAttribute("role"), ...
// console.log("asdf:" + parent.getAttribute("data-container"));
// console.log("asdf:" + parent.getAttribute("aria-labelledby"));
// console.log("asdf:" + parent.getAttribute("role"));

// for(let i=0; i<parent.children.length; i++)
// 	for(let j=0; j<parent.children[i].children.length; j++)
// 		parent.children[i].children[j].innerHTML.replace(" ", "");
// 		if(!parent.children[i].children[j].hasChildNodes())
// 			console.log(i + "번째 자식 노드의 " + j + "번째 자손 노드의 자식이 없음");

// document.links; // HTMLCollection
// var childs = document.getElementsByClassName("child");
// console.log(childs, childs.length);

// css 선택자로 문서 객체를 선택 .querySelector("css 선택자 사용")
// 적극 사용 jquery보다 빠름
var first_child = parent.querySelector(".child:first-child");
console.log(first_child);