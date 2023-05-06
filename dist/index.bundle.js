/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./module/adding.js":
/*!**************************!*\
  !*** ./module/adding.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display.js */ "./module/display.js");


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
  (0,_display_js__WEBPACK_IMPORTED_MODULE_0__["default"])(task);

  todoForm.reset();
  mainInput.focus();
  window.location.reload();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addTask);

/***/ }),

/***/ "./module/display.js":
/*!***************************!*\
  !*** ./module/display.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTask);

/***/ }),

/***/ "./module/removing.js":
/*!****************************!*\
  !*** ./module/removing.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeCompletedTask": () => (/* binding */ removeCompletedTask),
/* harmony export */   "removeTask": () => (/* binding */ removeTask)
/* harmony export */ });
/* harmony import */ var _update_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update.js */ "./module/update.js");


const removeTask = (taskId, tasks) => {
  // eslint-disable-next-line
  tasks = tasks.filter((task) => task.id !== parseInt(taskId));
  document.getElementById(taskId).remove();
  localStorage.setItem('tasks', JSON.stringify(tasks));
  (0,_update_js__WEBPACK_IMPORTED_MODULE_0__.updateIds)(tasks);
};

const removeCompletedTask = (tasks) => {
  const completeTasks = tasks.filter((task) => !task.isCompleted);
  localStorage.setItem('tasks', JSON.stringify(completeTasks));
  (0,_update_js__WEBPACK_IMPORTED_MODULE_0__.updateIds)(completeTasks);
  window.location.reload();
};

/***/ }),

/***/ "./module/update.js":
/*!**************************!*\
  !*** ./module/update.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "updateIds": () => (/* binding */ updateIds),
/* harmony export */   "updateTask": () => (/* binding */ updateTask)
/* harmony export */ });
const updateIds = (tasks) => {
  const newTasks = tasks.map((item, index) => ({
    name: item.name,
    isCompleted: item.isCompleted,
    id: index + 1,
  }));
  localStorage.setItem('tasks', JSON.stringify(newTasks));
};

