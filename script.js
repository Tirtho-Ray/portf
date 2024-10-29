// Select the theme toggle button and the theme icon from the DOM
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

// Add an event listener to the theme toggle button
themeToggle.addEventListener('click', () => {
    // Toggle the 'dark' and 'light' themes
    document.body.classList.toggle('bg-gray-800'); // Dark background
    document.body.classList.toggle('bg-white');    // Light background

    // Toggle the text color classes based on the theme
    document.body.classList.toggle('text-white');   // Light text for dark theme
    document.body.classList.toggle('text-black');    // Dark text for light theme

    // Toggle icon based on the current theme
    themeIcon.classList.toggle('fa-sun');
    themeIcon.classList.toggle('fa-moon');
});

// Smooth scroll function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}
