// Updated JavaScript - replace your existing script section with this

function toggleSidebar() {
    const sidebarContent = document.querySelector('.sidebar-content');
    const toggleButton = document.querySelector('.sidebar-toggle');
    
    sidebarContent.classList.toggle('active');
    toggleButton.classList.toggle('active');
  }
  
  // Function to close sidebar (for mobile)
  function closeSidebar() {
    const sidebarContent = document.querySelector('.sidebar-content');
    const toggleButton = document.querySelector('.sidebar-toggle');
    
    if (window.innerWidth <= 767) { // Only on mobile
      sidebarContent.classList.remove('active');
      toggleButton.classList.remove('active');
    }
  }
  
  // Existing collapsible functionality
  function toggleCollapse(button) {
    const parentItem = button.closest('.sidebar-item');
    const arrow = button.querySelector('.arrow');
  
    parentItem.classList.toggle('expanded');
  
    if (parentItem.classList.contains('expanded')) {
      arrow.style.transform = "rotate(90deg)";
    } else {
      arrow.style.transform = "rotate(0deg)";
    }
  }
  
  document.querySelectorAll('.collapsible-link').forEach(link => {
    link.addEventListener('click', function(e) {
      const parentItem = link.closest('.sidebar-item');
      const alreadyExpanded = parentItem.classList.contains('expanded');
  
      // If already expanded, navigate and close sidebar on mobile
      if (alreadyExpanded) {
        closeSidebar(); // Close sidebar after navigation
        return;
      }
  
      // Otherwise toggle the expansion
      e.preventDefault(); // prevent nav
      parentItem.classList.toggle('expanded');
  
      const arrow = link.querySelector('.arrow');
      arrow.style.transform = parentItem.classList.contains('expanded') ? "rotate(90deg)" : "rotate(0deg)";
    });
  });
  
  // Close sidebar when clicking on day links (the sub-navigation)
  document.querySelectorAll('.collapsible-content a').forEach(link => {
    link.addEventListener('click', function() {
      closeSidebar(); // Close sidebar when day link is clicked
    });
  });