/*Escribe una función llamada devuelvePrimeraLetra que reciba como
parámetro de entrada una cadena de texto y devuelva la primera letra.
*/
function devuelvePrimeraLetra(cadena) {
    cadena = cadena.trim();
    return cadena[0];
}
console.log(devuelvePrimeraLetra("Hola mundo")); // H
console.log(devuelvePrimeraLetra(" an a")); // a