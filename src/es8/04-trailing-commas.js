/*
Las trailing commas consisten en comas al final de objetos o 
arrays que faciliten añadir nuevos elementos y evitar errores de
 sintaxis.
*/

const arr = [24,56,78,12,45, , , , , , ]

console.log(arr)
console.log(arr.length)

//[ 24, 56, 78, 12, 45, <5 empty items> ]
//10
