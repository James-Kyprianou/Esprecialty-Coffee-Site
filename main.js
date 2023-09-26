document.addEventListener('DOMContentLoaded', function () {
    const fragment = window.location.hash.substring(1); // Get the id without the '#'.
    
    if (fragment) {
        // If there's a fragment, show the corresponding section.
        showMenu(fragment, fragment);

        // Set the active class for the corresponding navigation item.
        setActiveNavItem(fragment);
    } else {
        // If there's no fragment, show the first section of the menu. 
        showMenu('Breakfast', 'Breakfast');

        // Set the active class for the default navigation item.
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
/*
window.addEventListener('load', function () {
  // Show Breakfast section initially and set the title.
  showMenu('Breakfast', 'Breakfast');
});
let currentSection = 'Breakfast';
function showMenu(sectionId, title) {
  // Remove the 'active' class from all navigation items.
  const navItems = document.querySelectorAll('.sub-menu a');
  navItems.forEach(item => item.classList.remove('active'));
  // Add the active class to the clicked navigation item.
  const clickedNavItem = document.querySelector(`[onclick="showMenu('${sectionId}', '${title}')"]`);
  if (clickedNavItem) {
    clickedNavItem.classList.add('active');
  }
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
*/
/*
// Menu Page //
		
document.addEventListener('DOMContentLoaded', function () {
    const fragment = window.location.hash.substring(1); // Get the id without the '#'.
    
    if (fragment) {
        // If correct id, show the corresponding section.
        showMenu(fragment, fragment);
    } else {
        // If there's no correct id, show the first section of the menu. 
        showMenu('Breakfast', 'Breakfast');
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
*/
