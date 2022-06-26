/**
 * checkbox_uni.js
 */
 
 
 $(document).ready(function(){

	

	$(".check").click(function(){  

		var str = "";  

		$(".check").each(function(){  

			if($(this).is(":checked"))  
				str += "   "+$(this).val();  
			
		});
	
		if(str!=''){
			$('.selected').css('visibility', 'visible');
		}else{
			$('.selected').css('visibility', 'hidden');
		}
	
		$("#multiPrint").text("  "+str);  // #multiPrint에 체크된 원소를 출력한다.
		
		
		});

	});