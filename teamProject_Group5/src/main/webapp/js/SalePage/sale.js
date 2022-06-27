let target = document.querySelector("#dynamic");
let stringArr = ["Sale Product", "Sale Event", " June 22", "~" , " June 27"]
   let selectString = stringArr[Math.floor(Math.random() *stringArr.length)];
   let selectStringArr = selectString.split("");
   	
function dynamic(randomArr){
   
   if(randomArr.length > 0){
	target.textContent += randomArr.shift
	   target.textContent += randomArr.shift();
	   setTimeout(function(){
		   dynamic(randomArr);
		   
	   },80);
   }
}
dynamic(selectStringArr);

console.log(selectString);
	   console.log(selectStringArr);

   //커서 깜빡임 효과
	function blink(){

   target.classList.toggle("active");
   
}
setInterval(blink, 500);


function resetTyping(){
target.textContent ="";
}
