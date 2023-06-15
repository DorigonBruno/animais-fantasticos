import AnimaNumeros from "./anima-numeros.js";

export default function fetchAnimais(url, target) {
  // Cria a div contendo informação com o total de animais.
  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`;

    return div;
  }

  // cria a div dinamicamente dps usamos a função no foreach
  const numerosGrid = document.querySelector(target);

  function preencherAnimais(animal) {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  function animaisAnimaNumeros() {
    const animaNumeros = new AnimaNumeros("[data-numero]", ".numeros", "ativo");
    animaNumeros.init();
  }

  // Puxa os animais atraves dos arquivos json e cria cada animal utilizando create animal
  async function criarAnimais() {
    try {
      const animalResponse = await fetch(url);
      const animalJson = await animalResponse.json();

      animalJson.forEach((animal) => preencherAnimais(animal));
      animaisAnimaNumeros();
    } catch (erro) {
      console.log(erro);
    }
  }
  return criarAnimais();
}
