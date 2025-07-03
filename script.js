// Run the script only after the HTML document has fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // === Select DOM Elements ===
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // === Function to add a task ===
    function addTask() {
        // Get the input value and remove whitespace
        const taskText = taskInput.value.trim();

        // Alert user if input is empty
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create new <li> for the task
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = "remove-btn";

        // Add event listener to remove the task on button click
        removeButton.onclick = function () {
            taskList.removeChild(li);
        };

        // Append the remove button to the <li>
        li.appendChild(removeButton);

        // Append the new task to the task list
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = "";
    }

    // === Add task when button is clicked ===
    addButton.addEventListener('click', addTask);

    // === Add task when "Enter" key is pressed ===
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Optional: you can also run an initial function on load if needed
    // For now, we don't need to call addTask on load — it only acts when user interacts
});
