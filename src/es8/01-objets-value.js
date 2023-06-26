/*

*/

const countries = {
    mx: 'mexico',
    co: 'colombia',
    cl: 'chile',
    pe: 'peru'
}

console.log(Object.values(countries))

// [ 'mexico', 'colombia', 'chile', 'peru' ] transforma los valores

const usuario = {
    name: "Andres",
    email: "andres@correo.com",
    age: 23
}

Object.keys(usuario) 
// [ 'name', 'email', 'age' ]