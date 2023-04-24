let inp = document.getElementById("inp");
function changeBgc1(){
    inp.style.color="#fff";
    inp.style.backgroundColor="#800080";
}
function changeBgc2(){
    inp.style.color="#fff";
    inp.style.backgroundColor=" #0c0c7c";
}
inp.addEventListener("keyup",changeBgc1);
inp.addEventListener("keydown",changeBgc2);