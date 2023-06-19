import outsideClick from "./outsideClick.js";

export default class DropdownMenu {
  constructor(dropdownMenus, events) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);
    this.activeClass = "ativo";

    // define touchstart e click como argumentos padrões de events caso o usário não defina
    if (events === undefined) this.events = ["touchstart", "click"];
    else this.events = events;

    //  bind
    this.activeDropDownMenu = this.activeDropDownMenu.bind(this);
  }

  // ativa o dropdownMenu e adiciona a função que observa o clique fora
  activeDropDownMenu(event) {
    event.preventDefault();
    const elementTarget = event.currentTarget;

    elementTarget.classList.add(this.activeClass);
    outsideClick(elementTarget, this.events, () => {
      elementTarget.classList.remove(this.activeClass);
    });
  }

  // adiciona os eventos ao dropdownMenu
  addEventDropDown() {
    this.dropdownMenus.forEach((item) => {
      this.events.forEach((userEvent) => {
        item.addEventListener(userEvent, this.activeDropDownMenu);
      });
    });
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addEventDropDown();
    }
    return this;
  }
}
