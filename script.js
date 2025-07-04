// Setup Event Listener for Page Load
document.addEventListener('DOMContentLoaded', function () {
    // Select DOM Elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Create the addTask Function
    function addTask() {
        const taskText = taskInput.value.trim(); // retrieve and trim the input value

        if (taskText !== "") {
            // Task Creation and Removal

            // Create a new li element. Set its textContent to taskText.
            const li = document.createElement('li');
            li.textContent = taskText;

            // Create a new button element for removing the task.
            // Set its textContent to “Remove”, and give it a class name of ‘remove-btn’.
            const removeButton = document.createElement('button');
            removeButton.textContent = "Remove";
            removeButton.className = "remove-btn";

            // Assign an onclick event to the remove button that, when triggered, removes the li element from taskList.
            removeButton.onclick = function () {
                taskList.removeChild(li);
            };

            // Append the remove button to the li element
            li.appendChild(removeButton);

            // Append the li to taskList
            taskList.appendChild(li);

            // Clear the task input field
            taskInput.value = "";
        } else {
            alert("Please enter a task.");
        }
    }

    // Attach Event Listeners

    // Add an event listener to addButton that calls addTask when the button is clicked.
    addButton.addEventListener('click', addTask);

    // Add an event listener to taskInput for the ‘keypress’ event to allow tasks to be added by pressing the “Enter” key.
    taskInput.addEventListener('keypress', function (event) {
        // Inside this event listener, check if event.key is equal to ‘Enter’ before calling addTask.
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
