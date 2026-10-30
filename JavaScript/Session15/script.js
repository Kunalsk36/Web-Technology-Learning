let inpText = document.getElementById("inpText");
let btn = document.getElementById("btn");

let ol = document.createElement("ol");
document.body.appendChild(ol);
btn.addEventListener("click", (e)=>{
    e.preventDefault();
    ol.style.visibility = "visible";
    let li = document.createElement("li");
    li.innerHTML = inpText.value;
    ol.appendChild(li);
})