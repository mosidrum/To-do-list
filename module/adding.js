import createTask from './display.js';

const addTask = (tasks, mainInput, todoForm) => {
  const userInput = mainInput.value;

  if (userInput === '') {
    return;
  }

  const task = {
    name: userInput,
    isCompleted: false,
  };
  tasks.push(task);
  task.id = tasks.indexOf(task) + 1;
  localStorage.setItem('tasks', JSON.stringify(tasks));
  createTask(task);

  todoForm.reset();
  mainInput.focus();
  window.location.reload();
};

export default addTask;