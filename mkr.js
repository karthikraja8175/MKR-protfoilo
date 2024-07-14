document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const navbarMenu = document.querySelector('.navbar-menu');
  
    mobileMenu.addEventListener('click', () => {
      navbarMenu.classList.toggle('active');
    });
  });
  

  // Initialize EmailJS with your user ID
(function() {
  emailjs.init("Nf2wZOOQBbVWK43EU");
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get form values
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  // Define email parameters
  var templateParams = {
      from_name: name,
      from_email: email,
      message: message
  };

  // Send email
  emailjs.send('service_ii2e7im', 'template_1rz9q1c', templateParams)
      .then(function(response) {
          console.log('SUCCESS!', response.status, response.text);
          alert('Email sent successfully!');
      }, function(error) {
          console.error('FAILED...', error);
          alert('Failed to send email. Please try again later.');
      });
});
