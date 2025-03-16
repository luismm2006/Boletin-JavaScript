/*12.Ordenar un array de objetos por una propiedad específica (por
ejemplo, edad)
*/
let personas = [
    { nombre: "Juan", edad: 25 },
    { nombre: "Ana", edad: 20 },
    { nombre: "Pedro", edad: 30 }
];
personas.sort((a, b) => a.edad - b.edad);
console.log(personas);