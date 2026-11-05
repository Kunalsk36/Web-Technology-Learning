let addImg = document.getElementById("addImg");
let addStyle = document.getElementById("addStyle");
let replaceImg = document.getElementById("replaceImg");
let replaceStyle = document.getElementById("replaceStyle");
let img1 = document.getElementById("img1");
let darkTheme = document.getElementById("darkTheme");
let lightTheme = document.getElementById("lightTheme");
let toggleTheme = document.getElementById("toggleTheme");
let repStyle = document.getElementById('repStyle');


addImg.addEventListener("click", ()=>{
    img1.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8QbrYyhEX0Cri9IOseX-6kTsbP-TpHao-wdiPCFTk_w&s=10"
});

addStyle.addEventListener("dblclick", ()=>{
    img1.classList.add("imgStyle");
})

replaceImg.addEventListener("mouseover", ()=>{
    img1.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqgTH9JdC8oSvaj5fd4_6B-n9e5BP_HOu9c7yddtE28w&s=10";
})

replaceStyle.addEventListener("click", ()=>{
    img1.classList.replace("imgStyle", "imgStyle2");
})

darkTheme.addEventListener("click", ()=>{
    console.log("dark");
    document.body.classList.replace('light', 'dark');
    console.log(document.body.classList)
})

lightTheme.addEventListener("click", ()=>{
    console.log("light");
    console.log(document.body.classList)
    document.body.classList.replace('dark', 'light');
    console.log(document.body.classList);
})

console.log(document.body.classList);
toggleTheme.addEventListener("click", ()=> {
    document.body.classList.toggle("dark");
})

repStyle.addEventListener("click", ()=>{
    document.body.classList.toggle("dark")
    repStyle.classList.toggle("repStyleC")
    repStyle.textContent = "Change Content";
})