const addTaskButton = document.querySelector(".add-button");
const input = document.querySelector(".input");
const tasksWrapper = document.querySelector(".tasks-wrappper");
const delButton = document.querySelector(".delButton");

class AllTasks {
  constructor() {
    this.tasks = [];
  }
  onDelete(id) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
  add(task) {
    this.tasks.unshift(task);
  }
  delAll() {
    this.tasks = [];
  }
  activeTasks() {
    this.tasks.filter((task) => !task.checked);
    return this.tasks;
  }
}

class NewTask {
  constructor(name) {
    this.name = name;
    this.checked = false;
    this.ischanging = false;
    this.id = Date.now();
  }
  onDone() {
    this.checked = !this.checked;
  }
  startEditing() {
    this.ischanging = true;
    input.value = this.name;
    input.focus();
    input.addEventListener(
      "blur",
      () => {
        console.log("Blured");
        this.ischanging = false;
        this.change(input.value);
        input.value = "";
        updateTaskList();
      },
      { once: true }
    );
  }

  change(newName) {
    this.name = newName;
  }

  // change() {
  //   this.ischanging = true;
  //   input.value = this.name;
  //   input.focus();
  //   this.name = input.value;
  //   input.addEventListener("keypress", function (e) {
  //     let key = e.which || e.keyCode;
  //     if (key === 13) {
  //       this.name = input.value;
  //     }
  //   });
  // }
}

const allTasks = new AllTasks();

addTaskButton.addEventListener("click", () => {
  const addedTask = new NewTask(input.value);

  if (input.value) {
    allTasks.add(addedTask);
    input.value = "";
    updateTaskList();
    console.log(allTasks.tasks.length);
  }
});

input.addEventListener("keypress", function (e) {
  let key = e.which || e.keyCode;
  if (key === 13) {
    addTaskButton.click();
  }
});

const onDelete = (id) => {
  allTasks.onDelete(id);
  updateTaskList();
};

function updateTaskList() {
  tasksWrapper.innerHTML = "";
  const counter = document.createElement("h3");
  counter.classList.add("counter");
  counter.innerHTML = `TASKS - ${allTasks.tasks.length}`;

  const activeTasks = document.createElement("button");
  activeTasks.textContent = "Active Tasks";

  activeTasks.addEventListener("click", () => {
    allTasks.activeTasks();
    console.log(allTasks);
  });

  tasksWrapper.appendChild(activeTasks);

  console.log(allTasks.tasks.length);
  allTasks.tasks.forEach((item) => {
    const taskItem = document.createElement("div");
    taskItem.classList.add("task-item");
    //чекбокс
    const checkbox = document.createElement("input");
    checkbox.id = item.id;
    checkbox.classList.add("checkbox");
    checkbox.type = "checkbox";
    checkbox.checked = item.checked;
    checkbox.addEventListener("change", () => {
      item.onDone();
      updateTaskList();
    });

    const taskTitle = document.createElement("h2");
    taskTitle.textContent = item.name;
    taskTitle.classList.add(
      item.checked ? "task-itemTitleDone" : "task-item__title"
    );
    //кнопка редакт
    const editButton = document.createElement("button");
    editButton.id = item.id;
    editButton.classList.add("editBtn");
    editButton.textContent = "change";

    editButton.addEventListener("click", () => {
      console.log(`editButton ID \n ${editButton.id}`);
      console.log(`Item ID \n ${item.id}`);
      item.startEditing();
    });

    //кнопка удаления
    const deleteButton = document.createElement("button");
    deleteButton.id = item.id;
    deleteButton.classList.add("deleteBtn");
    deleteButton.textContent = "X";
    deleteButton.addEventListener("click", () =>
      onDelete(Number(deleteButton.id))
    );

    //счетчик задач
    taskItem.appendChild(checkbox);
    taskItem.appendChild(taskTitle);
    taskItem.appendChild(editButton);
    taskItem.appendChild(deleteButton);
    tasksWrapper.appendChild(taskItem);
  });
  tasksWrapper.appendChild(counter);

  if (allTasks.tasks.length > 1) {
    const delAll = document.createElement("button");
    delAll.textContent = "Dellete All";
    delAll.classList.add("delAllBtn");
    delAll.addEventListener("click", () => {
      allTasks.delAll();
      updateTaskList();
    });
    tasksWrapper.appendChild(delAll);
  }
}
