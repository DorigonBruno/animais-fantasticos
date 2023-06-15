export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowMetade = window.innerHeight * 0.6;

    // bind
    this.animaScroll = this.animaScroll.bind(this);
  }

  animaScroll() {
    this.sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const telaMetade = sectionTop - this.windowMetade < 0;
      if (telaMetade) {
        section.classList.add("ativo");
      }
    });
  }

  init() {
    this.animaScroll();
    window.addEventListener("scroll", this.animaScroll);
  }
}
