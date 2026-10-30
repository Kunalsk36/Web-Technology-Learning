let inpText = document.getElementById("inpText");
let btn = document.getElementById("btn");

let ol = document.createElement("ol");
document.body.appendChild(ol);

btn.addEventListener("click", (e)=>{
    // e.preventDefault();
    // let li = document.createElement("li");
    // li.innerHTML = inpText.value;
    // ol.appendChild(li);
    localStorage.setItem("list"+Date.now(), inpText.value);
})
if(localStorage.length > 0){
    ol.style.visibility = "visible";
    for(let i=0; i<localStorage.length; i++){
        let li = document.createElement("li");
        li.innerHTML = localStorage.getItem(localStorage.key(i));
        ol.appendChild(li);
    }
}