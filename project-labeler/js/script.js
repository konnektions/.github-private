document.addEventListener('DOMContentLoaded', () => {
    const entryForm = document.getElementById('entry-form');
    const projectInput = document.getElementById('project-input');
    const usernameInput = document.getElementById('username-input');
    const entriesList = document.getElementById('entries-list');

    const getEntries = () => {
        return JSON.parse(localStorage.getItem('project-entries')) || [];
    };

    const saveEntries = (entries) => {
        localStorage.setItem('project-entries', JSON.stringify(entries));
    };

    const renderEntries = () => {
        const entries = getEntries();
        entriesList.innerHTML = '';
        entries.forEach(entry => {
            const li = document.createElement('li');
            li.textContent = `Project: ${entry.project}, Username: ${entry.username}`;
            entriesList.appendChild(li);
        });
    };

    entryForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const newEntry = {
            project: projectInput.value,
            username: usernameInput.value
        };

        const entries = getEntries();
        entries.push(newEntry);
        saveEntries(entries);

        renderEntries();

        projectInput.value = '';
        usernameInput.value = '';
    });

    renderEntries();
});