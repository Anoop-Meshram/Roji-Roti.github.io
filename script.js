const form = document.getElementById('signupForm');
const message = document.getElementById('message');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  if (email) {
    message.textContent = `Thank you for signing up, ${email}! We will keep you updated.`;
    form.reset();
  } else {
    message.textContent = 'Please enter a valid email address.';
  }
});
