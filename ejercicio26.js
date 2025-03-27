/*Hacer una función generarNombre3 que reciba como parámetros de
entrada tres cadenas de texto. Si la longitud de alguna cadena es menor
que cinco, la función debe devolver el texto ‘error’. Si ninguna cadena
tiene menos de 5 letras, devolver una nueva palabra utilizando las tres
últimas letras de cada palabra.*/

function generarNombre3(cadena1, cadena2, cadena3) {
    let nombre = "";
    if (cadena1.length < 5 || cadena2.length < 5 || cadena3.length < 5) {
        nombre = "error";
    } else {
        nombre = cadena1.substring(cadena1.length-1 - 2) + cadena2.substring(cadena2.length-1 - 2) + cadena3.substring(cadena3.length-1 - 2);
    }
    return nombre;
}
console.log(generarNombre3("Holaa", "Mundo", "Holaa")); //"laandolaa"
console.log(generarNombre3("Hol", "Mundo", "Hola")); //"error"

