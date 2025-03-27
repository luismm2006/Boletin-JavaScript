/* Hacer una función contadorDeLetras que reciba como parámetro de
entrada una cadena de texto y una letra y devuelva el número de veces
que esa letra está presente en la palabra. Utilizar para ello un bucle
for.
*/

function contadorDeLetras(cadena, letra){
    let contadorDeLetras = 0;
    for (let i = 0; i < cadena.length; i++) {
        if(cadena[i] == letra){
            contadorDeLetras ++;
        }
    }
    return contadorDeLetras;
}
console.log(contadorDeLetras("holaaa", "a")) //3