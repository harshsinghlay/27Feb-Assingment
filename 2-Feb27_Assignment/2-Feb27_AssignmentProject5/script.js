let inp = document.getElementById("inp");
function changeBgc(){
    inp.style.color="#fff";
    inp.style.backgroundColor="#000000";
}
inp.addEventListener("keypress",changeBgc);