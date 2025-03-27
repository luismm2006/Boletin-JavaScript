/*Hacer una función devuelveMasLarga que reciba como parámetro de
entrada dos cadenas de texto y devuelva la mayor. En caso de que ambas
cadenas sean iguales, devolveremos la correspondiente al primer
parámetro de la función.
*/

function devuelveMasLarga(cadena1, cadena2) {
    let cadenaMasLarga = "";
    if (cadena1.length > cadena2.length || cadena1.length === cadena2.length) {
        cadenaMasLarga = cadena1;
    } else{
        cadenaMasLarga = cadena2;
    }
    return cadenaMasLarga;
}
console.log(devuelveMasLarga("Holaa", "Mundo")); //"Holaa"
console.log(devuelveMasLarga("Hola", "Mundo")); //"Mundo"
