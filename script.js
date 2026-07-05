function addTask() {
    let taskInput = document.getElementById('taskInput');
    let taskText = taskInput.value.trim()function updateClock() {
    let now = new Date();
    
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';

    
    hours = hours % 12;
    hours = hours ? hours : 12; 


    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    document.getElementById('clock').innerHTML = `${hours}:${minutes}:${seconds} ${ampm}`;

    let realHour = now.getHours(); 
    let greetingText = document.getElementById('greeting');

    if (realHour >= 6 && realHour < 18) {
        document.body.classList.add('day-mode');
        greetingText.innerHTML = "☀️ Good Morning, Pushpraj";
    } else {
        document.body.classList.remove('day-mode');
        greetingText.innerHTML = "🌙 Good Night, Pushpraj";
    }
}


setInterval(updateClock, 1000);

updateClock();;

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
    li.style.borderLeft = "4px solid #00adb5"; 

    li.innerHTML = `
        <span style="flex: 1; text-align: left; cursor: pointer;" onclick="toggleComplete(this)">${taskText}</span>
        <button style="background-color: #ff4444; padding: 6px 12px; font-size: 12px; border-radius: 4px;" onclick="deleteTask(this)">Delete</button>
    `;

    
    taskList.appendChild(li);


    taskInput.value = "";
}

function deleteTask(button) {
    
    let li = button.parentElement;
    li.remove();
}

function toggleComplete(taskSpan) {
    if (taskSpan.style.textDecoration === "line-through") {
        taskSpan.style.textDecoration = "none";
        taskSpan.style.opacity = "1";
    } else {
        taskSpan.style.textDecoration = "line-through";
        taskSpan.style.opacity = "0.5"; 
    }
}
