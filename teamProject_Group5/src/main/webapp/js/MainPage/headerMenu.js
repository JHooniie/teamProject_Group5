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

	//2개의 이벤트 처리 : 방법1
/* 					$('#btn')
						.on('mouseover', function(){
							$(this).css('background-color', "yellow");
						})
						.on('mouseout', function(){
							$(this).css('background-color', "lime");
						}); 
					
					//2개의 이벤트 처리 : 방법2
					$('#btn').on({
						mouseover:function(){
							$(this).css('background-color', "red");
						},
						mouseout:function(){
							$(this).css('background-color', "pink");
						}
					}); */

					/*$('#top-channel-links')
						.on('mouseover', function(){
							$('.top-ani').animate({left:300}, 3000);
						})
						.on('mouseout', function(){
							$('.top-ani').animate({left:0}, 3000);
						}); 
*/
				$('#top-channel-links').on('mouseover', function(){
				
							$('#top-ani5').animate({left:400}, 1500);
							$('#top-ani4').delay(1000).animate({left:400}, 1500);
							$('#top-ani3').delay(2000).animate({left:400}, 1500);
							$('#top-ani2').delay(3000).animate({left:400}, 1500);
							$('#top-ani1').delay(4000).animate({left:400}, 1500);
						})
						.on('mouseout', function(){
							
							$('#top-ani1').animate({left:0}, 500);
							$('#top-ani2').delay(1000).animate({left:0}, 500);
							$('#top-ani3').delay(2000).animate({left:0}, 500);
							$('#top-ani4').delay(300).animate({left:0}, 500);
							$('#top-ani5').delay(4000).animate({left:0}, 500);
							$('#top-channel-links').clearQueue();
				});
				
				/*$('#top-channel-links').on('mouseover', function(){
						var ani = '.top-ani';
						
						
						ani.each(function(index){
							ani.delay(index*500).animate({left:400}, 500);
						})
						.on('mouseout', function(){
							$('.top-ani').each(function(index){
							$('this').delay(index*1000).animate({left:0}, 2000);
							})
						})
				});*/
				
	$('#myPageIcon').on('click',function hrefMove(){
					
					 location.href = "html/login.html";
					
				
	});

});