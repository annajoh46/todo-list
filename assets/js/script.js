const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');

taskInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
})

addTaskBtn.addEventListener('click', function(event) {
    addTask();
})

function addTask() {
    const text = document.getElementById('addedTask');
    text.style.display = 'block';
}