var input=null,mood=true;

function state(){
	input = document.getElementById("container").checked;
if(input==false){
   document.querySelector("#card").insertAdjacentHTML("beforebegin","<div id='blockClick' onclick='start()'></div>");
	document.getElementById("billBoard").insertAdjacentHTML("beforebegin","<div id='aaa'><h2 id='fontTitle'>Welcome To Freinds Quiz</h2></div>");
	let fontTitle=document.getElementById("fontTitle");
	setTimeout(fun,1700);
	function fun(){
	        
          	let aaa=document.getElementById("aaa");
            aaa.style.animationPlayState="paused";
            fontTitle.style.opacity=1;
            document.querySelector("label").remove();
            document.querySelector("#card").insertAdjacentHTML("afterbegin","<div id='back' ><img src='../img/fr2.jpg'></div>");

   }
 }  

   if(mood==true){
   function title(){
   		fontTitle.style.opacity=0;
   		
   }
   
    function title1(){
           document.getElementById("fontTitle").innerHTML="Click To Start";
   		     fontTitle.style.opacity="1";
           
           function title2(){
            fontTitle.style.opacity="0";
           }
           setInterval(title2,600);
        
           function title3(){
            fontTitle.style.opacity="1";
           }
           setInterval(title3,1200);
   }
    setTimeout(title,3000);
    setInterval(title1,4000);

 }
}

  function start() {
    document.querySelector("#blockClick").style.backgroundColor="grey";

    document.querySelector("#fontTitle").setAttribute("id","font_title");
    document.querySelector("#font_title").innerHTML="PERSONALITY QUIZ";
    
    document.querySelector("#font_title").style.opacity=1;

  }