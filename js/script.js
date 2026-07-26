let tasks = [];
const taskinput = document.getElementById("taskinput");
const All = document.getElementById("all");
const completedtasks = document.getElementById("completedtasks");
const uncompletetasks = document.getElementById("uncompletedtasks");
const tasklist = document.getElementById("tasklist");
const addtask = document.getElementById("addtask");

let currentfilter = "All";

addtask.addEventListener("click",addTask);

All.addEventListener("click",function(){
    currentfilter = "All";
    setActiveButton(this);
    rendertask();
});

completedtasks.addEventListener("click",function(){
    currentfilter = "completed";
    setActiveButton(this);
    rendertask();
});

uncompletetasks.addEventListener("click",function(){
    currentfilter = "uncompleted";
    setActiveButton(this);
    rendertask();
});

loadtasks();

function addTask(){
    const tasktext = taskinput.value;
    if (tasktext == ""){
        return;
    }

    const task = {
        text : tasktext,
        completed : false
    };

    tasks.push(task);

    savetasks();
    rendertask();

    taskinput.value = "";

}

function createTaskElement(task){
    const taskitem = document.createElement("li");
    const taskspan = document.createElement("span");
    taskspan.textContent = task.text;

    if (task.completed){
        taskspan.classList.add("completed");
    }

    const deletebtn = document.createElement("button");
    deletebtn.textContent = "Delete";
    deletebtn.classList.add("deleteBtn");
    const completebtn = document.createElement("button");
    completebtn.textContent = "Complete";
    completebtn.classList.add("completebtn");

    if (task.completed){
        completebtn.disabled = true;
        completebtn.textContent = "Completed";

    }

    taskspan.addEventListener("click",function(){
        task.completed = !task.completed;
        savetasks();
        rendertask();
    });

    deletebtn.addEventListener("click",function(){
        tasks = tasks.filter(t => t!== task);
        savetasks();
        rendertask();
    });

    completebtn.addEventListener("click",function(){
        task.completed = true;
        savetasks();
        rendertask();
    });

    taskitem.classList.add("task-enter");
    taskitem.appendChild(taskspan);
    taskitem.appendChild(deletebtn);
    taskitem.appendChild(completebtn);
    tasklist.appendChild(taskitem);




}

function savetasks(){
    localStorage.setItem("tasks",JSON.stringify(tasks));
}

function loadtasks(){
    const storedtasks = localStorage.getItem("tasks");

    if (storedtasks){
        tasks = JSON.parse(storedtasks);
        rendertask();
    }
}

function rendertask(){
    tasklist.innerHTML = "";
    tasks.forEach(function (task){
        if (currentfilter == "completed" && !task.completed){
            return;
        }
        if (currentfilter == "uncompleted" && task.completed){
            return;
        }
        createTaskElement(task);
    });


}

function setActiveButton(button){
    const buttons = document.querySelectorAll(".filters button");
    buttons.forEach(btn => {
        btn.classList.remove("active");
    });

    button.classList.add("active");
}
taskinput.addEventListener("keydown",function(event){
    if (event.key === "Enter"){
        addTask();
    }
});