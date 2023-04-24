function func(){
    let head = document.createElement("h1");
    head.innerText="Surprise";
    document.body.appendChild(head);
}
let btn=document.getElementById("btn");
btn.addEventListener("mouseover",func);
