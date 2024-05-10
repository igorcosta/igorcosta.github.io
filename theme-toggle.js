// Function to toggle between dark and light theme
function toggleTheme() {
    const body = document.body;
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        body.classList.replace('dark-theme', 'light-theme');
        localStorage.setItem('theme', 'light');
    } else {
        body.classList.replace('light-theme', 'dark-theme');
        localStorage.setItem('theme', 'dark');
    }
}

// Event listener for the theme toggle button
document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

// Check local storage for theme preference and apply it
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.add('light-theme');
    }
});
