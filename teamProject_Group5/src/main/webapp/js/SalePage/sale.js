/**
 * sale.js
 */
 
 $(document).ready(function() {

	// 주의! : 이벤트명 : 대소문자 구분 (다 소문자)
	window.onload = function() {
		var btn = document.getElementById("btn");

		btn.onclick = function() {
			alert("클릭했습니다.");
		}
	}