/* main.js */

var code = location.search.slice(1);
result = eval(atob(code));

if (result != undefined) {
	alert(result);
}

/*
var field = document.getElementById("field");
field.innerHTML = "<h1>" + result + "</h1>";
alert(result);
*/

var button = document.getElementById("btn");
button.addEventListener("click", function() {
	var encodedStr = base64Encode(document.form1.js_source.value);
	//alert(encodedStr);
	document.form1.bs64_output.value = encodedStr;
});

function base64Encode(input) {
	return btoa(input.replace(/\r?\n/g, ""))
}
