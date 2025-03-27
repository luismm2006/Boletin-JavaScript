/*Hacer una función generarNombre que reciba como parámetros de
entrada tres cadenas de texto. Si la longitud de alguna cadena es menor
que cinco, la función debe devolver el texto ‘error’. Si ninguna cadena
tiene menos de 5 letras, devolver una nueva palabra utilizando las tres
primeras letras de cada palabra.*/

function generarNombre(cadena1, cadena2, cadena3) {
    let nombre = "";
    if (cadena1.length < 5 || cadena2.length < 5 || cadena3.length < 5) {
        nombre = "error";
    } else {
        nombre = cadena1.substring(0, 3) + cadena2.substring(0, 3) + cadena3.substring(0, 3);
    }
    return nombre;
}
console.log(generarNombre("Holaa", "Mundo", "Holaa")); //"HolMunHol"
console.log(generarNombre("Hol", "Mundo", "Hola")); //"error"