let sec1 = document.getElementById("sec1");
let sec2 = document.getElementById("sec2");
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

for(let i = 1; i <= 3; i++) {
    let h12 = document.createElement("h1");
    h12.innerHTML = "Kunal"+Date.now();
    sec2.appendChild(h12);
}

let msg2 = document.createElement("div");
document.body.appendChild(msg2);
msg2.innerHTML = "<h1>Hello Kunal</h1>"
console.log(msg2)

let msg3 = document.createElement("div");
document.body.appendChild(msg3);
msg3.textContent = "<h1>Hello Kunal</h1>"
console.log(msg3)
// textContent will add all the text as string it will not exclude tags

let list = document.querySelector("#list");
// appendChild - accepts only one argument
let li = document.createElement("li");
li.textContent = "bike";
list.appendChild(li);

// append - accept many arguments 
let li2 = document.createElement("li");
li2.textContent = "car";
list.append(li2, "thar", " kuv300");

// prepend - it is used to add the child element at the start
let li3 = document.createElement("li");
li3.textContent = "cycle";
list.prepend(li3);