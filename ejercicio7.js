/*7. Verificar si un número dado es primo.
1. Que el número se introduzca por consola.
2. Introducir el resto en una función.
3. Que te devuelva si ese número es primo o no.
*/
function esPrimo(numero) {
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return numero !== 1;
}


const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Introduce un número: ", function (numero) {
    if (esPrimo(numero)) {
        console.log("El número es primo");
    } else {
        console.log("El número no es primo");
    }
    rl.close();
});