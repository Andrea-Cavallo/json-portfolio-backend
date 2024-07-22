var typed = new Typed("#typed", {
  stringsElement: "#strings",
  backSpeed: 10,
  typeSpeed: 30,
  backDelay: 1000,
  loop: true,
  smartBackspace: true,
});


// Funzione per raccogliere le stringhe da un elemento e convertirle in un'unica stringa separata da virgole
// Funzione per raccogliere le stringhe da un elemento e convertirle in un array di stringhe formattato
function gatherStringsAsArray(elementId) {
  var element = document.getElementById(elementId);
  var spans = element.getElementsByTagName('span');
  var stringsArray = [];
  for (var i = 0; i < spans.length; i++) {
    var text = spans[i].innerText.replace(/\./g, ''); // Rimuove i punti
    stringsArray.push('"' + text.trim() + '"'); // Aggiunge le virgolette e trim per rimuovere spazi
  }
  return  stringsArray.join(', ') ; // Formatta come array di stringhe
}

// Raccolta delle stringhe e modifica del contenuto HTML
document.getElementById("typed-languages").innerText = gatherStringsAsArray("languages");
document.getElementById("typed-technologies").innerText = gatherStringsAsArray("technologies");
document.getElementById("workExperiences").innerText = gatherStringsAsArray("experiences");




document.getElementById('send-button').addEventListener('click', function() {
  document.getElementById('request-container').style.display = 'none';
  document.querySelector('main').style.display = 'block';
});

document.getElementById('cv-link').addEventListener('click', function(event) {
  event.preventDefault();
  var email = "a.cavallo@outlook.it";
  var subject = "[ CV - Request ]";
  var body = "Hi Andrea, %0D%0A%0D%0AI would like to view your CV. Could you please send it to this email address? Thank you.%0D%0A%0D%0ARegards,";
  window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
});
