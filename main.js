window.addEventListener('load', function () {
  // Get the section ID from the anchor in the URL (e.g., '#Beverages')
  const anchor = window.location.hash;

  if (anchor) {
    // Remove the '#' character to get the section ID (e.g., 'Beverages')
    const sectionId = anchor.substring(1);
    // Show the corresponding section and set the title.
    showMenu(sectionId, sectionId);
  } else {
    // If no anchor is present, show the default section (e.g., 'Breakfast')
    showMenu('Breakfast', 'Breakfast');
  }
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
