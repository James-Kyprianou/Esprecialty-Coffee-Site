/*
// Menu page functionality. //

document.addEventListener('DOMContentLoaded', function () {
    const sectionId = window.location.hash.substring(1); // Get the id without the #.
    if (sectionId) {
        // If correct id, show the corresponding section.
        showMenu(sectionId, sectionId);

        // Set the active class for the corresponding nav item.
        setActiveNavItem(sectionId);
    } else {
        // If there's no correct id, show the first section of the menu. 
        showMenu('Breakfast', 'Breakfast');

        // Set the active class for the default nav item (Breakfast).
        setActiveNavItem('Breakfast');
    }
});

let currentSection = 'Breakfast';

function showMenu(sectionId, title) {
    // Hide the current section.
    const current = document.getElementById(currentSection);
    if (current) {
        current.style.display = 'none';
    }
    // Show the selected section.
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
        currentSection = sectionId; // Update the current section.
    }
    // Set the title.
    document.getElementById('menuTitle').textContent = title;
}

function setActiveNavItem(sectionId) {
    const navItems = document.querySelectorAll('.nav-link');
    navItems.forEach(item => {
        if (item.getAttribute('data-section') === sectionId) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}
*/
