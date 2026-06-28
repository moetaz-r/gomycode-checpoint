const STORAGE_KEY = "taskflow.tasks";

const taskForm = document.querySelector("#task-form");
const taskInput = document.querySelector("#task-input");
const taskList = document.querySelector("#task-list");
const emptyState = document.querySelector("#empty-state");
const filterButtons = document.querySelectorAll(".filter-btn");
const activeCount = document.querySelector("#active-count");
const completedCount = document.querySelector("#completed-count");

let tasks = loadTasks();
let currentFilter = "all";

render();

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const text = taskInput.value.trim();

  if (!text) {
    return;
  }

  tasks.unshift({
    id: createTaskId(),
    text,
    completed: false,
    createdAt: Date.now()
  });

  taskInput.value = "";
  saveAndRender();
});

taskList.addEventListener("click", (event) => {
  const taskItem = event.target.closest("[data-task-id]");

  if (!taskItem) {
    return;
  }

  const taskId = taskItem.dataset.taskId;

  if (event.target.matches(".task-check")) {
    tasks = tasks.map((task) => (
      task.id === taskId ? { ...task, completed: event.target.checked } : task
    ));
    saveAndRender();
  }

  if (event.target.closest(".delete-btn")) {
    tasks = tasks.filter((task) => task.id !== taskId);
    saveAndRender();
  }
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentFilter = button.dataset.filter;

    filterButtons.forEach((filterButton) => {
      const isActive = filterButton === button;
      filterButton.classList.toggle("is-active", isActive);
      filterButton.setAttribute("aria-selected", String(isActive));
    });

    render();
  });
});

function getVisibleTasks() {
  if (currentFilter === "active") {
    return tasks.filter((task) => !task.completed);
  }

  if (currentFilter === "completed") {
    return tasks.filter((task) => task.completed);
  }

  return tasks;
}

function render() {
  const visibleTasks = getVisibleTasks();
  taskList.innerHTML = "";

  visibleTasks.forEach((task) => {
    taskList.appendChild(createTaskElement(task));
  });

  const remaining = tasks.filter((task) => !task.completed).length;
  const completed = tasks.length - remaining;

  activeCount.textContent = `${remaining} ${remaining === 1 ? "active" : "active"}`;
  completedCount.textContent = completed;
  emptyState.classList.toggle("is-visible", visibleTasks.length === 0);
}

function createTaskElement(task) {
  const item = document.createElement("li");
  item.className = `task-item${task.completed ? " is-completed" : ""}`;
  item.dataset.taskId = task.id;

  const checkbox = document.createElement("input");
  checkbox.className = "task-check";
  checkbox.type = "checkbox";
  checkbox.checked = task.completed;
  checkbox.setAttribute("aria-label", `Mark ${task.text} as ${task.completed ? "active" : "completed"}`);

  const text = document.createElement("span");
  text.className = "task-text";
  text.textContent = task.text;

  const deleteButton = document.createElement("button");
  deleteButton.className = "delete-btn";
  deleteButton.type = "button";
  deleteButton.setAttribute("aria-label", `Delete ${task.text}`);
  deleteButton.innerHTML = "&times;";

  item.append(checkbox, text, deleteButton);
  return item;
}

function saveAndRender() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  render();
}

function loadTasks() {
  try {
    const savedTasks = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return Array.isArray(savedTasks) ? savedTasks : [];
  } catch {
    return [];
  }
}

function createTaskId() {
  if (globalThis.crypto && typeof globalThis.crypto.randomUUID === "function") {
    return globalThis.crypto.randomUUID();
  }

  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}
