let tasks = [];
function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const taskItem = document.createElement('li');
        taskItem.classList.add('task');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.completed;
        checkbox.addEventListener('change', () => {
            toggleTask(index);
        });
        const label = document.createElement('label');
        label.textContent = task.name;
        if (task.completed) {
            label.classList.add('completed');
        }
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => {
            deleteTask(index);
        });
        taskItem.appendChild(checkbox);
        taskItem.appendChild(label);
        taskItem.appendChild(deleteBtn);
        taskList.appendChild(taskItem);
    });
}
function addTask() {
    const taskField = document.getElementById('taskField');
    const taskName = taskField.value.trim();
    if (taskName !== '') {
        tasks.push({ name: taskName, completed: false });
        taskField.value = '';
        renderTasks();
    }
}
function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}
function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}
document.addEventListener('DOMContentLoaded', () => {
    renderTasks();
})