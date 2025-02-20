function saludar(nombre, genero, edad, idioma) {
    let saludo = "";

    // Saludo por hora del día
    const hora = new Date().getHours();
    if (hora < 12) saludo = "Buenos días";
    else if (hora < 18) saludo = "Buenas tardes";
    else saludo = "Buenas noches";

    let titulo = "";

    // Determinar el título según género y edad
    if (edad && edad > 30) {
        titulo = genero === "masculino" ? "Sr." : "Sra.";
    } else {
        titulo = genero === "masculino" ? "Joven" : "Señorita";
    }

    // Construcción final del saludo
    if (nombre) {
        saludo += `, ${titulo} ${nombre}`;
    }

    // Traducción al inglés si es necesario
    if (idioma === "en") {
        saludo = saludo.replace("Buenos días", "Good morning")
                       .replace("Buenas tardes", "Good afternoon")
                       .replace("Buenas noches", "Good evening")
                       .replace("Joven", "Mr.")
                       .replace("Señorita", "Miss.")
                       .replace("Sr.", "Mr.")
                       .replace("Sra.", "Mrs.");
    }

    return saludo + "!";
}

export default saludar;
