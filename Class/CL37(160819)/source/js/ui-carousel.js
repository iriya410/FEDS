(function(global){
	'use strict';

	global.html = document.querySelector("html");
	
	if(html.classList) {
		html.classList.remove("no-js");
		html.classList.add("js");
	} else {
		html.setAttribute("class", html.getAttribute("class").replace(/no-js/, "js"));
	}

})(this);

(function(global){
	'use strict';

	function init(selector) {
		var carousel = document.querySelector(selector);
		carousel.origin_class =  carousel.getAttribute("class") || "";
		carousel.setAttribute("class", (carousel.origin_class + " ui-carousel").trim());
		carousel.setAttribute("role", "application");
		carousel.setAttribute("aria-label", "Demonstration UI Carousel Component");

		var carousel_contents_wrapper = document.createElement('div');
		carousel_contents_wrapper.setAttribute("class", "ui-carousel--content__wrapper");
		carousel_contents_wrapper.setAttribute("role", "group");
		
		var carousel_contents = Array.from(carousel.querySelectorAll(selector + "> *"));
		carousel_contents.forEach(function(content, index) {
			content.setAttribute("class", "ui-carousel--content");
			content.style.order = (index + 1) % carousel_contents.length;

			var headline = content.querySelector("h2");
			headline.setAttribute("class", "ui-carousel--content__headline");

			carousel_contents_wrapper.appendChild(content);
		});

		var button_group = document.createElement("div");
		button_group.setAttribute("class", "ui-carousel--navigation__buttons");
		button_group.setAttribute("role", "group");

		var prev_button = document.createElement("button");
		prev_button.setAttribute("type", "button");
		var next_button = prev_button.cloneNode();

		prev_button.setAttribute("class", "ui-carousel--navigation__prev_button");
		prev_button.setAttribute("aria-label", "previous content");
		prev_button.innerHTML = '<span class="fa fa-angle-up" aria-hidden="true"></span>';
		next_button.setAttribute("class", "ui-carousel--navigation__next_button");
		next_button.setAttribute("aria-label", "next content");
		next_button.innerHTML = '<span class="fa fa-angle-down" aria-hidden="true"></span>';

		button_group.appendChild(prev_button);
		button_group.appendChild(next_button);

		carousel.innerHTML = "";
		carousel.appendChild(carousel_contents_wrapper);
		carousel.appendChild(button_group);

		bindEvent();
	}

	function bindEvent() {
		var buttons = Array.from(document.querySelectorAll(".ui-carousel--navigation__buttons button"));

		for(var button of buttons) {
			button.onclick = movingCarouselContent;
		}

		function movingCarouselContent() {
			var check_class = this.getAttribute('class');
			var contents = this.parentNode.previousElementSibling.children;

			if(/prev/.test(check_class)) {
				reset_order(1);
			} else {
				reset_order(contents.length - 1);
			}

			function reset_order(orderNumber) {
				for(var i=0; i<contents.length; i++) {
					contents[i].style.order = (getComputedStyle(contents[i]).order * 1 + orderNumber) % contents.length;
				}
			}
		}
	}

	init(".main-ad-area");
})(this);