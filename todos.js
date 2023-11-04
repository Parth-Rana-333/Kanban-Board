const from = document.getElementById("todo-form")
const input = document.getElementById("todo-input")
const todoLane = document.getElementById("todo-lane")

from.addEventListener("submit", (e) => {
    e.preventDefault();
    const value = input.value;
    if(!value) return;
    const newTask = document.getElementById("p");
    newTask.classList.add("task");
    newTask.setAttribute("draggable", "true");
    newTask.innerHTML = value;
    newTask.addEventListener("draggable", () => {
        newTask.classList.add("is-dragging");
    });
    newTask.addEventListener("dragend", () => {
        newTask.classList.remove("is-dragging");
    });
    todoLane.appendChild(newTask);
    input.value = "";
});