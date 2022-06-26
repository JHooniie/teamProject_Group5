/**
 * slideShow.js
 */
 
   $(document).ready(function() {
	
	
	var movedIndex = 0;
	
	
	function moveSlide(index){
		
		movedIndex = index;
		
		
		var moveLeft = -(index * 780);	// 왼쪽으로 이동 거리
		$('#slidePanel').animate({'left':moveLeft}, 'slow');
	}
	
	// prev 버튼 클릭하면 앞으로 이동
	$('#prevButton').on('click', function(){
		// 현재 인덱스 위치 계산
		if(movedIndex != 0) // 첫 번째가 아니면
			movedIndex = movedIndex -1;	// 왼쪽으로 한 칸 이동
			
			moveSlide(movedIndex);	// 실제 이동하는 함수 호출 (인덱스값 전달)
	});
	
		// next 버튼 클릭하면 앞으로 이동
	$('#nextButton').on('click', function(){
		// 현재 인덱스 위치 계산
		if(movedIndex != 4) // 마지막이 아니면
			movedIndex = movedIndex +1;	// 오른쪽으로 한 칸 이동
			
			moveSlide(movedIndex);	// 실제 이동하는 함수 호출 (인덱스값 전달)
	});
	
	setInterval(fnSlide, 3000);
	function fnSlide() {
  $('#slidePanel').animate({ 'left': -780 }, 2000, function () {
    $('#slidePanel').css({ 'left':-1});
    $("#slidePanel img:first-child").insertAfter("#slidePanel img:last-child");
  });
};
	
	});