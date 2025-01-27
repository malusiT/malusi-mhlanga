const greeting = document.getElementById("greeting");

setTimeout(() =>{
    // greeting.style.color = "#0054b4"
    greeting.style.fontWeight = 1000;
    greeting.textContent = "Welcome 👋";
}, 3000)

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });