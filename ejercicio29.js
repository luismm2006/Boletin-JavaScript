/*Hacer una función crearPalabra que reciba como parámetro de entrada
una letra y un número y genere una nueva palabra que tenga la letra
introducida repetida tantas veces como indique el número.*/

function crearPalabra(letra , numero){
    let palabraNueva = "";
    for (let i = 0; i < numero; i++) {
        palabraNueva += letra;
    }
    return palabraNueva;
}

console.log(crearPalabra('a', 4)) //aaaa