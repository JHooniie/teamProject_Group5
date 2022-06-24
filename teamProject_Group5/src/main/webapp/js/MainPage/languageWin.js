/**
 * languageWin.js
 */
 
   $(document).ready(function() {
	
	$('#kor').on('click',function openWindow(){
					window.open("html/languageWin.html", "selectLang", 
										"width=300, heigth=550, top=50, status=yes, scrollbars=yes, resizable=no");
				});
	
	});