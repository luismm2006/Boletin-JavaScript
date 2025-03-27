/*9. Buscar el número mayor en un array dado.*/

let numeros = [10, 60, 30, 40, 50];

let mayor = numeros[0];
for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > mayor) {
        mayor = numeros[i];
    }
}
console.log("El número mayor es:", mayor);