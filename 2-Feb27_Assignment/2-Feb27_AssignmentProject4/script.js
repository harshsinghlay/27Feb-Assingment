let head=document.getElementById("heading");
function randColor(){
       let str2="0123456789ABCDEF";
       let str1="#";
       for(let i=0;i<6;i++){
           str1=str1+str2[Math.floor(Math.random()*16)];
       }
       return str1;
   }
function colorChange(){
      head.style.color=randColor();
}
head.addEventListener("mouseout",colorChange);