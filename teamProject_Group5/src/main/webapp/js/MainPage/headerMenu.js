/**
 * headerMenu.js
 */
 
$(document).ready(function() {
//[메뉴]에 마우스 올리면 subMenu 슬라이드 다운(보임), 떼면 슬라이드 업(안 보임)
	
	
	/*$('#top-channel-links').hover(function(){
		$('.top-ani').each(function(index){
			$('this').delay(index*500).animate({left:400}, 2000);
			
		},
		function(){
					$('.top-ani').animate({left:0}, 3000);
				});*/
		$('#top-channel-links').hover(function(){
					$('.top-ani').animate({left:400}, 2000);
				}, function(){
					$('.top-ani').animate({left:0}, 3000);
				});
});