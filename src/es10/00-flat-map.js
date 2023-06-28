// matriz de cualquier sub matriz

const array = [1,1,2,4,5,6,7,8,[1,2,3,4,[4,5,8]]]
console.log(array.flat(3))

/*
[
  1, 1, 2, 4, 5, 6,
  7, 8, 1, 2, 3, 4,
  4, 5, 8
]
*/

const arrayi = [1,2,[3,4],5,6]
const result = array.flat() 
result// [1,2,3,4,5,6]

const array2 = [1, 2, [3, 4, [5, 6]]];
const result2 = array2.flat() 
result2// [1, 2, 3, 4, [5, 6]]

const array3 = [1, 2, [3, 4, [5, 6]]]
const result3 = array3.flat(2) 
result3// [1, 2, 3, 4, 5, 6]

const array4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]
const result4 = array4.flat(Infinity) 
result4// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

/*
Método flatMap
El método flatMap es una combinación de los métodos map y flat. Primero
 realiza la iteración de los elementos del array (como si fuera map), y 
 después los aplana en una sola profundidad (como si fuera flat).
*/

const arr = [1,2,3,4,5,6]
console.log(arr.flatMap(v => [v,v * 2])) // tranforma valor, por valor*2