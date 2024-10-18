
// Function to toggle the sidebar
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  if (sidebar.style.left === '-250px' || sidebar.style.left === '') {
      sidebar.style.left = '0';
  } else {
      sidebar.style.left = '-250px';
  }
}

// Highlight active link and close sidebar on link click (for mobile)
const navLinks = document.querySelectorAll('#sidebar ul li a');

navLinks.forEach(link => {
  link.addEventListener('click', function() {
      // Remove 'active' class from all links
      navLinks.forEach(lnk => lnk.classList.remove('active'));
      // Add 'active' class to the clicked link
      this.classList.add('active');

      // Close the sidebar on mobile after clicking a link
      if (window.innerWidth <= 768) {
          document.getElementById('sidebar').style.left = '-250px';
      }
  });
});



