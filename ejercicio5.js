/* Calcular la suma de los números pares del 1 al 100.*/

function sumarPares(){
    let resultadoSuma = 0;
    for(let i = 1; i<101; i++){
        if(i%2===0){
            resultadoSuma+=i;
        }
    }
    return resultadoSuma;
}
console.log(sumarPares());