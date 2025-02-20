import saludar from "./saludador.js";

document.querySelector("#saludar-btn").addEventListener("click", () => {
    const nombre = document.querySelector("#nombre").value;
    const genero = document.querySelector("#genero").value;
    const edad = parseInt(document.querySelector("#edad").value);
    const idioma = document.querySelector("#idioma").value;

    const saludo = saludar(nombre, genero, edad, idioma);
    document.querySelector("#resultado").innerText = saludo;
});
