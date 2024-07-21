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
  