/*Escribe una función llamada devuelveEnesimaLetra que reciba como
parámetro de entrada una cadena de texto y un número y devuelva la
letra que ocupe la posición indicada por el número.
*/
function devuelveEnesimaLetra(cadena, n) {
    cadena = cadena.trim();
    let cadenaSegura = "";
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] !== " ") {
            cadenaSegura += cadena[i];
        }
    }
    return cadenaSegura[n];
}
console.log(devuelveEnesimaLetra("Hola mundo", 4)); // m
console.log(devuelveEnesimaLetra(" an a", 2)); //a