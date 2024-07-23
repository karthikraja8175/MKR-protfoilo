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


document.getElementById('home').addEventListener('click', function() {
 document.querySelector('.home').scrollIntoView({ behavior: 'smooth' });
            });
            document.getElementById('About Me').addEventListener('click', function() {
                document.querySelector('.about').scrollIntoView({ behavior: 'smooth' });
            });
            document.getElementById('Skills').addEventListener('click', function() {
                document.querySelector('.all-skills').scrollIntoView({ behavior: 'smooth' });
            });
            document.getElementById('Projects').addEventListener('click', function() {
                document.querySelector('.project').scrollIntoView({ behavior: 'smooth' });
            });
            document.getElementById('Achievement').addEventListener('click', function() {
                document.querySelector('.achivement').scrollIntoView({ behavior: 'smooth' });
            });
            document.getElementById('certificates').addEventListener('click', function() {
                document.querySelector('.certificates').scrollIntoView({ behavior: 'smooth' });
            });
            document.getElementById('Academics').addEventListener('click', function() {
                document.querySelector('.education').scrollIntoView({ behavior: 'smooth' });
            });
            document.getElementById('Gallery').addEventListener('click', function() {
                document.querySelector('.gallery').scrollIntoView({ behavior: 'smooth' });
            });
            document.getElementById('Contact').addEventListener('click', function() {
                document.querySelector('.contact').scrollIntoView({ behavior: 'smooth' });
});
