// import "./style.css";
// import { Button } from "./button";

const addTaskButton = document.querySelector(".add-button");
const input = document.querySelector(".input");
const tasksWrapper = document.querySelector(".tasks-wrappper");

const tasks = [];

addTaskButton.addEventListener("click", () => {
  const taskItem = input.value;
  if (taskItem !== "") {
    const newTask = {
      name: taskItem,
      deleted: false,
      checked: false,
      id: Date.now(),
    };
    tasks.unshift(newTask);
    input.value = "";
    console.log(tasks);
    updateTaskList();
  }
});

function updateTaskList() {
  tasksWrapper.innerHTML = "";
  tasks.forEach((item) => {
    const task = document.createElement("div");
    const indicatorTask = document.createElement("input");
    indicatorTask.type = "checkbox";

    const titleTask = document.createElement("p");

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delButton");
    deleteButton.textContent = "Х";
    task.classList.add("task-item");
    indicatorTask.classList.add("task-item__indicator");
    titleTask.classList.add("task-item__title");
    titleTask.textContent = item.name;

    task.appendChild(indicatorTask);
    task.appendChild(titleTask);
    task.appendChild(deleteButton);
    tasksWrapper.appendChild(task);
  });
}
