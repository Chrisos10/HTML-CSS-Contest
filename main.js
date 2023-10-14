// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
      });
  });
});

// Event RSVP functionality
const rsvpButtons = document.querySelectorAll('.event button');
rsvpButtons.forEach(button => {
  button.addEventListener('click', function () {
      const eventName = this.parentElement.querySelector('h4').textContent;
      const eventDate = this.parentElement.querySelector('p:nth-child(2)').textContent;
      alert(`You have successfully RSVP'd for ${eventName} on ${eventDate}`);
  });
});