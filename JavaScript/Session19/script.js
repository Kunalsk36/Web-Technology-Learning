console.log("Hello World");
let myDiv = document.createElement("div");
myDiv.classList.add("s1");
myDiv.textContent = "This is my first div";
document.body.appendChild(myDiv);

let btn1 = document.createElement("button");
btn1.textContent = "Click Me!";
document.body.appendChild(btn1);
btn1.classList.add("btn", "btnAnimation");