const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const closeMenu = document.getElementById('closeMenu');

// Open menu with animation
menuToggle.addEventListener('click', () => {
    mobileMenu.classList.remove('translate-y-full'); // Remove hidden position
    mobileMenu.classList.add('translate-y-0'); // Show menu with animation
});

// Close menu with animation
closeMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('translate-y-0'); // Hide menu with animation
    mobileMenu.classList.add('translate-y-full'); // Move menu out of view
});