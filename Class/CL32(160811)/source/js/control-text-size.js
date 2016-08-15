var page_header = fQuerySelect(".page_header");
var btn_increase = fQuerySelect(".btn_increase_text");
var btn_decrease = fQuerySelect(".btn_decrease_text");

var change_text = 4;

var limit_up = 40;
var limit_down = 12;

function changeTextSize() {
	let current_size = parseInt(getComputedStyle(page_header).fontSize);
	let change_size = current_size + (this.innerText === "+" ? change_text : change_text * -1);
	
	if(change_size > limit_up || change_size < limit_down) {
		return;
	}

	page_header.style.fontSize = change_size + "px";
};

btn_increase.onclick = changeTextSize;
btn_decrease.onclick = changeTextSize;