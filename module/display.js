const createTask = (task) => {
  const container = document.querySelector('.todo');
  const taskEl = document.createElement('li');
  taskEl.setAttribute('id', task.id);

  if (task.isCompleted) {
    taskEl.classList.add('complete');
  }

  const taskElMarkup = `
  <div>
    <input type="checkbox" name="tasks" id="${task.id}" ${task.isCompleted ? 'checked' : ''}>
    <span ${!task.isCompleted ? 'contenteditable' : ''} >${task.name}</span>
  </div>
  <button class="iconBtn" id="${task.id}" title= "Remove the '${task.name}' task">
    <i class="fa fa-times"></i>
  </button>
  `;

  taskEl.innerHTML = taskElMarkup;
  container.appendChild(taskEl);
};
export default createTask;