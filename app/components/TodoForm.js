import { Element } from '../core';

type Task = {
  id: number,
  text: string
};

@Element({
  selector: 'todo-form',
  template: `
   <form class="task">
      <input type="text" class="task__input">
      <button type="submit">Add task</button>
   </form>
   <div class="task-count"></div>
   <div class="task-list">
      <ul class="task-list__items">
      </ul>
   </div>`,
  style: `{
      background: #009cff;     
      padding: 16px;         
      border-top: 1px solid black;
      font-size: 24px;
    }`,
  useShadow: false
})
export class TodoForm extends HTMLElement {
  init() {
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
             tasks.push({ id: tasks.length + 1, text: this.createTask(text) });
             this.updateCountTasks(tasks);
           }
         },
         null
      );
    });
  }

  createTask(text: string): $PropertyType<Task, 'text'> {
    const itemNode: HTMLLIElement = document.createElement('li');
    const taskList: ?HTMLElement = document.querySelector('.task-list__items');
    itemNode.innerText = text;
    taskList instanceof HTMLUListElement && taskList.appendChild(itemNode);
    return text;
  }

  updateCountTasks(tasks: Array<Task>): void {
    const tasksCount: ?HTMLElement = document.querySelector('.task-count');

    if (tasksCount instanceof HTMLElement) {
      tasksCount.innerText = tasks.length.toString();
    }
  }
}
