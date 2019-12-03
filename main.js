/* main.js */
var param = location.search;
code = param.slice(1);
result = eval(code);

var field = document.getElementById("field");
field.innerHTML = "<h1>" + filed + "</h1>";
alert(result);
