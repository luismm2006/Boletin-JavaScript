/*Hacer una función addGuiones que reciba como parámetro de entrada
una cadena texto y devuelva una nueva cadena que tendrá un guión medio
detrás de cada letra. Utilizar para ello un bucle for.*/

function addGuiones(cadena){
    let cadenaNueva = "";
    for (let i = 0; i < cadena.length; i++) {
        if(i == cadena.length-1){
            cadenaNueva += cadena[i];
        }
        else{
            cadenaNueva+=cadena[i] + "-";
        }
    }
    return cadenaNueva;
}

console.log(addGuiones("hola")) //h-o-l-a