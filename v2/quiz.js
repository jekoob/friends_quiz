var input=null;

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
   setTimeout(title,3000);
   function title(){
   		fontTitle.style.opacity=0;
   		
   }
    setTimeout(title1,4500);
    function title1(){
      document.getElementById("fontTitle").innerHTML="Click To Start";
   		fontTitle.style.opacity="1";
            setInterval(title2,600);
    function title2(){
         fontTitle.style.opacity="0";
    }
                setInterval(title3,1200);
    function title3(){
         fontTitle.style.opacity="1";
    }
   }

 }
}
