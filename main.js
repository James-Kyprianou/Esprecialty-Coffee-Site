// Home page scroll button. //

// Function to hide scroll button when the target element is in view. Also enables the fade animation.
function hideScrollButton() {
    const scrollButton = document.getElementById('scroll-button');
    const scrollTarget = document.getElementById('scroll-target');

    if (scrollButton && scrollTarget) {
        const scrollButtonRect = scrollButton.getBoundingClientRect();
        const scrollTargetRect = scrollTarget.getBoundingClientRect();

        if (scrollButtonRect.bottom < scrollTargetRect.top) {
            scrollButton.classList.add('fade-out');
        } else {
            scrollButton.classList.remove('fade-out');
        }
    }
}

// Function to check if the user has scrolled to the very top of the page.
function scrollToTop() {
    hideScrollButton();
    if (window.scrollY === 0) {
        const scrollButton = document.getElementById('scroll-button');
        if (scrollButton) {
            scrollButton.classList.remove('fade-out');
        }
    }
}

window.addEventListener('scroll', scrollToTop);
hideScrollButton();

// Menu page functionality. //

document.addEventListener('DOMContentLoaded', function () {
    const sectionId = window.location.hash.substring(1); // Get the id without the '#'.
    if (sectionId) {
        // If correct id, show the corresponding section.
        showMenu(sectionId, sectionId);

        // Set the active class for the corresponding nav item.
        setActiveNavItem(sectionId);
    } else {
        // If there's no correct id, show the first section of the menu. 
        showMenu('Breakfast', 'Breakfast');

        // Set the active class for the default nav item. (Breakfast)
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
