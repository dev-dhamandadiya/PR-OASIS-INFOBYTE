let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let taskInput = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");
let editId = null;

function handleTask() {
    let obj = {
        task: taskInput.value,
        completed: false
    };

    if (taskInput.value.trim() === "") {
        alert("Please Enter Task");
        return;
    }

    if (editId == null) {
        tasks.push({
            ...obj,
            id: Date.now()
        });

    } else {
        tasks = tasks.map((task) => {
            if (task.id == editId) {
                return {
                    ...task,
                    task: taskInput.value
                }
            }
            return task;
        });
        editId = null;
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
    taskInput.value = "";
}

function displayTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        let row = document.createElement("tr");
        row.innerHTML = `
        <td>${index + 1}</td>
        <td>
    ${task.task}
</td>

<td>
    <span style="
        color:${task.completed ? 'green' : 'orange'};
        font-weight:bold;
    ">
        ${task.completed ? "Completed" : "Pending"}
    </span>
</td>
        <td>
            <button
            class="complete"
            onclick="markComplete(${task.id})">
                Complete
            </button>

            <button
            class="edit"
            onclick="editTask(${task.id})">
                Edit
            </button>

            <button
            class="delete"
            onclick="deleteTask(${task.id})">
                Delete
            </button>
        </td>
        `;
        taskList.appendChild(row);
    });
}

function deleteTask(id) {
    tasks = tasks.filter(
        task => task.id != id
    );
    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );
    displayTasks();
}

function editTask(id) {
    editId = id;
    let task = tasks.find(
        task => task.id == id
    );
    taskInput.value = task.task;
}

function markComplete(id) {
    tasks = tasks.map((task) => {
        if (task.id == id) {
            return {
                ...task,
                completed: !task.completed
            }
        }
        return task;
    });

    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );
    displayTasks();
};
displayTasks();