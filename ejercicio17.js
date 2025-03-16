/*Escribe una función llamada longitud que reciba como parámetro de
entrada una cadena de texto y devuelva el número de letras que tiene.
Por ejemplo la siguiente llamada a la función:
longitud("Ana"); Debería devolver 3.*/



function longitud(cadena) {
    let letras = "";
    for (let i = 0; i < cadena.length; i++) {
        if (/[a-zA-Z]/.test(cadena[i])) {
            letras += cadena[i];
        }
    }
    return letras.length;
}
console.log(longitud("an a")); // 3
console.log(longitud("Hola mundo")); // 10