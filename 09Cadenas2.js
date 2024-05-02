function palindromo(cadena) {
    var resultado = "La Cadena \"" + cadena + "\" \n";

    // Pasar a minúsculas la cadena y eliminar espacios
    var cadenaOriginal = cadena.toLowerCase().replace(/ /g, ""); // Elimina todos los espacios

    // Convertir la cadena en un array y su versión inversa
    var letras = cadenaOriginal.split(""); // Cada letra es un elemento del array
    var letrasReves = [...letras].reverse(); // Crea una versión invertida del array de letras

    // Comparar letra por letra
    var iguales = true;
    for (var i = 0; i < letras.length; i++) {
        if (letras[i] != letrasReves[i]) {
            iguales = false;
            break; // No es necesario seguir verificando si ya se encontró una diferencia
        }
    }

    if (iguales) {
        resultado += " es un palíndromo";
    } else {
        resultado += " no es un palíndromo";
    }

    return resultado;
}

// Ejemplo de uso
alert(palindromo("La ruta nos aporto otro paso natural"));
alert(palindromo("Esta frase no se parece a ningún palíndromo"));
