/* main.js */
/*
var code = location.search.slice(1)
result = eval(atob(code));

var field = document.getElementById("field");
field.innerHTML = "<h1>" + result + "</h1>";
alert(result);
*/

var button = document.getElementById("btn");
button.addEventListener("click", function() {
	var encodedStr = base64Encode(document.form1.textarea1.value);
	//alert(encodedStr);
	document.form1.textarea2.value = encodedStr;
});

function base64Encode(input) {
	return btoa(input.replace(/\r?\n/g, ""))
}
