document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.task');
  const input = document.querySelector('.task__input');
  const tasks = [];
  form.addEventListener('submit', event => {
    event.preventDefault();

    if (input instanceof HTMLInputElement) {
      const text = input.value;
      input.value = "";
      tasks.push({
        id: tasks.length + 1,
        text: createTask(text)
      });
      updateCountTasks(tasks);
    }
  }, null);
});

function createTask(text) {
  const itemNode = document.createElement('li');
  const taskList = document.querySelector('.task-list__items');
  itemNode.innerText = text;
  taskList instanceof HTMLUListElement && taskList.appendChild(itemNode);
  return text;
}

function updateCountTasks(tasks) {
  const tasksCount = document.querySelector('.task-count');

  if (tasksCount instanceof HTMLElement) {
    tasksCount.innerText = tasks.length.toString();
  }
}