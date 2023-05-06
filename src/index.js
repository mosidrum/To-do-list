import addTask from '../module/adding.js';
import createTask from '../module/display.js';
import { removeCompletedTask, removeTask } from '../module/removing.js';
import { updateTask } from '../module/update.js';
import './/style.css';

const todoForm = document.querySelector('.enter-text');
const mainInput = document.querySelector('.text');
const todoList = document.querySelector('.todo');
const clear = document.querySelector('.clear');
const refresh = document.querySelector('.fa-arrows-rotate');

const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

if (localStorage.getItem('tasks')) {
  tasks.map((task) => createTask(task));
  /* eslint no-useless-return: "error" */
}

if (tasks < 1) {
  clear.style.display = 'none';
} else {
  clear.style.display = 'block';
}

todoList.addEventListener('keydown', (e) => {
  if (e.keyCode === 13) {
    e.preventDefault();
  }
});

clear.addEventListener('click', (e) => {
  e.preventDefault();
  removeCompletedTask(tasks);
});

refresh.addEventListener('click', (e) => {
  e.preventDefault();
  window.location.reload();
});

todoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  addTask(tasks, mainInput, todoForm);
});

todoList.addEventListener('click', (e) => {
  if (e.target.classList.contains('fa-times')) {
    const taskId = e.target.closest('li').id;
    removeTask(taskId, tasks);
  }
});

todoList.addEventListener('input', (e) => {
  const taskId = e.target.closest('li').id;
  updateTask(taskId, e.target, tasks);
});