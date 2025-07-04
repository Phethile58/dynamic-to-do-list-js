// Run the script only after the HTML document has fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // === Select DOM Elements ===
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // === Load tasks from Local Storage ===
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => {
            addTask(taskText, false); // false means don't save again
        });
    }

    // === Save all tasks to Local Storage ===
    function saveTasks() {
        const tasks = [];
        const listItems = taskList.querySelectorAll('li');
        listItems.forEach(li => {
            // Get text content before the remove button
            const taskText = li.firstChild.textContent.trim();
            tasks.push(taskText);
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // === Function to add a task ===
    function addTask(taskText, save = true) {
        // Create new <li> element
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = "remove-btn";

        // On click, remove task and update Local Storage
        removeButton.addEventListener('click', function () {
            taskList.removeChild(li);
            saveTasks(); // update storage after removal
        });

        // Append the remove button to the <li>
        li.appendChild(removeButton);

        // Append the <li> to the task list
        taskList.appendChild(li);

        // Save to Local Storage if not loading from storage
        if (save) {
            saveTasks();
        }
    }

    // === Function to handle user input and call addTask ===
    function handleNewTask() {
        const taskText = taskInput.value.trim();
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }
        addTask(taskText); // default save = true
        taskInput.value = ""; // clear input field
    }

    // === Add task when button is clicked ===
    addButton.addEventListener('click', handleNewTask);

    // === Add task when Enter key is pressed ===
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            handleNewTask();
        }
    });

    // === Load stored tasks on page load ===
    loadTasks();
});
