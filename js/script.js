document.addEventListener('DOMContentLoaded', () => {
    const taskBoard = document.getElementById('task-board');

    fetch('data/tasks.json')
        .then(response => response.json())
        .then(tasks => {
            tasks.forEach(task => {
                const card = document.createElement('div');
                card.className = 'task-card';

                const taskPara = document.createElement('p');
                taskPara.textContent = task.task;

                const assigneePara = document.createElement('p');
                assigneePara.className = 'assignee';
                assigneePara.textContent = `Assignee: ${task.assignee}`;

                card.appendChild(taskPara);
                card.appendChild(assigneePara);
                taskBoard.appendChild(card);
            });
        })
        .catch(error => console.error('Error fetching tasks:', error));
});