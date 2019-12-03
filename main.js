/* main.js */

// アドレスの末尾にbase64コードが付けられた時、それをデコードして実行する
var code = location.search.slice(1);
try {
	if (code != "") {
		var result = eval(base64Decode(code));
		alert(result);
	}
	document.getElementById("result").value = result;
} catch(error) {
	console.log(error);
	document.getElementById("errors").value = error;

}

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
encodeButton.addEventListener("click", function() {
	var source = document.textConverter.source.value;
	var fieldErrors = document.getElementById("errors");
	var fieldResult = document.getElementById("result");

	// ボタンを押すと一旦クリアされる
	fieldErrors.value = "";
	fieldResult.value = "";
	document.textConverter.output.value = base64Encode(source);
	try {
		fieldResult.value = eval(source);
		// base64エンコードしたものを後ろに付けたURLを発行する
		document.textConverter.url.value = location.origin + location.pathname + "?" + base64Encode(source);
	} catch(error) {
		fieldErrors.value = error;
	}

});
var decodeButton = document.getElementById("decode_btn");
decodeButton.addEventListener("click", function() {document.textConverter.output.value = base64Decode(document.textConverter.source.value)});
var switchButton = document.getElementById("switch_btn");
switchButton.addEventListener("click", function() {
	var a = document.textConverter.source.value;
	var b = document.textConverter.output.value;
	document.textConverter.source.value = b;
	document.textConverter.output.value = a;
})


// base64とユニコード文字列の相互変換
function base64Encode(input) {
	return btoa(unescape(encodeURIComponent(input.replace(/\r?\n/g, ";"))));
}
function base64Decode(input) {
	try {
		return decodeURIComponent(escape(atob(input)));
	} catch(error) {
		console.log("入力された文字列に問題があります");
		return "ERROR";
	}
}
