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
});