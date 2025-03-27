/* Hacer una función devuelveMasLarga2 que reciba como parámetro de
entrada tres cadenas de texto y devuelva la mayor. En caso de que al
menos dos cadenas tengan igual longitud, devolveremos el texto Hay al
menos dos cadenas iguales.*/


function devuelveMasLarga2(cadena1, cadena2, cadena3) {
    let cadenaMasLarga = "";
    if (cadena1.length > cadena2.length && cadena1.length > cadena3.length) {
        cadenaMasLarga = cadena1;
    } else if (cadena2.length > cadena1.length && cadena2.length > cadena3.length) {
        cadenaMasLarga = cadena2;
    } else if (cadena3.length > cadena1.length && cadena3.length > cadena2.length) {
        cadenaMasLarga = cadena3;
    } else {
        cadenaMasLarga = "Hay al menos dos cadenas iguales";
    }
    return cadenaMasLarga;
}
console.log(devuelveMasLarga2("Holaa", "Mundo", "Hola")); //"Hay al menos dos cadenas iguales"
console.log(devuelveMasLarga2("Holaa", "Mundoo", "Hola")); //"Mundoo"