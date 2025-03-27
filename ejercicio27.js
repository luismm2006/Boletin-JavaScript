/*Hacer una función tieneLetra que reciba como parámetro de entrada
una cadena de texto y una letra y devuelva true si la letra esta
presente en la palabra y false si no lo esta. Utilizar para ello el
método indexOf.
*/
function tieneLetra(cadena, letraBuscar){
    return cadena.indexOf(letraBuscar) !== -1;
}

console.log(tieneLetra("Holaa", "a")); //"true"
console.log(tieneLetra("Holaa", "e")); //"false"

