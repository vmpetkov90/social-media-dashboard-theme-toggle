// Select elements
const switchButton = document.querySelector('#mode-switch');
const root = document.documentElement;

// Load saved theme on page load
if (localStorage.getItem('theme') === 'dark') {
    root.classList.add('dark-mode');
}

// Toggle theme on click
switchButton.addEventListener('click', () => {
    root.classList.toggle('dark-mode');

    // Save preference
    if (root.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});
