import outsideClick from "./outsideClick.js";

export default function initDropdownMenu() {
  const dropdownMenus = document.querySelectorAll("[data-dropdown]");

  function handleClick(event) {
    event.preventDefault();
    this.classList.add("ativo");
    outsideClick(this, ["touchstart", "click"], () => {
      this.classList.remove("ativo");
    });
  }

  dropdownMenus.forEach((item) => {
    ["touchstart", "click"].forEach((userEvent) => {
      item.addEventListener(userEvent, handleClick);
    });
  });
}
