function toggleSidebar() {
    const sidebarContent = document.querySelector('.sidebar-content');
    const toggleButton = document.querySelector('.sidebar-toggle');
  
    sidebarContent.classList.toggle('active');
    toggleButton.classList.toggle('active');
  }
  
  function closeSidebar() {
    const sidebarContent = document.querySelector('.sidebar-content');
    const toggleButton = document.querySelector('.sidebar-toggle');
  
    if (window.innerWidth <= 767) {
      sidebarContent.classList.remove('active');
      toggleButton.classList.remove('active');
    }
  }
  
  let currentExpandedItem = null;
  
  // Handle clicks on week links to toggle expand/collapse
  document.querySelectorAll('.collapsible-link').forEach(link => {
    link.addEventListener('click', function(e) {
      const parentItem = link.closest('.sidebar-item');
      const alreadyExpanded = parentItem.classList.contains('expanded');
  
      if (!alreadyExpanded) {
        // Collapse previously expanded week if different
        if (currentExpandedItem && currentExpandedItem !== parentItem) {
          currentExpandedItem.classList.remove('expanded');
          const oldArrow = currentExpandedItem.querySelector('.arrow');
          if (oldArrow) oldArrow.style.transform = "rotate(0deg)";
        }
  
        // Expand clicked week
        parentItem.classList.add('expanded');
        const arrow = link.querySelector('.arrow');
        if (arrow) arrow.style.transform = "rotate(90deg)";
        
        currentExpandedItem = parentItem;
  
        e.preventDefault(); // Prevent navigation so it expands instead
      } else {
        // If already expanded, allow navigation (go to link) and close sidebar on mobile
        closeSidebar();
      }
    });
  });
  
  // Event delegation for all links inside sidebar-content (including days)
  document.querySelector('.sidebar-content').addEventListener('click', function(event) {
    const clickedLink = event.target.closest('a');
    if (!clickedLink) return; // Ignore clicks outside links
  
    // If clicked a week link, ignore here to not interfere with expand/collapse logic
    if (clickedLink.classList.contains('collapsible-link')) return;
  
    // For any other link (like day links), close sidebar on mobile
    closeSidebar();
  });
  