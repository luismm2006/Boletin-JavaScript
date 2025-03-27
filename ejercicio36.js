/*Escribe una función llamada firstChar, que devuelva la primera
letra que no sea un espacio cuando una cadena de texto es pasada.
Para ello, podemos eliminar los espacios en blanco que pudiera haber al
principio y al final de la cadena de texto utilizando el método trim().
Si no estás muy seguro/a de cómo funciona este método, ¡consúltalo en
internet, que no es tan difícil!.
Por ejemplo, la llamada a la función:
firstChar(" Rosa Parks ");
Debería devolver R.*/

function firstChar(texto) {
    return texto.trim().charAt(0);
}

console.log(firstChar(" Rosa Parks ")); // "R"