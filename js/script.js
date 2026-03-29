let t = [];
const task = document.getElementById("task");
const all = document.getElementById("all");
const complete = document.getElementById("completed");
const uncomplete = document.getElementById("uncompleted");
const tasklist = document.getElementById("tasklist");
const add = document.getElementById("add-task");

add.addEventListener("click",addtask);

function addtask(){
    if (task.value === "") return;
    const task_position = {
        completed : false,
        text :task.value

    }

    t.push(task_position);
    rendertask();
    task.value = "";

}

function createtask(task){
   
    const li = document.createElement("li");
    li.textContent = task;
    const completebtn = document.createElement("button");
    const deletebtn = document.createElement("button");
    completebtn.textContent = "Complete";
    deletebtn.textContent = "Delete";

    li.appendChild(completebtn);

    li.appendChild(deletebtn);

    return li;
   
}


function rendertask(){
    tasklist.innerHTML = "";
    t.forEach(task =>{
        const li = createtask(task);
        tasklist.appendChild(li);
    })
}





