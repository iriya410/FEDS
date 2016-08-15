var btns = fQuerySelector("button");
var img = fQuerySelect("img");

function changeImage(source) {
	let split = source.split('"');
	img.setAttribute("src", split[1]);
}

for(let i=0; i<btns.length; i++) {
	btns[i].onclick = function() {
		changeImage(getComputedStyle(this).backgroundImage);
	}
	btns[i].onkeydown = function() {
		if(event.keyCode === 13) {
			changeImage(getComputedStyle(this).backgroundImage);
		}
	}
}