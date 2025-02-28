function addTask() {
    let taskInput = document.getElementById("todo-input");
    let timeSelect = document.getElementById("time-select");
    let taskText = taskInput.value.trim();
    let timeValue = timeSelect.value;

    if (taskText === "" || timeValue === "") return;

    let li = document.createElement("li");
    li.innerHTML = `${taskText} (${timeValue}) <button class='delete-btn' onclick='deleteTask(this)'>Delete</button>`;
    document.getElementById("todo-list").appendChild(li);

    taskInput.value = "";
    timeSelect.selectedIndex = 0;
}

function deleteTask(button) {
    button.parentElement.remove();
}

function clearTasks() {
    document.getElementById("todo-list").innerHTML = "";
}
