export default function initAnimacaoScroll() {
  const sections = document.querySelectorAll("[data-anime='scroll']");

  const windowMetade = window.innerHeight * 0.6;

  function animarScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const telaMetade = sectionTop - windowMetade < 0;
      if (telaMetade) {
        section.classList.add("ativo");
      }
    });
  }

  if (sections.length) {
    animarScroll();

    window.addEventListener("scroll", animarScroll);
  }
}
