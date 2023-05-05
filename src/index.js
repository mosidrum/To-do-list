import addTask from '../module/adding.js';
import createTask from '../module/display.js';
import removeTask from '../module/removing.js';
import './style.css';

const todoForm = document.querySelector('.enter-text');
const mainInput = document.querySelector('.text');
const todoList = document.querySelector('.todo');
const clear = document.querySelector('.clear');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

if (localStorage.getItem('tasks')) {
  tasks.map((task) => {
    createTask(task)
  })
}

if (localStorage.length === 0) {
  clear.style.display = 'none';
}

todoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  addTask(tasks,mainInput,todoForm)
})

todoList.addEventListener('click',(e) => {
  if(e.target.classList.contains('fa-times')){
    const taskId = e.target.closest('li').id;
    removeTask(taskId,tasks);
  };
  
})