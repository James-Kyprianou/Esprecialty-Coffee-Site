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