const updateTask = (taskId, el, tasks) => {
  // eslint-disable-next-line
  const task = tasks.find((task) => task.id === parseInt(taskId));
  if (el.hasAttribute('contenteditable')) {
    task.name = el.textContent;
  } else {
    const span = el.nextElementSibling;
    const parent = el.closest('li');

    task.isCompleted = !task.isCompleted;

    if (task.isCompleted) {
      span.removeAttribute('contenteditable');
      parent.classList.add('complete');
    } else {
      span.setAttribute('contenteditable', 'true');
      parent.classList.remove('complete');
    }
  }
  localStorage.setItem('tasks', JSON.stringify(tasks));
};


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300;0,400;0,500;0,600;1,300&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n:root {\r\n  --ground: rgb(181, 183, 181);\r\n  --done: rgb(234, 240, 234);\r\n  --border: black;\r\n  --item: rgb(196, 191, 191);\r\n  --edit: #ece5e5;\r\n}\r\n\r\nbody {\r\n  font-family: 'Figtree', sans-serif;\r\n}\r\n\r\n.todo-container {\r\n  position: relative;\r\n  padding: 60px 10px 10px 10px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin: 0 auto;\r\n  width: 100%;\r\n  background: var(--ground);\r\n  box-shadow: rgba(50, 50, 93, 0.25) 1px 50px 100px -20px, rgba(0, 0, 0, 0.3) 1px 30px 60px -30px, rgba(10, 37, 64, 0.35) 1px -2px 6px 1px inset;\r\n}\r\n\r\n.heading {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin-top: 10px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.heading .fa-arrows-rotate {\r\n  font-size: 20px;\r\n  margin-right: 10px;\r\n}\r\n\r\n.heading .fa-arrows-rotate:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n.heading p {\r\n  font-size: 25px;\r\n  font-weight: 900;\r\n}\r\n\r\n.enter-text {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  position: relative;\r\n  width: 100%;\r\n  margin-bottom: 25px;\r\n}\r\n\r\n.enter-text button {\r\n  width: 45px;\r\n  height: 45px;\r\n  border: none;\r\n  background-color: var(--ground);\r\n}\r\n\r\n.enter-text .fa-circle-arrow-left {\r\n  font-size: 40px;\r\n}\r\n\r\n.enter-text .fa-circle-arrow-left:hover {\r\n  cursor: pointer;\r\n}\r\n\r\nul {\r\n  width: 100%;\r\n  margin: 0 auto;\r\n}\r\n\r\nul .clear {\r\n  width: 100%;\r\n  text-align: center;\r\n  padding: 20px;\r\n  margin-top: 10px;\r\n  font-size: 18px;\r\n  display: block;\r\n}\r\n\r\n.fa-circle-xmark {\r\n  font-size: 30px;\r\n  position: absolute;\r\n  right: 40px;\r\n}\r\n\r\n.fa-times {\r\n  width: 20px;\r\n  height: 20px;\r\n  text-align: center;\r\n}\r\n\r\n.fa-times:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n.fa-times:active {\r\n  transform: scale(0.8);\r\n}\r\n\r\nul .clear:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n.fa-circle-up-left {\r\n  display: none;\r\n}\r\n\r\nul .text {\r\n  width: 90%;\r\n  height: 30px;\r\n  font-size: 24px;\r\n  padding: 25px;\r\n  border-radius: 10px;\r\n  font-style: italic;\r\n  border: none;\r\n}\r\n\r\n.todo {\r\n  margin-bottom: 40px;\r\n}\r\n\r\n.todo li {\r\n  background-color: var(--item);\r\n  border-radius: 10px;\r\n  margin-bottom: 10px;\r\n  padding: 15px 10px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.todo li div {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 7px;\r\n}\r\n\r\n.todo .complete {\r\n  background-color: rgb(255, 253, 253);\r\n  text-decoration: line-through;\r\n  color: rgb(0, 0, 0);\r\n}\r\n\r\ninput[type=\"checkbox\"] {\r\n  width: 25px;\r\n  height: 25px;\r\n}\r\n\r\ninput[type=\"checkbox\"]:checked {\r\n  width: 25px;\r\n  height: 25px;\r\n  clip-path: circle(40% at 50% 50%);\r\n}\r\n\r\n.todo li button {\r\n  border: none;\r\n  font-size: 24px;\r\n  background-color: var(--item);\r\n}\r\n\r\n.todo li span {\r\n  border: none;\r\n  padding: 4px;\r\n  transition: var(--edit);\r\n}\r\n\r\n.todo li span:focus {\r\n  border: 1px solid var(--edit);\r\n  background: var(--edit);\r\n}\r\n\r\n.todo li span[contenteditable]:hover {\r\n  background: var(--edit);\r\n}\r\n\r\n@media only screen and (min-width: 768px) {\r\n  * {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n  }\r\n\r\n  :root {\r\n    --ground: rgb(181, 183, 181);\r\n    --done: rgb(234, 240, 234);\r\n    --border: black;\r\n    --item: rgb(196, 191, 191);\r\n    --edit: #ece5e5;\r\n  }\r\n\r\n  body {\r\n    font-family: 'Figtree', sans-serif;\r\n  }\r\n\r\n  .todo-container {\r\n    position: relative;\r\n    top: 100px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin: 0 auto;\r\n    width: 40%;\r\n    background: var(--ground);\r\n    padding: 10px;\r\n    box-shadow: rgba(50, 50, 93, 0.25) 1px 50px 100px -20px, rgba(0, 0, 0, 0.3) 1px 30px 60px -30px, rgba(10, 37, 64, 0.35) 1px -2px 6px 1px inset;\r\n  }\r\n\r\n  .heading {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    margin-top: 10px;\r\n    margin-bottom: 20px;\r\n  }\r\n\r\n  .heading .fa-arrows-rotate {\r\n    font-size: 20px;\r\n    margin-right: 10px;\r\n  }\r\n\r\n  .heading .fa-arrows-rotate:hover {\r\n    cursor: pointer;\r\n  }\r\n\r\n  .heading p {\r\n    font-size: 25px;\r\n  }\r\n\r\n  .enter-text {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    position: relative;\r\n    width: 100%;\r\n    margin-bottom: 25px;\r\n  }\r\n\r\n  .enter-text button {\r\n    width: 45px;\r\n    height: 45px;\r\n    border: none;\r\n    background-color: var(--ground);\r\n  }\r\n\r\n  .enter-text .fa-circle-arrow-left {\r\n    font-size: 40px;\r\n  }\r\n\r\n  .enter-text .fa-circle-arrow-left:hover {\r\n    cursor: pointer;\r\n  }\r\n\r\n  ul {\r\n    width: 100%;\r\n    margin: 0 auto;\r\n  }\r\n\r\n  ul .clear {\r\n    width: 100%;\r\n    text-align: center;\r\n    padding: 20px;\r\n    margin-top: 10px;\r\n    font-size: 18px;\r\n    display: block;\r\n  }\r\n\r\n  .fa-circle-xmark {\r\n    font-size: 30px;\r\n    position: absolute;\r\n    right: 40px;\r\n  }\r\n\r\n  .fa-times {\r\n    width: 20px;\r\n    height: 20px;\r\n    text-align: center;\r\n  }\r\n\r\n  .fa-times:hover {\r\n    cursor: pointer;\r\n  }\r\n\r\n  .fa-times:active {\r\n    transform: scale(0.8);\r\n  }\r\n\r\n  ul .clear:hover {\r\n    cursor: pointer;\r\n  }\r\n\r\n  .fa-circle-up-left {\r\n    display: none;\r\n  }\r\n\r\n  ul .text {\r\n    width: 90%;\r\n    height: 30px;\r\n    font-size: 24px;\r\n    padding: 25px;\r\n    border-radius: 10px;\r\n    font-style: italic;\r\n    border: none;\r\n  }\r\n\r\n  .todo {\r\n    margin-bottom: 40px;\r\n  }\r\n\r\n  .todo li {\r\n    background-color: var(--item);\r\n    border-radius: 10px;\r\n    margin-bottom: 10px;\r\n    padding: 15px 10px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n  }\r\n\r\n  .todo li div {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 7px;\r\n  }\r\n\r\n  .todo .complete {\r\n    background-color: rgb(255, 253, 253);\r\n    text-decoration: line-through;\r\n    color: rgb(0, 0, 0);\r\n  }\r\n\r\n  input[type=\"checkbox\"] {\r\n    width: 25px;\r\n    height: 25px;\r\n  }\r\n\r\n  input[type=\"checkbox\"]:checked {\r\n    width: 25px;\r\n    height: 25px;\r\n    clip-path: circle(40% at 50% 50%);\r\n  }\r\n\r\n  .todo li button {\r\n    border: none;\r\n    font-size: 24px;\r\n    background-color: var(--item);\r\n  }\r\n\r\n  .todo li span {\r\n    border: none;\r\n    padding: 4px;\r\n    transition: var(--edit);\r\n  }\r\n\r\n  .todo li span:focus {\r\n    border: 1px solid var(--edit);\r\n    background: var(--edit);\r\n  }\r\n\r\n  .todo li span[contenteditable]:hover {\r\n    background: var(--edit);\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css\");\r\n@import url('https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300;0,400;0,500;0,600;1,300&display=swap');\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n:root {\r\n  --ground: rgb(181, 183, 181);\r\n  --done: rgb(234, 240, 234);\r\n  --border: black;\r\n  --item: rgb(196, 191, 191);\r\n  --edit: #ece5e5;\r\n}\r\n\r\nbody {\r\n  font-family: 'Figtree', sans-serif;\r\n}\r\n\r\n.todo-container {\r\n  position: relative;\r\n  padding: 60px 10px 10px 10px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin: 0 auto;\r\n  width: 100%;\r\n  background: var(--ground);\r\n  box-shadow: rgba(50, 50, 93, 0.25) 1px 50px 100px -20px, rgba(0, 0, 0, 0.3) 1px 30px 60px -30px, rgba(10, 37, 64, 0.35) 1px -2px 6px 1px inset;\r\n}\r\n\r\n.heading {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin-top: 10px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.heading .fa-arrows-rotate {\r\n  font-size: 20px;\r\n  margin-right: 10px;\r\n}\r\n\r\n.heading .fa-arrows-rotate:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n.heading p {\r\n  font-size: 25px;\r\n  font-weight: 900;\r\n}\r\n\r\n.enter-text {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  position: relative;\r\n  width: 100%;\r\n  margin-bottom: 25px;\r\n}\r\n\r\n.enter-text button {\r\n  width: 45px;\r\n  height: 45px;\r\n  border: none;\r\n  background-color: var(--ground);\r\n}\r\n\r\n.enter-text .fa-circle-arrow-left {\r\n  font-size: 40px;\r\n}\r\n\r\n.enter-text .fa-circle-arrow-left:hover {\r\n  cursor: pointer;\r\n}\r\n\r\nul {\r\n  width: 100%;\r\n  margin: 0 auto;\r\n}\r\n\r\nul .clear {\r\n  width: 100%;\r\n  text-align: center;\r\n  padding: 20px;\r\n  margin-top: 10px;\r\n  font-size: 18px;\r\n  display: block;\r\n}\r\n\r\n.fa-circle-xmark {\r\n  font-size: 30px;\r\n  position: absolute;\r\n  right: 40px;\r\n}\r\n\r\n.fa-times {\r\n  width: 20px;\r\n  height: 20px;\r\n  text-align: center;\r\n}\r\n\r\n.fa-times:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n.fa-times:active {\r\n  transform: scale(0.8);\r\n}\r\n\r\nul .clear:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n.fa-circle-up-left {\r\n  display: none;\r\n}\r\n\r\nul .text {\r\n  width: 90%;\r\n  height: 30px;\r\n  font-size: 24px;\r\n  padding: 25px;\r\n  border-radius: 10px;\r\n  font-style: italic;\r\n  border: none;\r\n}\r\n\r\n.todo {\r\n  margin-bottom: 40px;\r\n}\r\n\r\n.todo li {\r\n  background-color: var(--item);\r\n  border-radius: 10px;\r\n  margin-bottom: 10px;\r\n  padding: 15px 10px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.todo li div {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 7px;\r\n}\r\n\r\n.todo .complete {\r\n  background-color: rgb(255, 253, 253);\r\n  text-decoration: line-through;\r\n  color: rgb(0, 0, 0);\r\n}\r\n\r\ninput[type=\"checkbox\"] {\r\n  width: 25px;\r\n  height: 25px;\r\n}\r\n\r\ninput[type=\"checkbox\"]:checked {\r\n  width: 25px;\r\n  height: 25px;\r\n  clip-path: circle(40% at 50% 50%);\r\n}\r\n\r\n.todo li button {\r\n  border: none;\r\n  font-size: 24px;\r\n  background-color: var(--item);\r\n}\r\n\r\n.todo li span {\r\n  border: none;\r\n  padding: 4px;\r\n  transition: var(--edit);\r\n}\r\n\r\n.todo li span:focus {\r\n  border: 1px solid var(--edit);\r\n  background: var(--edit);\r\n}\r\n\r\n.todo li span[contenteditable]:hover {\r\n  background: var(--edit);\r\n}\r\n\r\n@media only screen and (min-width: 768px) {\r\n  * {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n  }\r\n\r\n  :root {\r\n    --ground: rgb(181, 183, 181);\r\n    --done: rgb(234, 240, 234);\r\n    --border: black;\r\n    --item: rgb(196, 191, 191);\r\n    --edit: #ece5e5;\r\n  }\r\n\r\n  body {\r\n    font-family: 'Figtree', sans-serif;\r\n  }\r\n\r\n  .todo-container {\r\n    position: relative;\r\n    top: 100px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin: 0 auto;\r\n    width: 40%;\r\n    background: var(--ground);\r\n    padding: 10px;\r\n    box-shadow: rgba(50, 50, 93, 0.25) 1px 50px 100px -20px, rgba(0, 0, 0, 0.3) 1px 30px 60px -30px, rgba(10, 37, 64, 0.35) 1px -2px 6px 1px inset;\r\n  }\r\n\r\n  .heading {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    margin-top: 10px;\r\n    margin-bottom: 20px;\r\n  }\r\n\r\n  .heading .fa-arrows-rotate {\r\n    font-size: 20px;\r\n    margin-right: 10px;\r\n  }\r\n\r\n  .heading .fa-arrows-rotate:hover {\r\n    cursor: pointer;\r\n  }\r\n\r\n  .heading p {\r\n    font-size: 25px;\r\n  }\r\n\r\n  .enter-text {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    position: relative;\r\n    width: 100%;\r\n    margin-bottom: 25px;\r\n  }\r\n\r\n  .enter-text button {\r\n    width: 45px;\r\n    height: 45px;\r\n    border: none;\r\n    background-color: var(--ground);\r\n  }\r\n\r\n  .enter-text .fa-circle-arrow-left {\r\n    font-size: 40px;\r\n  }\r\n\r\n  .enter-text .fa-circle-arrow-left:hover {\r\n    cursor: pointer;\r\n  }\r\n\r\n  ul {\r\n    width: 100%;\r\n    margin: 0 auto;\r\n  }\r\n\r\n  ul .clear {\r\n    width: 100%;\r\n    text-align: center;\r\n    padding: 20px;\r\n    margin-top: 10px;\r\n    font-size: 18px;\r\n    display: block;\r\n  }\r\n\r\n  .fa-circle-xmark {\r\n    font-size: 30px;\r\n    position: absolute;\r\n    right: 40px;\r\n  }\r\n\r\n  .fa-times {\r\n    width: 20px;\r\n    height: 20px;\r\n    text-align: center;\r\n  }\r\n\r\n  .fa-times:hover {\r\n    cursor: pointer;\r\n  }\r\n\r\n  .fa-times:active {\r\n    transform: scale(0.8);\r\n  }\r\n\r\n  ul .clear:hover {\r\n    cursor: pointer;\r\n  }\r\n\r\n  .fa-circle-up-left {\r\n    display: none;\r\n  }\r\n\r\n  ul .text {\r\n    width: 90%;\r\n    height: 30px;\r\n    font-size: 24px;\r\n    padding: 25px;\r\n    border-radius: 10px;\r\n    font-style: italic;\r\n    border: none;\r\n  }\r\n\r\n  .todo {\r\n    margin-bottom: 40px;\r\n  }\r\n\r\n  .todo li {\r\n    background-color: var(--item);\r\n    border-radius: 10px;\r\n    margin-bottom: 10px;\r\n    padding: 15px 10px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n  }\r\n\r\n  .todo li div {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 7px;\r\n  }\r\n\r\n  .todo .complete {\r\n    background-color: rgb(255, 253, 253);\r\n    text-decoration: line-through;\r\n    color: rgb(0, 0, 0);\r\n  }\r\n\r\n  input[type=\"checkbox\"] {\r\n    width: 25px;\r\n    height: 25px;\r\n  }\r\n\r\n  input[type=\"checkbox\"]:checked {\r\n    width: 25px;\r\n    height: 25px;\r\n    clip-path: circle(40% at 50% 50%);\r\n  }\r\n\r\n  .todo li button {\r\n    border: none;\r\n    font-size: 24px;\r\n    background-color: var(--item);\r\n  }\r\n\r\n  .todo li span {\r\n    border: none;\r\n    padding: 4px;\r\n    transition: var(--edit);\r\n  }\r\n\r\n  .todo li span:focus {\r\n    border: 1px solid var(--edit);\r\n    background: var(--edit);\r\n  }\r\n\r\n  .todo li span[contenteditable]:hover {\r\n    background: var(--edit);\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _module_adding_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../module/adding.js */ "./module/adding.js");
/* harmony import */ var _module_display_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../module/display.js */ "./module/display.js");
/* harmony import */ var _module_removing_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../module/removing.js */ "./module/removing.js");
/* harmony import */ var _module_update_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../module/update.js */ "./module/update.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./src/style.css");






