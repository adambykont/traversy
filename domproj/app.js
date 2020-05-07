const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// load all event listeners

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
    taskInput.value = '';


    e.preventDefault();
}

function removeTask(e) {
    if (e.target.parentElement.classList.contains("delete-item")) {
        let toRemove = e.target.parentElement.parentElement;
        toRemove.parentElement.removeChild(toRemove);
        e.preventDefault();
    }
}

function clearTasks(e) {
    // taskList.innerHTML = '';

    while (taskList.firstChild) {
        taskList.firstChild.parentElement.removeChild(taskList.firstChild);
    }
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

function loadEventListeners() {
    form.addEventListener('submit', addTask);
    taskList.addEventListener('click', removeTask);
    clearBtn.addEventListener('click', clearTasks);
    filter.addEventListener('keyup', filterTasks);
}

loadEventListeners();

