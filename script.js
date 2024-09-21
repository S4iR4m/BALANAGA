// script.js
document.addEventListener('DOMContentLoaded', function() {
  const educationButton = document.getElementById('educationButton');
  const experienceButton = document.getElementById('experienceButton');
  const educationDetails = document.getElementById('educationDetails');
  const experienceDetails = document.getElementById('experienceDetails');

  // Show education details by default
  educationDetails.style.display = 'block';
  experienceDetails.style.display = 'none';

  educationButton.addEventListener('click', function() {
    educationDetails.style.display = 'block';
    experienceDetails.style.display = 'none';
  });

  experienceButton.addEventListener('click', function() {
    educationDetails.style.display = 'none';
    experienceDetails.style.display = 'block';
  });
});
