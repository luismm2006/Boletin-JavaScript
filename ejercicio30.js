/*Completar el ejercicio anterior haciendo que en la nueva palabra
generada las letras estén en mayúsculas.
*/
function crearPalabra(letra , numero){
    let palabraNueva = "";
    for (let i = 0; i < numero; i++) {
        palabraNueva += letra;
    }
    return palabraNueva.toUpperCase();
}

console.log(crearPalabra('a', 4)) //AAAA