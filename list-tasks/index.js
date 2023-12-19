const dateNumber = document.getElementById("date-number");
const dateText = document.getElementById("date-text");
const dateMonth = document.getElementById("date-month");
const dateYear = document.getElementById("date-year");

const tasksContainer = document.getElementById("tasks-container");

const setDate = () => {
  const date = new Date();
  dateNumber.textContent = date.toLocaleString("es", { day: "numeric" });
  dateText.textContent = date.toLocaleString("es", { weekday: "long" });
  dateMonth.textContent = date.toLocaleString("es", { month: "short" });
  dateYear.textContent = date.toLocaleString("es", { year: "numeric" });
};

const addNewTask = (event) => {
  event.preventDefault();
  const { value } = event.target.taskText;

  if (!value) return;

  const task = document.createElement("div");
  task.classList.add("task", "round-border");
  task.addEventListener("click", changeTaskState);
  task.textContent = value;
  tasksContainer.prepend(task);
  event.target.reset();
};

changeTaskState = (event) => {
  event.target.classList.toggle("done");
};

const order = () => {
  const done = [];
  const toDo = [];
  tasksContainer.childNodes.forEach((node) => {
    node.classList.contains("done") ? done.push(node) : toDo.push(node);
  });

  return [...toDo, ...done];
};

const renderOrderedTasks = () => {
  order().forEach((task) => tasksContainer.appendChild(task));
};

setDate();
