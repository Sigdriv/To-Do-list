let list = document.getElementById("list");
let textNumber = document.getElementById("taskNumber");
let li = document.createElement("li");

let countTasks = 0;
let doneTask = 0;

function addTask (task) {
    li.appendChild(document.createTextNode(task.input.value));
    list.appendChild(li);
    li.id = "unchecked";

    let span = document.createElement("span");
    span.innerHTML = "\u00D7";
    li.appendChild(span);


    countTasks++;
    saveData();
    task.input.value = "";
}

list.addEventListener("click", function (e) {
    if (e.target.tagName === "LI" && e.target.id == "unchecked") {
        li.classList = ('list')
        e.target.classList.toggle("checked");
        e.target.id = "checked";
        doneTask++;
        saveData();
    } else if (e.target.tagName === "LI" && e.target.id == "checked") {
        e.target.classList.toggle("unchecked");
        e.target.id = "unchecked";
        doneTask--;
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    } 
}, false);



function saveData() {
    localStorage.setItem("tasks", list.innerHTML);
    localStorage.setItem("countTasks", countTasks);
    localStorage.setItem("doneTask", doneTask);
    document.getElementById("taskNumber").innerHTML = `${localStorage.getItem("countTasks")} / ${localStorage.getItem("doneTask")} fullført`;
}

function loadData() {
    list.innerHTML = localStorage.getItem("tasks");
    if (localStorage.getItem("countTasks") == null) {
        textNumber.innerHTML = `Du har ikke lagt til noen oppgaver enda`;
    }
    else {
        textNumber.innerHTML = `${localStorage.getItem("countTasks")} / ${localStorage.getItem("doneTask")} fullført`;
    }
}

loadData();