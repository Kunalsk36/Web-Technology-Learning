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

function addTask() {
    if(task.value.trim() !== ""){
        let li = document.createElement("li");
        let deleteBtn = document.createElement("button");
        let completeBtn = document.createElement("button");
        let span = document.createElement("span");
        completeBtn.innerHTML = "Complete";
        deleteBtn.innerHTML = "Delete";
        list.appendChild(li);
        li.innerHTML = task.value+" ";
        li.appendChild(span);
        span.appendChild(completeBtn);
        span.appendChild(deleteBtn);
        task.value = "";
        updateTitle();
    }
}

task.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addTask();
    }
})

btn.addEventListener("click", ()=>{
    addTask();
})

list.addEventListener("click", (e) => {
    if(e.target.tagName === "BUTTON" && e.target.innerHTML === "Delete") {
        e.target.parentElement.parentElement.remove();
        updateTitle();
    }

    if(e.target.tagName === "BUTTON" && e.target.innerHTML === "Complete") {
        e.target.style.textDecoration = "line-through";
        e.target.parentElement.parentElement.style.backgroundColor = "#202020";
        e.target.parentElement.parentElement.style.textDecoration = "line-through";
    }
})

updateTitle();