// DOM API를 사용하여 문서 객체를 동적으로 생성한다.
// <div>this is division.</div>
var maked_division = document.createElement("div");
var maked_division_text = document.createTextNode("this is division.");

// <ul><li>list item</li></ul>
var maked_unordered_list = document.createElement("ul");
var maked_unordered_list_item = document.createElement("li");
var maked_unordered_list_item_text = document.createTextNode("list item");

// DOM API를 사용하여 문서 객체를 동적으로 조작한다.
// 부모노드.appendChild(자식노드)
maked_division.appendChild(maked_division_text);

document.querySelector("#parent").appendChild(maked_unordered_list);
maked_unordered_list.appendChild(maked_unordered_list_item);
maked_unordered_list_item.appendChild(maked_unordered_list_item_text);

var div_node = "<div>this is division.</div>";
document.querySelector("#parent").innerHTML += div_node;

var target_contianer = document.createElement("div");
// document.body.appendChild(target_contianer);
target_contianer.appendChild(maked_unordered_list);

var target = document.body.firstChild;

function prependChild(target, container) {
	target.parentNode.insertBefore(container, target);
}

prependChild(target, target_contianer);