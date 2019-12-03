/* main.js */
var code = location.search.slice(1)
result = eval(atob(code));

var field = document.getElementById("field");
field.innerHTML = "<h1>" + result + "</h1>";
alert(result);


var button = document.getElementById("btn");
button.addEventListener("click", function(){alert(document.form1.textbox1.value)});
