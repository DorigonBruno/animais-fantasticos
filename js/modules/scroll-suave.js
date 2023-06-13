export default function initScrollSuave() {
  const linksInternos = document.querySelectorAll(
    "[data-menu='menu'] a[href^='#']"
  );

  function scrollSection(event) {
    event.preventDefault();
    const href = event.target.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  }

  linksInternos.forEach((links) => {
    links.addEventListener("click", scrollSection);
  });
}

initScrollSuave();
