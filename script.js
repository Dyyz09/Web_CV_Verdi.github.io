let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
      });
    }
  });
};

function redirectToStore() {
    window.open("http://127.0.0.1:5500/beranda.html", "_blank");
  }
  
  document.addEventListener("DOMContentLoaded", function() {

    let progressBars = document.querySelectorAll(".progress-bar");
    
    progressBars.forEach(function(bar) {
      let value = bar.getAttribute("aria-valuenow");
      bar.style.width = value + "%";
    });
    
    document.getElementById("contact-form").addEventListener("submit", function(event) {
      event.preventDefault(); 
      alert("Pesan Anda telah terkirim!");  
    });
  });
  