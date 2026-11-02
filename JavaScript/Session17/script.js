// setAttribute(), getAttribute(), removeAttribute(), hasAttribute()

let kimg = document.createElement("img");
kimg.src = "../../HTML/Assests/man-with-glasses.png";
kimg.setAttribute("src", "../../HTML/Assests/pawan-kalyan.jpg");
kimg.setAttribute("alt", "pawan-kalyan");

console.log(kimg.hasAttribute("width"));
console.log(kimg.hasAttribute("src"));
console.log(kimg);
console.log(kimg.alt)
kimg.removeAttribute("alt");
console.log(kimg.alt);

console.log(kimg.getAttribute("src"));

// Event -- It is action performed by user or browser to perform some specific task

let div = document.createElement("div");
div.setAttribute("id", "div1");
document.body.appendChild(div);

let btn = document.createElement("button");
div.setAttribute("id", "btn1");
btn.innerHTML = "Click Me!";
document.body.appendChild(btn);
let btnClickedCount = 0;

// modern way of handling event
btn.addEventListener("click", ()=>{
    btnClickedCount++;
    div.textContent = `You Clicked on Button ${btnClickedCount} times!`;
})

let btn2 = document.createElement("button");
document.body.appendChild(btn2);
btn2.innerText = "Hover to see image";
let img = document.createElement("img");
img.src = "../../HTML/Assests/pawan-kalyan.jpg";
btn2.addEventListener("mouseover", ()=>{
    document.body.appendChild(img);
});

btn2.addEventListener("mouseout", ()=>{
    img.remove();
});

function alert1() {
    alert("Alert() has been triggered!");
}

let btn3 = document.createElement("button");
btn3.innerHTML = "Trigger Alert()";
document.body.appendChild(btn3)
btn3.addEventListener("click", ()=>{
    alert1();
})

// Traditional way of handling event
function func1() {
    alert("function triggered");
}