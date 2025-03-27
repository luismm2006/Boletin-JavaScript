/*Escribe una función llamada toCase que reciba como parámetro de
entrada una cadena de texto y devuelva esa misma cadena de texto en
minúsculas, un guión medio y de nuevo esa misma cadena de texto en
mayúsculas.
Por ejemplo, la siguiente llamada a la función:
toCase("Pablo");
Debería devolver: pablo-PablO*/

function toCase(texto) {
    return texto.toLowerCase() + "-" + texto.toUpperCase();
}

console.log(toCase("Pablo")); // "pablo-PABLO"