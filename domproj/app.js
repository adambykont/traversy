const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

let tasksArray;

function storeTaskInLocalStorage(taskTekst) {
    if (localStorage.getItem('tasks') === null) {
        tasksArray = [];
    } else {
        tasksArray = JSON.parse(localStorage.getItem('tasks'));
    }

    tasksArray.push(taskTekst);
    localStorage.setItem('tasks', JSON.stringify(tasksArray));
}

function addTask(e) {
    if (taskInput.value === '') {
        alert('Add a task');
    }

    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(taskInput.value));
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>';
    li.appendChild(link);
    taskList.appendChild(li);
    storeTaskInLocalStorage(taskInput.value);

    taskInput.value = '';

    e.preventDefault();
}

function removeTask(e) {
    if (e.target.parentElement.classList.contains("delete-item")) {
        let toRemove = e.target.parentElement.parentElement;
        toRemove.parentElement.removeChild(toRemove);
        let searchElement = e.target.parentElement.parentElement.textContent;
        let idx = tasksArray.indexOf(searchElement);
        tasksArray.splice(idx, 1);
        localStorage.setItem('tasks', JSON.stringify(tasksArray));
        e.preventDefault();
    }
}

function clearTasks(e) {
    while (taskList.firstChild) {
        taskList.firstChild.parentElement.removeChild(taskList.firstChild);
    }
    tasksArray = [];
    localStorage.setItem('tasks', JSON.stringify(tasksArray));
    e.preventDefault();
}

function filterTasks(e) {
    let text = e.target.value;


    let slider = taskList.firstElementChild;
    while (slider) {
        taskTekst = slider.textContent;
        if (taskTekst.toLocaleLowerCase().match(text)) {
            slider.style.display = 'block';
        } else {
            slider.style.display = 'none';
        }
        slider = slider.nextElementSibling;
    }


    e.preventDefault();
}

function getTasks() {
    if (localStorage.getItem('tasks') === null) {
        tasksArray = [];
    } else {
        tasksArray = JSON.parse(localStorage.getItem('tasks'));
    }

    tasksArray.forEach(t => {
        const li = document.createElement('li');
        li.className = 'collection-item';
        li.appendChild(document.createTextNode(t));
        const link = document.createElement('a');
        link.className = 'delete-item secondary-content';
        link.innerHTML = '<i class="fa fa-remove"></i>';
        li.appendChild(link);
        taskList.appendChild(li);
    });
}

function loadEventListeners() {
    form.addEventListener('submit', addTask);
    taskList.addEventListener('click', removeTask);
    clearBtn.addEventListener('click', clearTasks);
    filter.addEventListener('keyup', filterTasks);
    document.addEventListener('DOMContentLoaded', getTasks);
}

loadEventListeners();

