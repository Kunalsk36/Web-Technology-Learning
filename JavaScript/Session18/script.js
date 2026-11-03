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
});

inpName.addEventListener("keypress", ()=>{
    inpName.style.backgroundColor = "red";
    inpName.style.color = "white";
});

inpName.addEventListener("keyup", ()=>{
    inpName.style.backgroundColor = "yellow";
    inpName.style.color = "black";
});