// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu when clicking a link
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
}

// Set current year in footer
const yearElement = document.getElementById('current-year');
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// Form submission handler
function handleFormSubmit(event) {
    event.preventDefault();
    const successMsg = document.getElementById('success-message');
    if (successMsg) {
        successMsg.classList.remove('hidden');
        document.getElementById('inquiry-form').reset();
        setTimeout(() => {
            successMsg.classList.add('hidden');
        }, 6000);
    }
}