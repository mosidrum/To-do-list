import createTask from './display.js';
import { updateIds } from './update.js';

export const removeTask = (taskId, tasks) => {
  // eslint-disable-next-line
  tasks = tasks.filter((task) => task.id !== parseInt(taskId));
  document.getElementById(taskId).remove();
  localStorage.setItem('tasks', JSON.stringify(tasks));
  updateIds(tasks);
};

export const removeCompletedTask = (tasks) => {
  const completeTasks = tasks.filter((task )=> !task.isCompleted);
  localStorage.setItem('tasks', JSON.stringify(completeTasks));
  updateIds(completeTasks);
  window.location.reload();
}