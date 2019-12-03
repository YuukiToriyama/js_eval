/* main.js */

// アドレスの末尾にbase64コードが付けられた時、それをデコードして実行する
var code = location.search.slice(1);
try {
	var result = eval(base64Decode(code));
	alert(result);
	document.getElementById("result").value = result;
} catch(error) {
	console.log(error);
	document.getElementById("errors").value = error;

}
/*
if (result != undefined) {
	alert(result);
	document.getElementById("decode_btn").value = result;
}
*/

// textareaでtabを入力できるようにするコード
document.getElementById("source").addEventListener("keydown", function(e) {
	var elm, end, start, value;
	if (e.keyCode === 9) {
		if (e.preventDefault) {
			e.preventDefault();
		}
		elm = e.target;
		start = elm.selectionStart;
		end = elm.selectionEnd;
		value = elm.value;
		elm.value = "" + (value.substring(0, start)) + "\t" + (value.substring(end));
		elm.selectionStart = elm.selectionEnd = start + 1;
		return false;
	}
})

// 各ボタンを押すと処理が実行される
var encodeButton = document.getElementById("encode_btn");
encodeButton.addEventListener("click", function() {document.textConverter.output.value = base64Encode(document.textConverter.source.value)});
var decodeButton = document.getElementById("decode_btn");
decodeButton.addEventListener("click", function() {document.textConverter.output.value = base64Decode(document.textConverter.source.value)});

// base64とユニコード文字列の相互変換
function base64Encode(input) {
	return btoa(unescape(encodeURIComponent(input.replace(/\r?\n/g, ""))));
}
function base64Decode(input) {
	try {
		return decodeURIComponent(escape(atob(input)));
	} catch(error) {
		console.log("入力された文字列に問題があります");
		return "ERROR";
	}
}
