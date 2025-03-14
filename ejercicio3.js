/*Calcular el factorial de un número dado.*/
let num = 5;
function factorial() {
    let resultado = 1;
    for (let i = 2; i <= num; i++) {
        resultado *= i;
    }
    return resultado;
}
console.log(factorial());