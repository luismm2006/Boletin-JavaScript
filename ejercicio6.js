/*Generar la tabla de multiplicar de un número dado del 1 al 10.*/
function generarTablaMultiplicar(numero) {
    for (let i = 1; i <= 10; i++) {
      console.log(`${numero} x ${i} = ${numero * i}`);
    }
}
generarTablaMultiplicar(5);