const todoForm = document.querySelector('.enter-text');
const mainInput = document.querySelector('.text');
const todoList = document.querySelector('.todo');
const clear = document.querySelector('.clear');
const refresh = document.querySelector('.fa-arrows-rotate');

const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

if (localStorage.getItem('tasks')) {
  tasks.map((task) => (0,_module_display_js__WEBPACK_IMPORTED_MODULE_1__["default"])(task));
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
  (0,_module_removing_js__WEBPACK_IMPORTED_MODULE_2__.removeCompletedTask)(tasks);
});

refresh.addEventListener('click', (e) => {
  e.preventDefault();
  window.location.reload();
});

todoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  (0,_module_adding_js__WEBPACK_IMPORTED_MODULE_0__["default"])(tasks, mainInput, todoForm);
});

todoList.addEventListener('click', (e) => {
  if (e.target.classList.contains('fa-times')) {
    const taskId = e.target.closest('li').id;
    (0,_module_removing_js__WEBPACK_IMPORTED_MODULE_2__.removeTask)(taskId, tasks);
  }
});

todoList.addEventListener('input', (e) => {
  const taskId = e.target.closest('li').id;
  (0,_module_update_js__WEBPACK_IMPORTED_MODULE_3__.updateTask)(taskId, e.target, tasks);
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZ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QUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBMEM7QUFDSTtBQUMwQjtBQUN2QjtBQUM1QjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiw4REFBVTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLEVBQUUsd0VBQW1CO0FBQ3JCLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxFQUFFLDZEQUFPO0FBQ1QsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwrREFBVTtBQUNkO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLEVBQUUsNkRBQVU7QUFDWixDQUFDLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9tb2R1bGUvYWRkaW5nLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL21vZHVsZS9kaXNwbGF5LmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL21vZHVsZS9yZW1vdmluZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9tb2R1bGUvdXBkYXRlLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNyZWF0ZVRhc2sgZnJvbSAnLi9kaXNwbGF5LmpzJztcclxuXHJcbmNvbnN0IGFkZFRhc2sgPSAodGFza3MsIG1haW5JbnB1dCwgdG9kb0Zvcm0pID0+IHtcclxuICBjb25zdCB1c2VySW5wdXQgPSBtYWluSW5wdXQudmFsdWU7XHJcblxyXG4gIGlmICh1c2VySW5wdXQgPT09ICcnKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBjb25zdCB0YXNrID0ge1xyXG4gICAgbmFtZTogdXNlcklucHV0LFxyXG4gICAgaXNDb21wbGV0ZWQ6IGZhbHNlLFxyXG4gIH07XHJcbiAgdGFza3MucHVzaCh0YXNrKTtcclxuICB0YXNrLmlkID0gdGFza3MuaW5kZXhPZih0YXNrKSArIDE7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkodGFza3MpKTtcclxuICBjcmVhdGVUYXNrKHRhc2spO1xyXG5cclxuICB0b2RvRm9ybS5yZXNldCgpO1xyXG4gIG1haW5JbnB1dC5mb2N1cygpO1xyXG4gIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFkZFRhc2s7IiwiY29uc3QgY3JlYXRlVGFzayA9ICh0YXNrKSA9PiB7XHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8nKTtcclxuICBjb25zdCB0YXNrRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gIHRhc2tFbC5zZXRBdHRyaWJ1dGUoJ2lkJywgdGFzay5pZCk7XHJcblxyXG4gIGlmICh0YXNrLmlzQ29tcGxldGVkKSB7XHJcbiAgICB0YXNrRWwuY2xhc3NMaXN0LmFkZCgnY29tcGxldGUnKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHRhc2tFbE1hcmt1cCA9IGBcclxuICA8ZGl2PlxyXG4gICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJ0YXNrc1wiIGlkPVwiJHt0YXNrLmlkfVwiICR7dGFzay5pc0NvbXBsZXRlZCA/ICdjaGVja2VkJyA6ICcnfT5cclxuICAgIDxzcGFuICR7IXRhc2suaXNDb21wbGV0ZWQgPyAnY29udGVudGVkaXRhYmxlJyA6ICcnfSA+JHt0YXNrLm5hbWV9PC9zcGFuPlxyXG4gIDwvZGl2PlxyXG4gIDxidXR0b24gY2xhc3M9XCJpY29uQnRuXCIgaWQ9XCIke3Rhc2suaWR9XCIgdGl0bGU9IFwiUmVtb3ZlIHRoZSAnJHt0YXNrLm5hbWV9JyB0YXNrXCI+XHJcbiAgICA8aSBjbGFzcz1cImZhIGZhLXRpbWVzXCI+PC9pPlxyXG4gIDwvYnV0dG9uPlxyXG4gIGA7XHJcblxyXG4gIHRhc2tFbC5pbm5lckhUTUwgPSB0YXNrRWxNYXJrdXA7XHJcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tFbCk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVRhc2s7IiwiaW1wb3J0IHsgdXBkYXRlSWRzIH0gZnJvbSAnLi91cGRhdGUuanMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZVRhc2sgPSAodGFza0lkLCB0YXNrcykgPT4ge1xyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4gIHRhc2tzID0gdGFza3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmlkICE9PSBwYXJzZUludCh0YXNrSWQpKTtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YXNrSWQpLnJlbW92ZSgpO1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KHRhc2tzKSk7XHJcbiAgdXBkYXRlSWRzKHRhc2tzKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCByZW1vdmVDb21wbGV0ZWRUYXNrID0gKHRhc2tzKSA9PiB7XHJcbiAgY29uc3QgY29tcGxldGVUYXNrcyA9IHRhc2tzLmZpbHRlcigodGFzaykgPT4gIXRhc2suaXNDb21wbGV0ZWQpO1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KGNvbXBsZXRlVGFza3MpKTtcclxuICB1cGRhdGVJZHMoY29tcGxldGVUYXNrcyk7XHJcbiAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG59OyIsImV4cG9ydCBjb25zdCB1cGRhdGVJZHMgPSAodGFza3MpID0+IHtcclxuICBjb25zdCBuZXdUYXNrcyA9IHRhc2tzLm1hcCgoaXRlbSwgaW5kZXgpID0+ICh7XHJcbiAgICBuYW1lOiBpdGVtLm5hbWUsXHJcbiAgICBpc0NvbXBsZXRlZDogaXRlbS5pc0NvbXBsZXRlZCxcclxuICAgIGlkOiBpbmRleCArIDEsXHJcbiAgfSkpO1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KG5ld1Rhc2tzKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlVGFzayA9ICh0YXNrSWQsIGVsLCB0YXNrcykgPT4ge1xyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4gIGNvbnN0IHRhc2sgPSB0YXNrcy5maW5kKCh0YXNrKSA9PiB0YXNrLmlkID09PSBwYXJzZUludCh0YXNrSWQpKTtcclxuICBpZiAoZWwuaGFzQXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnKSkge1xyXG4gICAgdGFzay5uYW1lID0gZWwudGV4dENvbnRlbnQ7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IHNwYW4gPSBlbC5uZXh0RWxlbWVudFNpYmxpbmc7XHJcbiAgICBjb25zdCBwYXJlbnQgPSBlbC5jbG9zZXN0KCdsaScpO1xyXG5cclxuICAgIHRhc2suaXNDb21wbGV0ZWQgPSAhdGFzay5pc0NvbXBsZXRlZDtcclxuXHJcbiAgICBpZiAodGFzay5pc0NvbXBsZXRlZCkge1xyXG4gICAgICBzcGFuLnJlbW92ZUF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJyk7XHJcbiAgICAgIHBhcmVudC5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZScpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc3Bhbi5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScsICd0cnVlJyk7XHJcbiAgICAgIHBhcmVudC5jbGFzc0xpc3QucmVtb3ZlKCdjb21wbGV0ZScpO1xyXG4gICAgfVxyXG4gIH1cclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeSh0YXNrcykpO1xyXG59O1xyXG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9mb250LWF3ZXNvbWUvNi40LjAvY3NzL2FsbC5taW4uY3NzKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RmlndHJlZTppdGFsLHdnaHRAMCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MSwzMDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgLS1ncm91bmQ6IHJnYigxODEsIDE4MywgMTgxKTtcXHJcXG4gIC0tZG9uZTogcmdiKDIzNCwgMjQwLCAyMzQpO1xcclxcbiAgLS1ib3JkZXI6IGJsYWNrO1xcclxcbiAgLS1pdGVtOiByZ2IoMTk2LCAxOTEsIDE5MSk7XFxyXFxuICAtLWVkaXQ6ICNlY2U1ZTU7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgZm9udC1mYW1pbHk6ICdGaWd0cmVlJywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tY29udGFpbmVyIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHBhZGRpbmc6IDYwcHggMTBweCAxMHB4IDEwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLWdyb3VuZCk7XFxyXFxuICBib3gtc2hhZG93OiByZ2JhKDUwLCA1MCwgOTMsIDAuMjUpIDFweCA1MHB4IDEwMHB4IC0yMHB4LCByZ2JhKDAsIDAsIDAsIDAuMykgMXB4IDMwcHggNjBweCAtMzBweCwgcmdiYSgxMCwgMzcsIDY0LCAwLjM1KSAxcHggLTJweCA2cHggMXB4IGluc2V0O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGluZyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGluZyAuZmEtYXJyb3dzLXJvdGF0ZSB7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5oZWFkaW5nIC5mYS1hcnJvd3Mtcm90YXRlOmhvdmVyIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRpbmcgcCB7XFxyXFxuICBmb250LXNpemU6IDI1cHg7XFxyXFxuICBmb250LXdlaWdodDogOTAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZW50ZXItdGV4dCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XFxyXFxufVxcclxcblxcclxcbi5lbnRlci10ZXh0IGJ1dHRvbiB7XFxyXFxuICB3aWR0aDogNDVweDtcXHJcXG4gIGhlaWdodDogNDVweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyb3VuZCk7XFxyXFxufVxcclxcblxcclxcbi5lbnRlci10ZXh0IC5mYS1jaXJjbGUtYXJyb3ctbGVmdCB7XFxyXFxuICBmb250LXNpemU6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbi5lbnRlci10ZXh0IC5mYS1jaXJjbGUtYXJyb3ctbGVmdDpob3ZlciB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbnVsIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbnVsIC5jbGVhciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5mYS1jaXJjbGUteG1hcmsge1xcclxcbiAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgcmlnaHQ6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbi5mYS10aW1lcyB7XFxyXFxuICB3aWR0aDogMjBweDtcXHJcXG4gIGhlaWdodDogMjBweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLXRpbWVzOmhvdmVyIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLXRpbWVzOmFjdGl2ZSB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XFxyXFxufVxcclxcblxcclxcbnVsIC5jbGVhcjpob3ZlciB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5mYS1jaXJjbGUtdXAtbGVmdCB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG51bCAudGV4dCB7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgcGFkZGluZzogMjVweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi50b2RvIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XFxyXFxufVxcclxcblxcclxcbi50b2RvIGxpIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWl0ZW0pO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICBwYWRkaW5nOiAxNXB4IDEwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8gbGkgZGl2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiA3cHg7XFxyXFxufVxcclxcblxcclxcbi50b2RvIC5jb21wbGV0ZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTMsIDI1Myk7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXHJcXG4gIGNvbG9yOiByZ2IoMCwgMCwgMCk7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcclxcbiAgd2lkdGg6IDI1cHg7XFxyXFxuICBoZWlnaHQ6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCB7XFxyXFxuICB3aWR0aDogMjVweDtcXHJcXG4gIGhlaWdodDogMjVweDtcXHJcXG4gIGNsaXAtcGF0aDogY2lyY2xlKDQwJSBhdCA1MCUgNTAlKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8gbGkgYnV0dG9uIHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWl0ZW0pO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kbyBsaSBzcGFuIHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDRweDtcXHJcXG4gIHRyYW5zaXRpb246IHZhcigtLWVkaXQpO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kbyBsaSBzcGFuOmZvY3VzIHtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWVkaXQpO1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tZWRpdCk7XFxyXFxufVxcclxcblxcclxcbi50b2RvIGxpIHNwYW5bY29udGVudGVkaXRhYmxlXTpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1lZGl0KTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcclxcbiAgKiB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDpyb290IHtcXHJcXG4gICAgLS1ncm91bmQ6IHJnYigxODEsIDE4MywgMTgxKTtcXHJcXG4gICAgLS1kb25lOiByZ2IoMjM0LCAyNDAsIDIzNCk7XFxyXFxuICAgIC0tYm9yZGVyOiBibGFjaztcXHJcXG4gICAgLS1pdGVtOiByZ2IoMTk2LCAxOTEsIDE5MSk7XFxyXFxuICAgIC0tZWRpdDogI2VjZTVlNTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGJvZHkge1xcclxcbiAgICBmb250LWZhbWlseTogJ0ZpZ3RyZWUnLCBzYW5zLXNlcmlmO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnRvZG8tY29udGFpbmVyIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB0b3A6IDEwMHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgIHdpZHRoOiA0MCU7XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWdyb3VuZCk7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IHJnYmEoNTAsIDUwLCA5MywgMC4yNSkgMXB4IDUwcHggMTAwcHggLTIwcHgsIHJnYmEoMCwgMCwgMCwgMC4zKSAxcHggMzBweCA2MHB4IC0zMHB4LCByZ2JhKDEwLCAzNywgNjQsIDAuMzUpIDFweCAtMnB4IDZweCAxcHggaW5zZXQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaGVhZGluZyB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaGVhZGluZyAuZmEtYXJyb3dzLXJvdGF0ZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmhlYWRpbmcgLmZhLWFycm93cy1yb3RhdGU6aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaGVhZGluZyBwIHtcXHJcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmVudGVyLXRleHQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZW50ZXItdGV4dCBidXR0b24ge1xcclxcbiAgICB3aWR0aDogNDVweDtcXHJcXG4gICAgaGVpZ2h0OiA0NXB4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyb3VuZCk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZW50ZXItdGV4dCAuZmEtY2lyY2xlLWFycm93LWxlZnQge1xcclxcbiAgICBmb250LXNpemU6IDQwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZW50ZXItdGV4dCAuZmEtY2lyY2xlLWFycm93LWxlZnQ6aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICB1bCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIHVsIC5jbGVhciB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZmEtY2lyY2xlLXhtYXJrIHtcXHJcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHJpZ2h0OiA0MHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmZhLXRpbWVzIHtcXHJcXG4gICAgd2lkdGg6IDIwcHg7XFxyXFxuICAgIGhlaWdodDogMjBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmZhLXRpbWVzOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmZhLXRpbWVzOmFjdGl2ZSB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIHVsIC5jbGVhcjpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5mYS1jaXJjbGUtdXAtbGVmdCB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICB1bCAudGV4dCB7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgICBwYWRkaW5nOiAyNXB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC50b2RvIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC50b2RvIGxpIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taXRlbSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDE1cHggMTBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnRvZG8gbGkgZGl2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiA3cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudG9kbyAuY29tcGxldGUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTMsIDI1Myk7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcclxcbiAgICBjb2xvcjogcmdiKDAsIDAsIDApO1xcclxcbiAgfVxcclxcblxcclxcbiAgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxyXFxuICAgIHdpZHRoOiAyNXB4O1xcclxcbiAgICBoZWlnaHQ6IDI1cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQge1xcclxcbiAgICB3aWR0aDogMjVweDtcXHJcXG4gICAgaGVpZ2h0OiAyNXB4O1xcclxcbiAgICBjbGlwLXBhdGg6IGNpcmNsZSg0MCUgYXQgNTAlIDUwJSk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudG9kbyBsaSBidXR0b24ge1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taXRlbSk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudG9kbyBsaSBzcGFuIHtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBwYWRkaW5nOiA0cHg7XFxyXFxuICAgIHRyYW5zaXRpb246IHZhcigtLWVkaXQpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnRvZG8gbGkgc3Bhbjpmb2N1cyB7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWVkaXQpO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1lZGl0KTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC50b2RvIGxpIHNwYW5bY29udGVudGVkaXRhYmxlXTpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWVkaXQpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsMEJBQTBCO0VBQzFCLGVBQWU7RUFDZiwwQkFBMEI7RUFDMUIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiw0QkFBNEI7RUFDNUIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsY0FBYztFQUNkLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsOElBQThJO0FBQ2hKOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0VBQ1osK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdB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RUFDckI7O0VBRUE7SUFDRSw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFFBQVE7RUFDVjs7RUFFQTtJQUNFLG9DQUFvQztJQUNwQyw2QkFBNkI7SUFDN0IsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUNBQWlDO0VBQ25DOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGVBQWU7SUFDZiw2QkFBNkI7RUFDL0I7O0VBRUE7SUFDRSxZQUFZO0lBQ1osWUFBWTtJQUNaLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLDZCQUE2QjtJQUM3Qix1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSx1QkFBdUI7RUFDekI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvZm9udC1hd2Vzb21lLzYuNC4wL2Nzcy9hbGwubWluLmNzc1xcXCIpO1xcclxcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUZpZ3RyZWU6aXRhbCx3Z2h0QDAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzEsMzAwJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbjpyb290IHtcXHJcXG4gIC0tZ3JvdW5kOiByZ2IoMTgxLCAxODMsIDE4MSk7XFxyXFxuICAtLWRvbmU6IHJnYigyMzQsIDI0MCwgMjM0KTtcXHJcXG4gIC0tYm9yZGVyOiBibGFjaztcXHJcXG4gIC0taXRlbTogcmdiKDE5NiwgMTkxLCAxOTEpO1xcclxcbiAgLS1lZGl0OiAjZWNlNWU1O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnRmlndHJlZScsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWNvbnRhaW5lciB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBwYWRkaW5nOiA2MHB4IDEwcHggMTBweCAxMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncm91bmQpO1xcclxcbiAgYm94LXNoYWRvdzogcmdiYSg1MCwgNTAsIDkzLCAwLjI1KSAxcHggNTBweCAxMDBweCAtMjBweCwgcmdiYSgwLCAwLCAwLCAwLjMpIDFweCAzMHB4IDYwcHggLTMwcHgsIHJnYmEoMTAsIDM3LCA2NCwgMC4zNSkgMXB4IC0ycHggNnB4IDFweCBpbnNldDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRpbmcge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRpbmcgLmZhLWFycm93cy1yb3RhdGUge1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGluZyAuZmEtYXJyb3dzLXJvdGF0ZTpob3ZlciB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5oZWFkaW5nIHAge1xcclxcbiAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmVudGVyLXRleHQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZW50ZXItdGV4dCBidXR0b24ge1xcclxcbiAgd2lkdGg6IDQ1cHg7XFxyXFxuICBoZWlnaHQ6IDQ1cHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncm91bmQpO1xcclxcbn1cXHJcXG5cXHJcXG4uZW50ZXItdGV4dCAuZmEtY2lyY2xlLWFycm93LWxlZnQge1xcclxcbiAgZm9udC1zaXplOiA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZW50ZXItdGV4dCAuZmEtY2lyY2xlLWFycm93LWxlZnQ6aG92ZXIge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG51bCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG51bCAuY2xlYXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4uZmEtY2lyY2xlLXhtYXJrIHtcXHJcXG4gIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHJpZ2h0OiA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZmEtdGltZXMge1xcclxcbiAgd2lkdGg6IDIwcHg7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5mYS10aW1lczpob3ZlciB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5mYS10aW1lczphY3RpdmUge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xcclxcbn1cXHJcXG5cXHJcXG51bCAuY2xlYXI6aG92ZXIge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZmEtY2lyY2xlLXVwLWxlZnQge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxudWwgLnRleHQge1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIGhlaWdodDogMzBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gIHBhZGRpbmc6IDI1cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kbyB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udG9kbyBsaSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pdGVtKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgcGFkZGluZzogMTVweCAxMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50b2RvIGxpIGRpdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogN3B4O1xcclxcbn1cXHJcXG5cXHJcXG4udG9kbyAuY29tcGxldGUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjUzLCAyNTMpO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxyXFxuICBjb2xvcjogcmdiKDAsIDAsIDApO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXHJcXG4gIHdpZHRoOiAyNXB4O1xcclxcbiAgaGVpZ2h0OiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQge1xcclxcbiAgd2lkdGg6IDI1cHg7XFxyXFxuICBoZWlnaHQ6IDI1cHg7XFxyXFxuICBjbGlwLXBhdGg6IGNpcmNsZSg0MCUgYXQgNTAlIDUwJSk7XFxyXFxufVxcclxcblxcclxcbi50b2RvIGxpIGJ1dHRvbiB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDI0cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pdGVtKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8gbGkgc3BhbiB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiA0cHg7XFxyXFxuICB0cmFuc2l0aW9uOiB2YXIoLS1lZGl0KTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8gbGkgc3Bhbjpmb2N1cyB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1lZGl0KTtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLWVkaXQpO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kbyBsaSBzcGFuW2NvbnRlbnRlZGl0YWJsZV06aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tZWRpdCk7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXHJcXG4gICoge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICB9XFxyXFxuXFxyXFxuICA6cm9vdCB7XFxyXFxuICAgIC0tZ3JvdW5kOiByZ2IoMTgxLCAxODMsIDE4MSk7XFxyXFxuICAgIC0tZG9uZTogcmdiKDIzNCwgMjQwLCAyMzQpO1xcclxcbiAgICAtLWJvcmRlcjogYmxhY2s7XFxyXFxuICAgIC0taXRlbTogcmdiKDE5NiwgMTkxLCAxOTEpO1xcclxcbiAgICAtLWVkaXQ6ICNlY2U1ZTU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBib2R5IHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdGaWd0cmVlJywgc2Fucy1zZXJpZjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC50b2RvLWNvbnRhaW5lciB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgdG9wOiAxMDBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICB3aWR0aDogNDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ncm91bmQpO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBib3gtc2hhZG93OiByZ2JhKDUwLCA1MCwgOTMsIDAuMjUpIDFweCA1MHB4IDEwMHB4IC0yMHB4LCByZ2JhKDAsIDAsIDAsIDAuMykgMXB4IDMwcHggNjBweCAtMzBweCwgcmdiYSgxMCwgMzcsIDY0LCAwLjM1KSAxcHggLTJweCA2cHggMXB4IGluc2V0O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmhlYWRpbmcge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmhlYWRpbmcgLmZhLWFycm93cy1yb3RhdGUge1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5oZWFkaW5nIC5mYS1hcnJvd3Mtcm90YXRlOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmhlYWRpbmcgcCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5lbnRlci10ZXh0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmVudGVyLXRleHQgYnV0dG9uIHtcXHJcXG4gICAgd2lkdGg6IDQ1cHg7XFxyXFxuICAgIGhlaWdodDogNDVweDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncm91bmQpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmVudGVyLXRleHQgLmZhLWNpcmNsZS1hcnJvdy1sZWZ0IHtcXHJcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmVudGVyLXRleHQgLmZhLWNpcmNsZS1hcnJvdy1sZWZ0OmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgdWwge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICB9XFxyXFxuXFxyXFxuICB1bCAuY2xlYXIge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmZhLWNpcmNsZS14bWFyayB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICByaWdodDogNDBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5mYS10aW1lcyB7XFxyXFxuICAgIHdpZHRoOiAyMHB4O1xcclxcbiAgICBoZWlnaHQ6IDIwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5mYS10aW1lczpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5mYS10aW1lczphY3RpdmUge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICB1bCAuY2xlYXI6aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZmEtY2lyY2xlLXVwLWxlZnQge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgdWwgLnRleHQge1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gICAgcGFkZGluZzogMjVweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudG9kbyB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudG9kbyBsaSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWl0ZW0pO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgICBwYWRkaW5nOiAxNXB4IDEwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC50b2RvIGxpIGRpdiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogN3B4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnRvZG8gLmNvbXBsZXRlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjUzLCAyNTMpO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXHJcXG4gICAgY29sb3I6IHJnYigwLCAwLCAwKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcclxcbiAgICB3aWR0aDogMjVweDtcXHJcXG4gICAgaGVpZ2h0OiAyNXB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkIHtcXHJcXG4gICAgd2lkdGg6IDI1cHg7XFxyXFxuICAgIGhlaWdodDogMjVweDtcXHJcXG4gICAgY2xpcC1wYXRoOiBjaXJjbGUoNDAlIGF0IDUwJSA1MCUpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnRvZG8gbGkgYnV0dG9uIHtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBmb250LXNpemU6IDI0cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWl0ZW0pO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnRvZG8gbGkgc3BhbiB7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgcGFkZGluZzogNHB4O1xcclxcbiAgICB0cmFuc2l0aW9uOiB2YXIoLS1lZGl0KTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC50b2RvIGxpIHNwYW46Zm9jdXMge1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1lZGl0KTtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tZWRpdCk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudG9kbyBsaSBzcGFuW2NvbnRlbnRlZGl0YWJsZV06aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1lZGl0KTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBhZGRUYXNrIGZyb20gJy4uL21vZHVsZS9hZGRpbmcuanMnO1xyXG5pbXBvcnQgY3JlYXRlVGFzayBmcm9tICcuLi9tb2R1bGUvZGlzcGxheS5qcyc7XHJcbmltcG9ydCB7IHJlbW92ZUNvbXBsZXRlZFRhc2ssIHJlbW92ZVRhc2sgfSBmcm9tICcuLi9tb2R1bGUvcmVtb3ZpbmcuanMnO1xyXG5pbXBvcnQgeyB1cGRhdGVUYXNrIH0gZnJvbSAnLi4vbW9kdWxlL3VwZGF0ZS5qcyc7XHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5cclxuY29uc3QgdG9kb0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW50ZXItdGV4dCcpO1xyXG5jb25zdCBtYWluSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGV4dCcpO1xyXG5jb25zdCB0b2RvTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvJyk7XHJcbmNvbnN0IGNsZWFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsZWFyJyk7XHJcbmNvbnN0IHJlZnJlc2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmEtYXJyb3dzLXJvdGF0ZScpO1xyXG5cclxuY29uc3QgdGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpKSB8fCBbXTtcclxuXHJcbmlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKSkge1xyXG4gIHRhc2tzLm1hcCgodGFzaykgPT4gY3JlYXRlVGFzayh0YXNrKSk7XHJcbiAgLyogZXNsaW50IG5vLXVzZWxlc3MtcmV0dXJuOiBcImVycm9yXCIgKi9cclxufVxyXG5cclxuaWYgKHRhc2tzIDwgMSkge1xyXG4gIGNsZWFyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbn0gZWxzZSB7XHJcbiAgY2xlYXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbn1cclxuXHJcbnRvZG9MaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xyXG4gIGlmIChlLmtleUNvZGUgPT09IDEzKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfVxyXG59KTtcclxuXHJcbmNsZWFyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgcmVtb3ZlQ29tcGxldGVkVGFzayh0YXNrcyk7XHJcbn0pO1xyXG5cclxucmVmcmVzaC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxufSk7XHJcblxyXG50b2RvRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBhZGRUYXNrKHRhc2tzLCBtYWluSW5wdXQsIHRvZG9Gb3JtKTtcclxufSk7XHJcblxyXG50b2RvTGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZmEtdGltZXMnKSkge1xyXG4gICAgY29uc3QgdGFza0lkID0gZS50YXJnZXQuY2xvc2VzdCgnbGknKS5pZDtcclxuICAgIHJlbW92ZVRhc2sodGFza0lkLCB0YXNrcyk7XHJcbiAgfVxyXG59KTtcclxuXHJcbnRvZG9MaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGUpID0+IHtcclxuICBjb25zdCB0YXNrSWQgPSBlLnRhcmdldC5jbG9zZXN0KCdsaScpLmlkO1xyXG4gIHVwZGF0ZVRhc2sodGFza0lkLCBlLnRhcmdldCwgdGFza3MpO1xyXG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=