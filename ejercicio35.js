/*Escribe una función llamada shortcut que tome dos cadenas de texto
y devuelva la inicial de cada una de las dos cadenas.
Por ejemplo, la llamada a la función:
shortcut('Amnesty', 'International');
Debería devolver «AI».*/

function shortcut(texto1, texto2) {
    return texto1.charAt(0) + texto2.charAt(0);
}

console.log(shortcut("Amnesty", "International")); // "AI"