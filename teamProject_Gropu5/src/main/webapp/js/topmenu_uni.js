 /**
 * topMenu.js
 */
 
  $(document).ready(function() {
	//[전체보기 ▼] 메뉴 항목 클릭했을 때 메뉴 항목 보이게
	$('#showAllMenu').on('click',function() {
		if($(this).text()=='그 외 구단 ▼'){
			$('#subMenuBox').css('visibility', 'visible');
			$(this).text('그 외 구단 ▲').css('color','blue');
		}else{
			$('#subMenuBox').css('visibility', 'hidden');
			$(this).text('그 외 구단 ▼').css('color','black');
		}
	});
	

	//[전체보기 ▼] 메뉴 항목 클릭했을 때 메뉴 항목 보이게
	$('#showLliverpool').on('click',function() {
		if($(this).text()=='리버풀'){
			$('#liverSub').css('visibility', 'visible');
			$(this).text('리버풀 ▼').css('color','blue');
		}else{
			$('#liverSub').css('visibility', 'hidden');
			$(this).text('리버풀').css('color','black');
		}
	});	
	
	$('#showManutd').on('click',function() {
		if($(this).text()=='맨체스터유나이티드'){
			$('#manutdSub').css('visibility', 'visible');
			$(this).text('맨체스터유나이티드 ▼').css('color','blue');
		}else{
			$('#manutdSub').css('visibility', 'hidden');
			$(this).text('맨체스터유나이티드').css('color','black');
		}
	});	
	
	$('#showTottenham').on('click',function() {
		if($(this).text()=='토트넘'){
			$('#tottSub').css('visibility', 'visible');
			$(this).text('토트넘 ▼').css('color','blue');
		}else{
			$('#tottSub').css('visibility', 'hidden');
			$(this).text('토트넘').css('color','black');
		}
	});	
	

	
	$('#showChelsea').on('click',function() {
		if($(this).text()=='첼시'){
			$('#chelseaSub').css('visibility', 'visible');
			$(this).text('첼시 ▼').css('color','blue');
		}else{
			$('#chelseaSub').css('visibility', 'hidden');
			$(this).text('첼시').css('color','black');
		}
	});	
	
	$('#showMancity').on('click',function() {
		if($(this).text()=='멘체스터시티'){
			$('#mancitySub').css('visibility', 'visible');
			$(this).text('멘체스터시티 ▼').css('color','blue');
		}else{
			$('#mancitySub').css('visibility', 'hidden');
			$(this).text('멘체스터시티').css('color','black');
		}
	});		
});