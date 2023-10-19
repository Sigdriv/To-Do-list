let list = document.getElementById("list");
let textNumber = document.getElementById("taskNumber");

let countTasks = 0;
let doneTask = 0;

function addTask (task) {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(task.input.value));
    list.appendChild(li);

    
    countTasks++;
    
    saveData();
    document.getElementById("taskNumber").innerHTML = `${localStorage.getItem("countTasks")} / ${localStorage.getItem("doneTask")} fullført`;
}

function saveData() {
    localStorage.setItem("tasks", list.innerHTML);
    localStorage.setItem("countTasks", countTasks);
    localStorage.setItem("doneTask", doneTask);
}

function loadData() {
    list.innerHTML = localStorage.getItem("tasks");
    textNumber.innerHTML = `${localStorage.getItem("countTasks")} / ${localStorage.getItem("doneTask")} fullført`;
}

loadData();