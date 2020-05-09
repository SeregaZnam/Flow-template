// @flow

import { MyName } from './components/custom';
import { MyName2 } from './components/custom2';

type Task = {
  id: number,
  text: string
};

document.addEventListener('DOMContentLoaded', () => {
  const form: ?HTMLElement = document.querySelector('.task');
  const input: ?HTMLElement = document.querySelector('.task__input');
  const tasks: Array<Task> = [];

  (form: any).addEventListener(
    'submit',
    (event: Event) => {
      event.preventDefault();
      if (input instanceof HTMLInputElement) {
        const text: string = input.value;
        input.value = '';
        tasks.push({ id: tasks.length + 1, text: createTask(text) });
        updateCountTasks(tasks);
      }
    },
    null
  );
});

function createTask(text: string): $PropertyType<Task, 'text'> {
  const itemNode: HTMLLIElement = document.createElement('li');
  const taskList: ?HTMLElement = document.querySelector('.task-list__items');
  itemNode.innerText = text;
  taskList instanceof HTMLUListElement && taskList.appendChild(itemNode);
  return text;
}

function updateCountTasks(tasks: Array<Task>): void {
  const tasksCount: ?HTMLElement = document.querySelector('.task-count');

  if (tasksCount instanceof HTMLElement) {
    tasksCount.innerText = tasks.length.toString();
  }
}
