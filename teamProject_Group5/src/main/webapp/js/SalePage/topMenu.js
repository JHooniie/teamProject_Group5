/**
 * topMenu.js
 */
 
  
 $(document).ready(function() {
	//[전체보기 ▼] 메뉴 항목 클릭했을 때 메뉴 항목 보이게
	$('#country-select').on('click',function() {
		if($(this).text()=='전체보기 ▼'){
			$('#subMenuBox').css('visibility', 'visible');
			$(this).text('메뉴닫기 ▲').css('color','blue');
		}else{
			$('#subMenuBox').css('visibility', 'hidden');
			$(this).text('전체보기 ▼').css('color','black');
		}
	});
	
	
});