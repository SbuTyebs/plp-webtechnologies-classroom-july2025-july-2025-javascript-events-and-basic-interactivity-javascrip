 // Part 1: Dark Mode Toggle 🌙
 const toggleButton = document.getElementById('toggle-button');
 const body = document.body;
 

 toggleButton.addEventListener('click', function() {
  body.classList.toggle('dark-mode');
 });
 

 // Part 2: Counter Feature 🔢
 const decrementButton = document.getElementById('decrement-button');
 const incrementButton = document.getElementById('increment-button');
 const counterValue = document.getElementById('counter-value');
 let count = 0;
 

 decrementButton.addEventListener('click', function() {
  count--;
  counterValue.textContent = count;
 });
 

 incrementButton.addEventListener('click', function() {
  count++;
  counterValue.textContent = count;
 });
 

 // Part 3: FAQ Section ❓
 const faqQuestions = document.querySelectorAll('.faq-question');
 

 faqQuestions.forEach(function(question) {
  question.addEventListener('click', function() {
  const answer = this.nextElementSibling;
  answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
  });
 });
 

 // Part 4: Form Validation ✅
 const contactForm = document.getElementById('contact-form');
 const formMessages = document.getElementById('form-messages');
 

 contactForm.addEventListener('submit', function(event) {
  event.preventDefault();
 

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
 

  if (!validateName(name)) {
  formMessages.textContent = 'Please enter a valid name.';
  return;
  }
 

  if (!validateEmail(email)) {
  formMessages.textContent = 'Please enter a valid email address.';
  return;
  }
 

  if (!validatePassword(password)) {
  formMessages.textContent = 'Password must be at least 8 characters long.';
  return;
  }
 

  formMessages.textContent = 'Form submitted successfully!';
  contactForm.reset();
 });
 

 function validateName(name) {
  return name.length > 0;
 }
 

 function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
 }
 

 function validatePassword(password) {
  return password.length >= 8;
 }
