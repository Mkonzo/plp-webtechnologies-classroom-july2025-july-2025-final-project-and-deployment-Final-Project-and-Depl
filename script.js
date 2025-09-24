// script.js

// --- Password Visibility Toggle (guarded) ---
// Toggles the type attribute of password input between 'password' and 'text'
const passwordInput = document.getElementById('password');
const togglePasswordBtn = document.getElementById('toggle-password-btn');
if (passwordInput && togglePasswordBtn) {
  togglePasswordBtn.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      togglePasswordBtn.textContent = 'Hide Password';
    } else {
      passwordInput.type = 'password';
      togglePasswordBtn.textContent = 'Show Password';
    }
  });
}

// --- Background Color Changer (guarded) ---
// Changes background color of the color-changer section to a random color on button click
const colorBtn = document.getElementById('color-btn');
const colorSection = document.getElementById('color-changer');

function getRandomColor() {
  // Generates a random hex color
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

if (colorBtn && colorSection) {
  colorBtn.addEventListener('click', () => {
    const newColor = getRandomColor();
    colorSection.style.backgroundColor = newColor;
  });
}

// --- Custom Form Validation (guarded) ---
// Prevents form submission if fields are empty or invalid and shows error message
const form = document.getElementById('custom-form');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const ageInput = document.getElementById('age');
const formMessage = document.getElementById('form-message');

if (form && usernameInput && emailInput && ageInput && formMessage) {
  form.addEventListener('submit', (event) => {
    event.preventDefault(); // prevent default submission

    // Clear previous message
    formMessage.textContent = '';

    // Basic validation checks
    if (usernameInput.value.trim() === '') {
      formMessage.textContent = 'Please enter your username.';
      usernameInput.focus();
      return;
    }

    if (!validateEmail(emailInput.value.trim())) {
      formMessage.textContent = 'Please enter a valid email address.';
      emailInput.focus();
      return;
    }

    if (!validateAge(ageInput.value.trim())) {
      formMessage.textContent = 'Please enter a valid age (between 1 and 120).';
      ageInput.focus();
      return;
    }

    // If validation passes, you can proceed (e.g., submit data or show success)
    formMessage.style.color = 'green';
    formMessage.textContent = 'Form submitted successfully!';
    form.reset();
  });
}

// Helper function to validate email format (simple regex)
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Helper function to validate age (must be number between 1 and 120)
function validateAge(age) {
  const ageNum = Number(age);
  return ageNum > 0 && ageNum <= 120;
}

// --- Mobile Navigation Toggle ---
const navToggle = document.getElementById('nav-toggle');
const siteNav = document.querySelector('.site-nav');
if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    siteNav.classList.toggle('open');
  });
}

// --- Dynamic Year in Footer ---
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
