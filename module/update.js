const updateIds = (tasks) => {
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

export default updateIds;