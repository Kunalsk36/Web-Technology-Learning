let btn1 = document.getElementById("btn1");
let inpName = document.querySelector("#inpName");
let h1Name = document.querySelector("#h1Name");
// btn1.addEventListener("mouseover", ()=>{
//     let x = window.innerWidth - Math.floor(Math.random()*window.innerWidth);
//     btn1.style.transform = `translate(${x}px)`;
// })

btn1.addEventListener("click", (e)=>{
    e.preventDefault();
    console.log(e);
    console.log(e.target);
    h1Name.textContent = "Name : "+inpName.value;
    // let img = document.createElement("img");
    // img.src = inpName.value;
    // document.body.appendChild(img);
});

inpName.addEventListener("keypress", ()=>{
    inpName.style.backgroundColor = "red";
    inpName.style.color = "white";
});

inpName.addEventListener("keyup", ()=>{
    inpName.style.backgroundColor = "yellow";
    inpName.style.color = "black";
});

let imgInp = document.getElementById("inpImg");
let btn11 = document.getElementById("btn11");
let btn12 = document.getElementById("btn12");
let btn13 = document.getElementById("btn13");
let imgArr = [];
// let img = document.createElement("img");
// img.style.width = "300px";
btn11.addEventListener("click", ()=>{
    if(imgInp.value.length <= 0) {
        imgInp.style.border = "2px solid red";
    }
    else{
        imgArr.push(imgInp.value);
        // img.src = imgInp.value;
        // document.body.appendChild(img);
    }
});

btn12.addEventListener("click", ()=>{
    img.remove();
})

btn13.addEventListener("click", ()=>{
    if(imgInp.value.length <= 0) {
        imgInp.style.border = "2px solid red";
    }
    else{
        img.src = imgInp.value;
    }
})