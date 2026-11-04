let myDiv = document.createElement("div");
myDiv.classList.add("s1");
myDiv.textContent = "This is my added div by JS";
document.body.appendChild(myDiv);

let btn1 = document.createElement("button");
btn1.textContent = "Hover Me!";
document.body.appendChild(btn1);
btn1.classList.add("btn", "btnAnimation");

let btn2 = document.createElement("button");
btn2.textContent = "Hello"
document.body.appendChild(btn2);
btn2.classList.add("btn", "btnAnimation");
console.log(btn2.classList.contains("btnAnimation"));
btn2.classList.remove("btnAnimation");
console.log(btn2.classList.contains("btnAnimation"));

let diwaliWish = document.getElementById("diwali");
console.log(diwaliWish)
console.log(diwaliWish.classList);
console.log(diwaliWish.classList.contains("wish"));
diwaliWish.classList.remove("wish");
console.log(diwaliWish.classList.contains("wish"));

// if we try to access by classname and try to remove it will cause an error
// let diwaliWishByClass = document.getElementsByClassName("wish");
// console.log(diwaliWishByClass);
// console.log(diwaliWishByClass.classList.contains("wish")); // script.js:29 Uncaught TypeError: Cannot read properties of undefined (reading 'contains')
