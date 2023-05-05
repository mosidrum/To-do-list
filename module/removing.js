import { updateIds } from './update.js';

const removeTask = (taskId, tasks) => {
   // eslint-disable-next-line
  tasks = tasks.filter((task) => task.id !== parseInt(taskId));
  document.getElementById(taskId).remove();
  localStorage.setItem('tasks', JSON.stringify(tasks));
  updateIds(tasks);
};

export default removeTask;