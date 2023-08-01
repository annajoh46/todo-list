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
    const item = document.querySelector(`[data-key='${todo.id}']`);

    if (todo.deleted) {
        item.remove();
        return
    }

    const isChecked = todo.checked ? 'done': '';
    const node = document.createElement('li');
    node.setAttribute('class', `todo-item ${isChecked}`);
    node.setAttribute('data-key', todo.id);
    node.innerHTML = `
    <input id='${todo.id}' type='checkbox' class='inputCheckbox'/>
    <label for='${todo.id}' class='tick js-tick'></label>
    <span class='text'>${todo.text}</span>
    <button class='delete-todo border border-0 bg-transparent'><img src='./assets/img/delete.png'></button>
     `;
    
    if (item) {
        list.replaceChild(node, item);
    } else {
        list.append(node);
    }
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

function toggleDone(key) {
    const index = todoItems.findIndex(item => item.id === Number(key));
    todoItems[index].checked = !todoItems[index].checked;
    renderTodo(todoItems[index]);
}

function deleteTodo(key) {
    const index = todoItems.findIndex(item => item.id === Number(key));
    const todo = {
        deleted: true,
        ...todoItems[index]
    };
    
    todoItems = todoItems.filter(item => item.id !== Number(key));
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

const list = document.querySelector('.list');
list.addEventListener('click', event => {
    if (event.target.classList.contains('tick')) {
        const itemKey = event.target.parentElement.dataset.key;
        toggleDone(itemKey);
    }

    if (event.target.classList.contains('delete-todo')) {
        const itemKey = event.target.parentElement.dataset.key;
        deleteTodo(itemKey);
    }
})