/**
 * tabBox.js
 */
 
   $(document).ready(function() {
	
	var $tabContent = $('#tabContent div');
	$('#tab li:first-child').addClass('selectedItem');

	
	
	
	$('#tab li').on('click', function(){

		var index = $(this).index();
		

		$('#tab li').removeClass('selectedItem');

		$(this).addClass('selectedItem');
		

		$tabContent.css('display', 'none');

		if(index==0){
			$('#tabContent > .clubTabContent').css('display','inline-block')
		} else if(index==1){
			$('#tabContent > .itemTabContent').css('display','inline-block')
		} else{
			$('#tabContent > .saleTabContent').css('display','inline-block')
		}
	});
	
});