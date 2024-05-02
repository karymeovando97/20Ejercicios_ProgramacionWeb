function info(cadena){ 
    var resultado = "La Cadena \"" + cadena + "\" ";
    //comprobar mayusculas y minusculas
    if(cadena == cadena.toUpperCase())
        resultado += " esta formada solo por mayúsculas";
    else if(cadena == cadena.toLowerCase())
        resultado += "esta formada solo por minúsculas";
        else 
            resultado += "esta formada por mayúsculas y minúsculas ";
        return resultado; 
}

alert(info("OVNI = OBJETO VOLADOR NO IDENTIFICADO"));
alert(info("En un lugar de la mancha..."));
alert(info("aprendiendo javascript"));
