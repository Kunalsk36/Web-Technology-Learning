let sec1 = document.getElementById("sec1");
// console.log(sec1)
// // createElement() - It is DOM method which is used to insert or add HTML element dynamically to the browser
let h1 = document.createElement("h1");
// // innerHTML - is method which is used to add the content between created element
h1.innerHTML = "Hello KK";
document.body.appendChild(h1);
h1.style.color = "red";

let msg = document.createElement("h1");
sec1.appendChild(msg).style.color="blue";
msg.innerHTML = "This is msg";
