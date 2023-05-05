export const updateIds = (tasks) => {
  const newTasks = tasks.map((item, index) => {
    return {
      name: item.name,
      isCompleted: item.isCompleted,
      id: index + 1
    }
  });
  localStorage.setItem('tasks', JSON.stringify(newTasks))
  console.log(newTasks);
}

export const updateTask = (taskId, el, tasks) => {
  const task = tasks.find((task) => task.id === parseInt(taskId))
  if(el.hasAttribute('contenteditable')){
    task.name = el.textContent
  } else {
    const span = el.nextElementSibling
    const parent = el.closest('li');

    task.isCompleted = !task.isCompleted

    if(task.isCompleted){
      span.removeAttribute('contenteditable')
      parent.classList.add('complete')
    } else {
      span.setAttribute('contenteditable', 'true')
      parent.classList.remove('complete');
    }
  }
  localStorage.setItem('tasks', JSON.stringify(tasks))
}
