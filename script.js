// script.js

// Grab the form element by ID
const icuForm = document.getElementById('icuForm');

// Listen for the 'submit' event on the form
icuForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevents the page from refreshing

  // Use FormData to collect input values
  const formData = new FormData(icuForm);

  // Log the data to the console for demonstration
  console.log('--- ICU Progress Note Data ---');
  for (let [name, value] of formData.entries()) {
    console.log(`${name}: ${value}`);
  }

  // You can add your own logic here, for example:
  // 1) Send data to a server via fetch/AJAX
  // 2) Save data to localStorage
  // 3) Display a success message, etc.

  alert('ICU Progress Note submitted! Check your console for the data.');
});
