let btn = document.getElementById("btn");
function changeText(){
if(btn.innerText=="Login")
{
    btn.innerText="LogOut";
}
else{
    btn.innerText="Login";
}
}
btn.addEventListener("click",changeText);