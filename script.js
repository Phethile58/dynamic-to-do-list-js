// Run the script only after the HTML document has fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // === Select DOM Elements ===
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // === Function to add a task ===
    function addTask() {
        // Get the input value and trim whitespace
        const taskText = taskInput.value.trim();

        // Alert user if input is empty
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create new <li> element for the task
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = "remove-btn";

        // Assign onclick event to remove the task
        removeButton.onclick = function () {
            taskList.removeChild(li);
        };

        // Append the remove button to the <li>
        li.appendChild(removeButton);

        // Append the <li> to the task list
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = "";
    }

    // === Event listener for "Add task" when button is click ===
    addButton.addEventListener('click', addTask);

    // ===  Event listener for Enter key press in the input field ===
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
