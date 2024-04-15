// import { tasksWrapper } from "./const.js";
// class AllTasks {
//   constructor() {
//     this.tasks = [];
//     this.showAllTasks = true;
//   }
//   onDelete(id) {
//     const modal = document.querySelector(".modal");
//     modal.classList.add("openModal");
//     const confirmDelBtn = document.querySelector(".yesButton");
//     const cancelDelBtn = document.querySelector(".noButton");
//     confirmDelBtn.addEventListener("click", () => {
//       this.tasks = this.tasks.filter((task) => task.id !== id);
//       modal.classList.remove("openModal");
//       updateTaskList();
//     });
//     cancelDelBtn.addEventListener("click", () => {
//       modal.classList.remove("openModal");
//     });
//   }
//   add(task) {
//     this.tasks.unshift(task);
//   }
//   delAll() {
//     this.tasks = [];
//   }
//   renderTasks() {
//     const activeTasksBtn = document.querySelector(".ActiveTasksBtn");
//     activeTasksBtn.addEventListener("click", () => {
//       this.showAllTasks = false;
//       updateTaskList();
//     });
//     const allTaksbtn = document.querySelector(".allTasksBtn");
//     allTaksbtn.addEventListener("click", () => {
//       this.showAllTasks = true;
//       updateTaskList();
//     });
//   }
// }

// const allTasks = new AllTasks();

// export function updateTaskList() {
//   allTasks.renderTasks();
//   tasksWrapper.innerHTML = "";
//   const counter = document.createElement("h3");
//   counter.classList.add("counter");
//   counter.innerHTML = `TASKS - ${allTasks.tasks.length}`;

//   const filtredTasks = allTasks.showAllTasks
//     ? allTasks.tasks
//     : allTasks.tasks.filter((task) => !task.checked);
//   filtredTasks.forEach((item) => {
//     const taskItem = document.createElement("div");
//     taskItem.classList.add("task-item");
//     //чекбокс
//     const checkbox = document.createElement("input");
//     checkbox.id = item.id;
//     checkbox.classList.add("checkbox");
//     checkbox.type = "checkbox";
//     checkbox.checked = item.checked;
//     checkbox.addEventListener("change", () => {
//       item.onDone();
//       updateTaskList();
//     });
//     //label for checkbox
//     const label = document.createElement("label");
//     label.setAttribute("for", `${item.id}`);
//     label.classList.add("label");

//     const taskTitle = document.createElement("h2");
//     taskTitle.textContent = item.name;
//     taskTitle.classList.add(
//       item.checked ? "task-itemTitleDone" : "task-item__title"
//     );
//     //кнопка редакт
//     const editButton = document.createElement("button");
//     editButton.id = item.id;
//     editButton.classList.add("editBtn");
//     editButton.textContent = "Edit";

//     editButton.addEventListener("click", () => {
//       console.log(`editButton ID \n ${editButton.id}`);
//       console.log(`Item ID \n ${item.id}`);
//       item.startEditing();
//     });

//     //кнопка удаления
//     const deleteButton = document.createElement("button");
//     deleteButton.id = item.id;
//     deleteButton.classList.add("deleteBtn");
//     deleteButton.textContent = "X";
//     deleteButton.addEventListener("click", () =>
//       onDelete(Number(deleteButton.id))
//     );

//     //счетчик задач
//     taskItem.appendChild(checkbox);
//     taskItem.appendChild(label);
//     taskItem.appendChild(taskTitle);
//     taskItem.appendChild(editButton);
//     taskItem.appendChild(deleteButton);
//     tasksWrapper.appendChild(taskItem);
//   });
//   tasksWrapper.appendChild(counter);

//   if (allTasks.tasks.length > 1) {
//     const delAll = document.createElement("button");
//     delAll.textContent = "Dellete All";
//     delAll.classList.add("delAllBtn");
//     delAll.addEventListener("click", () => {
//       allTasks.delAll();
//       updateTaskList();
//     });
//     tasksWrapper.appendChild(delAll);
//   }
// }
