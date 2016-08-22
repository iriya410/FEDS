// (function(global){
// 	'use strict';

// 	var today = new Date().getDay();
// 	switch(today) {
// 		case 0:
// 		case 6:
// 			console.log("주말");
// 				break;
// 		default:
// 			console.log("주중");
// 	}

// 	// function _checkDay(day) {
// 	// 	(day === 0 || day === 6) ? console.log("주말") : console.log("주중");
// 	// }
// 	// global.checkDay = _checkDay;

// })(this);

// (function(global){
// 	'use strict';
	
// 	var button_set = document.querySelector(".button-set");
// 	var buttons = button_set.querySelectorAll(".button");

// 	var buttons = Array.from(buttons);

// 	for(var i=0; i<button_array.length; i++) {
// 		button_array[i].onclick = (function(index){
// 			return function(){console.log(index);};
// 		})(i);
// 	}

// 	// buttons.forEach(function(button, index, buttons){
// 	// 	button.onclick = function() {
// 	// 		console.log(index);
// 	// 	};
// 	// });

// })(this);

// (function(global){
// 	var rtn_fn;
// 	if(Array.from) {
// 		rtn_fn = function(data) {
// 					return Array.from(data);
// 				};
// 	} else {
// 		rtn_fn = function(data) {
// 					return Array.prototype.slice.call(data);
// 				};
// 	}

// 	global.convertArray = rtn_fn;
// })(this);

// (function(global){
// 	'use strict';

// 	global.boo1 = (new Boolean(true)).valueOf();
// 	global.boo2 = (new Boolean(false)).valueOf();
// 	global.boo3 = (new Boolean(true)).valueOf();
// 	global.boo4 = (new Boolean(false)).valueOf();
// 	global.boo5 = (new Boolean(true)).valueOf();
// 	global.boo6 = (new Boolean(false)).valueOf();
// 	global.boo7 = (new Boolean(true)).valueOf();
// 	global.boo8 = (new Boolean(false)).valueOf();
// 	global.boo9 = (new Boolean(true)).valueOf();
// 	global.boo10 = (new Boolean(false)).valueOf();

// })(this);