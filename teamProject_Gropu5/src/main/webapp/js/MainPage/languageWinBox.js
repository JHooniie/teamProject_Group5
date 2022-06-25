/**
 * languageWinBox.js
 */
 
   $(document).ready(function() {
	
		$('#showAllLang').on('click',function() {
		if($(this).text()=='언어선택 ▼'){
			$('#languageBox').css('visibility', 'visible');
			$(this).text('언어선택 닫기 ▲').css('color','blue');
		}else{
			$('#languageBox').css('visibility', 'hidden');
			$(this).text('언어선택 ▼').css('color','black');
		}
	});
	});