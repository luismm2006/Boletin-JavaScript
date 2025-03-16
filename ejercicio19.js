/*Escribe una función llamada devuelveUltimaLetra que reciba como
parámetro de entrada una cadena de texto y devuelva la última letra.
*/
function devuelveUltimaLetra(cadena) {
    cadena = cadena.trim();
    return cadena[cadena.length - 1];
}
console.log(devuelveUltimaLetra("Hola mundo")); // o
console.log(devuelveUltimaLetra(" an a   ")); // a