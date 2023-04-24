let num = document.getElementById("display");
let value = 0;

function inc(){
    value=value+1;
    num.innerText=value;
}
function dec(){
    value=value-1;
    num.innerText=value;
}
function res(){
    num.innerText=0;
}
let btn1= document.getElementById("add");
btn1.addEventListener("click",inc);
let btn2= document.getElementById("sub");
btn2.addEventListener("click",dec);
let btn3= document.getElementById("reset");
btn3.addEventListener("click",res);