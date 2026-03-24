let t = [];
const task = document.getElementById("task");
const all = document.getElementById("all");
const complete = document.getElementById("completed");
const uncomplete = document.getElementById("uncompleted");
const tasklist = document.getElementById("tasklist");
const add = document.getElementById("add-task");

add.addEventListener("click",()=>{
    if (task.value != ""){
        const li = document.createElement("li");   
        const btn = document.createElement("button");
        btn.textContent = "completed";
        li.textContent = task.value;
        tasklist.appendChild(li);
        li.appendChild(btn);
        task.value = "";
    }
});


