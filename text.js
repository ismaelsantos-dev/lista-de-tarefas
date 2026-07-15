let tasks = [];

function addTask() {
    const input = document.getElementById('task-input');
    if (input.value === "") return; // Não adiciona vazio

    const newTask = {
        title: input.value,
        done: false
    };

    tasks.push(newTask);
    input.value = ""; // Limpa o campo
    renderTasks();
}

function renderTasks() {
    const list = document.getElementById('task-list');
    list.innerHTML = ""; // Limpa a lista atual

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <input type="checkbox" ${task.done ? 'checked' : ''} onchange="toggleTask(${index})">
            <span>${task.title}</span>
        `;
        list.appendChild(li);
    });

    updateProgress();
}

function toggleTask(index) {
    tasks[index].done = !tasks[index].done;
    updateProgress();
}

function updateProgress() {
    const total = tasks.length;
    const completed = tasks.filter(t => t.done).length;
    const percent = total === 0 ? 0 : Math.round((completed / total) * 100);
    
    const fill = document.getElementById('progress-fill');
    fill.style.width = percent + "%";
    fill.innerText = percent + "%";
}