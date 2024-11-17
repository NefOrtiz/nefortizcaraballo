document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const addTaskButton = document.getElementById('addTaskButton');

    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                ${taskText}
                <button class="delete-btn">Eliminar</button>
            `;
            taskList.appendChild(listItem);
            taskInput.value = "";

            // Agregar funcionalidad al botón de eliminar
            listItem.querySelector('.delete-btn').addEventListener('click', () => {
                listItem.remove();
            });
        }
    });

    // Permitir agregar tarea presionando Enter
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTaskButton.click();
        }
    });
});
