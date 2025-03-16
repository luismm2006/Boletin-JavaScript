/*13. ORDENAR UN ARRAY DE OBJETOS POR MÚLTIPLES PROPIEDADES (P.e.
apellido y luego nombre)
*/
let personas = [
    { nombre: "Juan", apellido: "Pérez", edad: 25 },
    { nombre: "Ana", apellido: "González", edad: 20 },
    { nombre: "Pedro", apellido: "Gómez", edad: 30 }
];
personas.sort((a, b) => {
    if (a.apellido === b.apellido) {
        return a.nombre.localeCompare(b.nombre);
    }
    return a.apellido.localeCompare(b.apellido);
});
console.log(personas);