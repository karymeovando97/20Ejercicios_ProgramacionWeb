function verificarRespuesta() {
    // Obtener la respuesta del usuario
    var respuesta = document.getElementById("respuesta").value.toLowerCase();
    // Donde mostrar el resultado
    var resultado = document.getElementById("resultado"); // Donde mostrar el resultado

    if (respuesta === "mercurio") { // Comprobar si la respuesta es correcta
        resultado.textContent = "¡Correcto! Mercurio es el planeta más cercano al sol."; 
        resultado.style.color = "green"; // Cambiar el color del texto
    } else {
        resultado.textContent = "Incorrecto, intenta de nuevo."; 
        resultado.style.color = "red"; // Cambiar el color del texto
    }
}
