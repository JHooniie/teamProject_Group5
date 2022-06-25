/**
 * headerMenu.js
 */
 
$(document).ready(function() {
//[메뉴]에 마우스 올리면 subMenu 슬라이드 다운(보임), 떼면 슬라이드 업(안 보임)
	 $('#index.jsinit').hover(
	function(){	// 마우스 올렸을 때 슬라이드 다운
		$('#hidden-list').slideDown(1000);
	},
	function(){	// 마우스 땠을 때 슬라이드 업
		$('#hidden-list').slideUp(1000);
											
	}
	 );
});