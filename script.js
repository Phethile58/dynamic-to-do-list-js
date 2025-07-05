// Wait for the DOM to load before running the script
document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('add-task-btn'); // Select Add Task button
    const taskInput = document.getElementById('task-input'); // Select input field
    const taskList = document.getElementById('task-list'); // Select task list


    // Load tasks from Local Storage when the page loads
    loadTasks();


    // Function to load tasks from Local Storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]'); // Retrieve tasks from  Local Storage
        storedTasks.forEach(taskText => addTask(taskText, false)); //Add each task to the list (dont save again)
    }

    // Function to add a new task
    function addTask(taskText, save = true) {
        // Retrieve and trim the input value if not loading from storage
        if (save) {
            taskText = taskInput.value.trim(); // Get the input value only when adding new tasks
        }
        
        // Check if the input is empty
        if (taskText === "") {
            alert("Please enter a task."); // Alert if empty
            return;
        }

        // Step 1: Create a new list item (li) element
        const li = document.createElement('li'); // Create a new <li> element
        li.classList.add('task-item');

        // Step 2: Set the text content of the list item to the task text
        li.textContent = taskText; // Assign the taskText to the <li> element


        // Step 3: Create a new button element for removing the task
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove"; // Set button text to "Remove"
        removeButton.classList.add('remove-btn'); // Use classList.add to assign the 'remove-btn' class

        // Step 4: Assign an onclick event to the remove button 
        removeButton.onclick = function () {
            taskList.removeChild(li); // Remove the list item
            removeTaskFromStorage(taskText); // Remove the task from local storage
        };

        // Step 5: Append the remove button to the list item 
        li.appendChild(removeButton);

        // Step 6: Append the list item to the task list
        taskList.appendChild(li);

        // Step 7: Clear the input field by setting taskInput.value to an empty string
        if (save) {
            taskInput.value = ''; // Clear the input field for the next task
            saveTaskToStorage(taskText);
        }
    
    }

    // Function to save a task to local storage
    function saveTaskToStorage(taskText) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]'); // Retrieve existing tasks
        storedTasks.push(taskText); // Add new task to the array
        localStorage.setItem('tasks', JSON.stringify(storedTasks)); // Save updated tasks back to Local Storage
    }


    // Function to remove a task from Local Storage
    function removeTaskFromStorage(taskText) {
        let storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]'); // Retrieve existing tasks
        storedTasks = storedTasks.filter(task => task !== taskText); // Remove the task from the array
        localStorage.setItem('tasks', JSON.stringify(storedTasks)); // Save updated tasks back to Local Storage
    }

    // Add event listener to the Add Task button
    addButton.addEventListener('click', () =>  addTask('', true));

    // Add event listener for pressing "Enter" key in input
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask('', true); // Call addTask if Enter is pressed
        }
    });
});