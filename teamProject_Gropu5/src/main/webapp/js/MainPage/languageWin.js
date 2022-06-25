/**
 * languageWin.js
 */
 
   $(document).ready(function() {
	
	$('#kor').on('click',function openWindow(){
					window.open("html/languageWin.html", "selectLang", 
										"width=300, heigth=550, top=50px");
				});
	
		$('#showAllLang').on('click',function() {
		if($(this).text()=='언어선택 ▼'){
			$('#languageBox').css('visibility', 'visible');
			$(this).text('언어선택 닫기 ▲').css('color','#dc0714');
		}else{
			$('#languageBox').css('visibility', 'hidden');
			$(this).text('언어선택 ▼').css('color','white');
		}
	});
	});