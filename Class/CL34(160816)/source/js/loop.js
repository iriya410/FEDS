// JavaScript Loop Statement
var fruits = ["바나나", true, "딸기", false, "포도", null, "수박"];

for(var i=0; i<fruits.length; i++) {
	if(!f_validateType(fruits[i], "string")) {
		fruits.splice(i, 1);
	}
}
