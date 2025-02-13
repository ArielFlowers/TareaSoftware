import sumar from "./sumador.js";
import multiplicar from "./multiplicador.js";

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");
const selectOperation = document.querySelector("#operacion");

// Mapeo de operaciones
const operaciones = {
  sumar,
  multiplicar,
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);
  const operacionSeleccionada = selectOperation.value;

  // Ejecutamos la operación seleccionada
  const resultado = operaciones[operacionSeleccionada](firstNumber, secondNumber);

  div.innerHTML = `<p>Resultado: ${resultado}</p>`;
});
