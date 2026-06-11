// Grab DOM elements
const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');
const currentDateEl = document.getElementById('current-date');

// Set modern formatted date string
const options = { weekday: 'long', month: 'short', day: 'numeric' };
currentDateEl.innerText = new Date().toLocaleDateString('en-US', options);

function addTask() {
    const taskText = todoInput.value.trim();

    if (taskText === "") return;

    // Create container list element
    const li = document.createElement('li');

    // Create left wrapper for interactive group click
    const taskContent = document.createElement('div');
    taskContent.classList.add('task-content');

    // Create custom circle checkbox design
    const checkbox = document.createElement('span');
    checkbox.classList.add('custom-checkbox');

    // Create label text element
    const textSpan = document.createElement('span');
    textSpan.classList.add('task-text');
    textSpan.innerText = taskText;

    // Structure elements together 
    taskContent.appendChild(checkbox);
    taskContent.appendChild(textSpan);
    li.appendChild(taskContent);

    // Create modern functional SVG trash button
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
        </svg>
    `;
    li.appendChild(deleteBtn);

    // Action: Clicking item completes/uncompletes task
    taskContent.addEventListener('click', () => {
        li.classList.toggle('completed');
    });

    // Action: Delete handling
    deleteBtn.addEventListener('click', () => {
        li.style.opacity = '0';
        li.style.transform = 'scale(0.95)';
        setTimeout(() => li.remove(), 200); // Wait for transition out
    });

    // Append configured elements to dashboard list
    todoList.appendChild(li);

    // Housekeeping clear actions
    todoInput.value = "";
    todoInput.focus();
}

// Global click and entry bindings
addBtn.addEventListener('click', addTask);
todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
});