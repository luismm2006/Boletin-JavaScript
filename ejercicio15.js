/*Revertir una cadena de caracteres
*/
let cadena = "Hola mundo";
function revertir(cadena) {
    let cadenaRevertida = "";
    for (let i = cadena.length - 1; i >= 0; i--) {
        cadenaRevertida += cadena[i];
    }
    return cadenaRevertida;
}
console.log(revertir(cadena));