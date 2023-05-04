import './style.css';

const toDoList = [
  {
    index: 1,
    description: 'Say my prayers',
    completed: true,
  },
  {
    index: 2,
    description: 'Cook favorite meal',
    completed: true,
  },
  {
    index: 3,
    description: 'Go to the shopping mall',
    completed: true,
  },
];

const holder = document.querySelector('.list');
const displayList = toDoList.map((list) => `
  <li>
    <input type="checkbox">
    <p>${list.description}</p>
    <i class="fa fa-circle-xmark" style="color: #93969a;"></i>
    <i class="fa-solid fa-ellipsis-vertical"></i>
  </li>
    `).join('');
holder.innerHTML = displayList;
