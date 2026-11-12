const taskInput = document.querySelector("#taskInput");

const addBtn = document.querySelector("#addBtn");

const taskList = document.querySelector("#taskList");

function updateCounter() {
    let tasks = document.querySelectorAll("#taskList li");

    let completedTasks = document.querySelectorAll("#taskList .completed")

    let total = tasks.length;

    let completed = completedTasks.length;

    let pending = total - completed;

    document.querySelector("#totalTasks").textContent = total;

    document.querySelector("#pendingTasks").textContent = pending;
    
    document.querySelector("#completedTasks").textContent = completed;
}

function addTask() {
    let task = taskInput.value.trim();

    if (task === "") {
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    let span = document.createElement("span");

    span.textContent = task;

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    checkbox.addEventListener("change", function() {
        span.classList.toggle("completed");
        updateCounter();
    })

    deleteBtn.addEventListener("click", function() {
        li.remove();
        updateCounter();
    })

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    taskInput.value = "";
    updateCounter();
}

addBtn.addEventListener("click", addTask);