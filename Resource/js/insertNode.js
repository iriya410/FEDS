// parent_node의 맨 앞에 insert_node 삽입
function fPrependChild(parent_node, insert_node) {
	parent_node.insertBefore(insert_node, parent_node.firstElementChild);
}

// target_node 바로 다음에 insert_node 삽입
function fInsertAfter(target_node, insert_node) {
	let next_node = target_node.nextSibling;
	let parent_node = target_node.parentNode;
	if( next_node ) {
		parent_node.insertBefore(insert_node, next_node);
	} else {
		parent_node.appendChild(insert_node);
	}
}