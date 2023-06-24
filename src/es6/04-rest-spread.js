// arrays destructuring

let fruit = ['apple', 'banana']
let[a,b] = fruit
console.log(a,fruit[1])

// objects destructuring

let user = {userName: 'Lucia', age: 34}
let {userName, age} = user
console.log(userName, age)
console.log(userName, user.age)

const objeto = { 
    prop1: "valor1",
    prop2: "valor2",
    //... 
} 

// Desestructuración
const { prop1, prop2 } = objeto

const usuario = { nombre: "Andres", edad: 23, plataforma: "Platzi" }

const { nombre, edad, plataforma } = usuario

console.log(nombre)  // 'Andres' 
console.log(edad)  // 23
console.log(plataforma)  // 'Platzi'




// spead operation

let person = { name: 'Oscar', age: 28}
let county = 'MX'

let data = { id: 1, ...person, county }
console.log(data)

// rest

function sum(num, ...values) {
    console.log(values)
    console.log(num + values[0])
    return num + values[0]
}

sum(1,1,1,1,2,3)