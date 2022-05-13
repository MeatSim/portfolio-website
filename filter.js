const dropdown = document.getElementById('languages');

const projects = Array.from(document.getElementsByClassName('project'));

const filter = (language) => {
    projects.forEach(project => (project.style.display = 'none'));
    Array.from(document.getElementsByClassName(`${language}`)).forEach(project => { project.style.display = 'block' });
}

dropdown.addEventListener('change', (event) => filter(event.target.value));