/**
 * sale.js
 */
 
 $(document).ready(function() {

		$('#loginid').focus();
		
		// newMemberForm의 submit 버튼 눌렀을 때
		$('#newMemberForm').on('submit', function(){
			// 아이디를 입력하지 않은 경우
			if($('#loginid').val() == "") {
				alert("아이디를 입력하세요");
				$('#loginid').focus();
				return false; // 서버로 전송되지 않도록 
			}
		});
		
		$('#newMemberForm').on('submit', function(){
		// 비밀번호를 입력하지 않은 경우
			if($('#loginpw').val() == "") {
				alert("비밀번호를 입력하세요");
				$('#loginpw').focus();
				return false; // 서버로 전송되지 않도록 
			}
		});
		
		
		
});
		