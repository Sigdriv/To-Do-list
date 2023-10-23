let list = document.getElementById("list");
let textNumber = document.getElementById("taskNumber");

let countTasks = 0;
let doneTask = 0;

function addTask(task) {
    let li = document.createElement("li");
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(task.input.value));
    li.className = "unchecked";

    let span = document.createElement("span");
    span.innerHTML = "\u00D7";
    li.appendChild(span);
    list.appendChild(li);

    countTasks++;
    saveData();
    task.input.value = "";
}

list.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        const checkbox = e.target.querySelector("input[type='checkbox']");
        if (checkbox && checkbox.checked === false) {
            e.target.className = "checked";
            doneTask--;
        } else if (checkbox && checkbox.checked === true) {
            e.target.className = "unchecked";
            doneTask++;
        }
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        countTasks--;
        doneTask--;
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("tasks", list.innerHTML);
    localStorage.setItem("countTasks", countTasks);
    localStorage.setItem("doneTask", doneTask);
    if (localStorage.getItem("countTasks") == null) {
        textNumber.innerHTML = `Du har ikke lagt til noen oppgaver enda`;
    }
    else {
        textNumber.innerHTML = `${doneTask} / ${countTasks} fullført`;
    }
}

function loadData() {
    list.innerHTML = localStorage.getItem("tasks");
    if (localStorage.getItem("countTasks") == null) {
        textNumber.innerHTML = `Du har ikke lagt til noen oppgaver enda`;
    }
    else {
        textNumber.innerHTML = `${doneTask} / ${countTasks} fullført`;
    }
}

loadData();