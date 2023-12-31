/*
Set es una nueva estructura de datos para almacenar elementos únicos,
 es decir, sin elementos repetidos.
*/

const list = new Set()

list.add('item 1')
list.add('item 2').add('item 3')

console.log(list)

/*
add(value): añade un nuevo valor.
delete(value): elimina un elemento que contiene el Set, retorna un booleano si existía o no el valor.
has(value): retorna un booleano si existe o no el valor dentro del Set.
clear(value): elimina todos los valores del Set.
size: retorna la cantidad de elementos del Set.
*/