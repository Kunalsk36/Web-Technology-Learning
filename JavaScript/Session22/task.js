let task = document.getElementById("task");
let btn = document.getElementById("btn");
let list = document.getElementById("list");
let title = document.getElementById("title");
// task.addEventListener("input", ()=>{
//     if(task.value.length > 7) {
//         btn.disabled = false;
//     }
//     else{
//         btn.disabled = true;
//     }
// })

function updateTitle() {
    if (list.children.length === 0) {
        title.innerHTML = "";
    } else {
        title.innerHTML = "My Task List";
    }
}

btn.addEventListener("click", ()=>{
    if(task.value.trim() !== ""){
        let li = document.createElement("li");
        let deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "Delete";
        list.appendChild(li);
        li.innerHTML = task.value+" ";
        li.appendChild(deleteBtn);
        task.value = "";
        updateTitle();
    }
})

list.addEventListener("click", (e) => {
    if(e.target.tagName === "BUTTON" && e.target.innerHTML === "Delete") {
        e.target.parentElement.remove();
        updateTitle();
    }
})

updateTitle();