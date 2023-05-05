import { updateIds } from "./update.js";

updateIds

const removeTask = (taskId, tasks) => {
  tasks = tasks.filter((task) => task.id !==parseInt(taskId))
  document.getElementById(taskId).remove();
  localStorage.setItem('tasks', JSON.stringify(tasks))
  updateIds(tasks)
}

export default removeTask;