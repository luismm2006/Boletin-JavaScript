/*Realizar la evolución del ejercicio anterior sin tener en cuenta si
la letra pasada como parámetro está en mayúsculas o minúsculas Hacer
una función contadorDeLetras2 que reciba como parámetro de entrada dos
cadenas de texto y una letra y devuelva la cadena de texto en la que
dicha letra está más presente. Utilizar para ello un bucle for. No
tener en cuenta si la letra pasada como parámetro está en mayúsculas o
minúsculas.
*/
function contadorDeLetras2(cadena1, cadena2, letra){
    let contadorCadena1 = 0;
    let contadorCadena2 = 0;
    let ganador = "";
    let cadena1Universal = cadena1.toLowerCase();
    let cadena2Universal = cadena2.toLowerCase();
    let letraUniversal = letra.toLowerCase();

    for (let i = 0; i < cadena1Universal.length; i++) {
        if(cadena1Universal[i] == letraUniversal){
            contadorCadena1 ++;
        }
    }
    for (let i = 0; i < cadena2Universal.length; i++) {
        if(cadena2Universal[i] == letraUniversal){
            contadorCadena2 ++;
        }
    }
    if(contadorCadena1>contadorCadena2){
        ganador = cadena1Universal;
    }else{
        ganador = cadena2Universal;
    }
    return ganador;
}

console.log(contadorDeLetras2("holaa", "aaadios", "A")) //aaadios