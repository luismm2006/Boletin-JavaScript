/* Realizar la evaluación del ejercicio anterior sin tener en cuenta
si la letra pasada como parámetro está en mayúsculas o minúsculas*/

function tieneLetra(cadena, letraBuscar){
    let cadenaUniversal = cadena.toLowerCase();
    let letraUniversal = letraBuscar.toLowerCase();
    return cadenaUniversal.indexOf(letraUniversal) !== -1;
}

console.log(tieneLetra("Holaa", "a")); //"true"
console.log(tieneLetra("HOLAA", "a")); //"true"
console.log(tieneLetra("Holaa", "e")); //"false"
console.log(tieneLetra("HOLAA", "e")); //"false"

