/**
 * subMenu.js
 */
 
 $(document).ready(function() {
	
	$('#menuBtn').on('click',function() {
		if($('#subMenuBox').css('visibility') === 'hidden') {
			$('#subMenuBox').css('visibility', 'visible');
			$(this).html('#menuBtn').css('opacity',0.5);
		}else{($('#subMenuBox').css('visibility') === 'visible') 
			$('#subMenuBox').css('visibility', 'hidden');
			$(this).html('#menuBtn').css('opacity',1);
		}
	});
	var $subMenuBox = $('#subMenuBox div');
	var index = $('#mainMenuBox li').index();
	
	 $('#mainMenuBox li').hover(
					function(){	// 마우스 올렸을 때 슬라이드 다운
						
						$subMenuBox.eq(index).slideDown(1000);
					},
					function(){	// 마우스 땠을 때 슬라이드 업
						$subMenuBox.eq(index).slideDown(1000);
											
					}
				 );
});