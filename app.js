class Task {
    constructor(name, dueDate) {
      this.name = name;
      this.dueDate = dueDate;
      this.completed = false;
    }
  }

  const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  const taskName = document.querySelector('#task-name').value;
  const dueDate = document.querySelector('#due-date').value;
  const task = new Task(taskName, dueDate);
  addTaskToList(task);
  form.reset();
});

const taskList = document.querySelector('#task-list');
function addTaskToList(task) {
  const li = document.createElement('li');
  li.innerHTML = `
    <input type="checkbox" id="task-${task.name}">
    <label for="task-${task.name}">${task.name} - Due: ${task.dueDate}</label>
    <button class="delete-btn">Delete</button>
  `;
  taskList.appendChild(li);
} 

function deleteTask(event) {
    const li = event.target.parentElement;
    li.remove();
  }
  taskList.addEventListener('click', function(event) {
    if (event.target.classList.contains('delete-btn')) {
      deleteTask(event);
    }
  });

  