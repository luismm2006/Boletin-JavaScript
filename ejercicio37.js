/* Escribe una función llamada indexOfIgnoreCase que reciba dos
cadenas de texto y devuelva la posición de la primera ocurrencia de la
segunda cadena de texto en la primera. La función no debería tener en
cuenta mayúsculas y minúsculas.
Por ejemplo:
indexOfIgnoreCase("bit","it");
y
indexOfIgnoreCase("bit","IT");
deberían devolver 1*/

function indexOfIgnoreCase(texto, subtexto) {
    return texto.toLowerCase().indexOf(subtexto.toLowerCase());
}

console.log(indexOfIgnoreCase("bit", "it")); // 1
console.log(indexOfIgnoreCase("bit", "IT")); // 1