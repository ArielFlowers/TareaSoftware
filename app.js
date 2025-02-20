import saludar from "./saludador.js";

document.querySelector("#saludar-btn").addEventListener("click", () => {
    document.querySelector("#mensaje").innerText = saludar();
});
