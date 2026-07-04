function addTask() {
    let taskInput = document.getElementById('taskInput');
    let taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a valid task!");
        return;
    }

    let taskList = document.getElementById('taskList');

    let li = document.createElement('li');
    li.style.display = "flex";
    li.style.justifyContent = "between";
    li.style.alignItems = "center";
    li.style.padding = "10px";
    li.style.marginBottom = "8px";
    li.style.backgroundColor = "#2a2a2a";
    li.style.borderRadius = "6px";
    li.style.borderLeft = "4px solid #00adb5"; // Neon accent border

    li.innerHTML = `
        <span style="flex: 1; text-align: left; cursor: pointer;" onclick="toggleComplete(this)">${taskText}</span>
        <button style="background-color: #ff4444; padding: 6px 12px; font-size: 12px; border-radius: 4px;" onclick="deleteTask(this)">Delete</button>
    `;

    
    taskList.appendChild(li);

    // 7. Task add hone ke baad input box ko wapas khali kar dena
    taskInput.value = "";
}

// 2. Task ko delete karne ka function
function deleteTask(button) {
    // Button ke parent element (li) ko dhoodh kar use list se remove karna
    let li = button.parentElement;
    li.remove();
}

// 3. Task complete hone par strike-through (cut line) lagane ka function
function toggleComplete(taskSpan) {
    if (taskSpan.style.textDecoration === "line-through") {
        taskSpan.style.textDecoration = "none";
        taskSpan.style.opacity = "1";
    } else {
        taskSpan.style.textDecoration = "line-through";
        taskSpan.style.opacity = "0.5"; // Task halka dhundhla ho jayega
    }
}
