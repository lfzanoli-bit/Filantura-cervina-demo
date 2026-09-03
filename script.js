// Menu mobile

const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("open");
});


// Fechar menu ao clicar em um link

const menuLinks = document.querySelectorAll(".menu a");

menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("open");
  });
});


// Alterar aparência do cabeçalho ao rolar

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }

});


// Pequena animação de entrada

const animatedElements = document.querySelectorAll(
  ".hero-content, .number, .process-card, .yarn-card, .quality-grid, .contact-grid"
);

const observer = new IntersectionObserver(
  (entries) => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";

        observer.unobserve(entry.target);

      }

    });

  },
  {
    threshold: 0.15
  }
);


animatedElements.forEach(element => {

  element.style.opacity = "0";
  element.style.transform = "translateY(25px)";
  element.style.transition = "opacity 0.8s ease, transform 0.8s ease";

  observer.observe(element);

});
