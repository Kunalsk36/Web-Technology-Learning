let task = document.getElementById("task");
let btn = document.getElementById("btn");
let list = document.getElementById("list");

btn.addEventListener("click", ()=>{
    if(task.value!==""){
        let li = document.createElement("li");
        list.appendChild(li);
        li.innerHTML = task.value;
        task.value = "";
    }
})