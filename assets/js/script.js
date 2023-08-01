// const taskInput = document.getElementById('taskInput');
// const addTaskBtn = document.getElementById('addTaskBtn');

// taskInput.addEventListener('keydown', function(event) {
//     if (event.key === 'Enter') {
//         addTask();
//     }
// })

// addTaskBtn.addEventListener('click', function(event) {
//     addTask();
// })

// function addTask() {
//     const text = document.getElementById('addedTask');
//     text.style.display = 'block';
// }

let todoItems = [];

function renderTodo(todo) {
    const list = document.querySelector('.list');

    const isChecked = todo.checked ? 'done': '';
    const node = document.createElement('li');
    node.setAttribute('class', `todo-item ${isChecked}`);
    node.setAttribute('data-key', todo.id);
    node.innerHTML = `
    <input id='${todo.id}' type='checkbox' />
    <label for='${todo.id}' class='tick js-tick'></label>
    <span>${todo.text}</span>
     `;
    
    list.append(node);
}

function addTask(text) {
    const todo = {
        text,
        checked: false,
        id: Date.now()
    };

    todoItems.push(todo);
    renderTodo(todo);
}

const form = document.querySelector('form');
form.addEventListener('submit', event => {
    event.preventDefault();
    const input = document.querySelector('input');

    const text = input.value.trim();
    if (text !== '') {
        addTask(text);
        input.value = '';
        input.focus();
    }
});