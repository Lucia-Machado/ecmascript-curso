/*
Los métodos de transformación de objetos a arrays sirven para obtener 
la información de las propiedades, sus valores o ambas.
*/

const countries = {
    mx: 'mexico',
    co: 'colombia',
    cl: 'chile',
    pe: 'peru'
}

console.log(Object.entries(countries)) // transforma a array por cada elemento

const usuario = {
    name: "Andres",
    email: "andres@correo.com",
    age: 23
}

Object.entries(usuario) 
/* 
[
  [ 'name', 'Andres' ],
  [ 'email', 'andres@correo.com' ],
  [ 'age', 23 ]
]  
*/