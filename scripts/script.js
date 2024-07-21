var typed = new Typed("#typed", {
  stringsElement: "#strings",
  backSpeed: 10,
  typeSpeed: 30,
  backDelay: 1000,
  loop: true,
  smartBackspace: true,
});

document.getElementById('send-button').addEventListener('click', function() {
  document.getElementById('request-container').style.display = 'none';
  document.querySelector('main').style.display = 'block';
});

document.getElementById('cv-link').addEventListener('click', function(event) {
  event.preventDefault();
  var email = "a.cavallo@outlook.it";
  var subject = "Request CV";
  var body = "Hi Andrea, %0D%0A%0D%0AI would like to view your CV. Could you please send it to this email address? Thank you.%0D%0A%0D%0ARegards,";
  window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
});
