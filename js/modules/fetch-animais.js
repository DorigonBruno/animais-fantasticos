import AnimaNumeros from "./anima-numeros.js";

export default function initFetchAnimais() {
  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`;

    return div;
  }

  async function fetchAnimais(url) {
    try {
      const animalResponse = await fetch(url);
      const animalJson = await animalResponse.json();
      const numerosGrid = document.querySelector(".numeros-grid");

      animalJson.forEach((animal) => {
        const divAnimal = createAnimal(animal);
        numerosGrid.appendChild(divAnimal);
      });
      const animaNumeros = new AnimaNumeros("[data-numero]", ".numeros","ativo");
      animaNumeros.init();
    } catch (erro) {
      console.log(erro);
    }
  }

  fetchAnimais("./animaisapi.json");
}
