
// declarando
//class User {

//}
//instancia de una clase
//const newUser = new User()

class user {
    // metodos
    greeting(){
        return 'Hello'
    }
}

const gn = new user()
console.log(gn.greeting())
const bebe = new user()
console.log(bebe.greeting())

// constructor

class user {
    constructor() {
        console.log('nuevo usuario')
    }
    greeting(){
        return 'Hello'
    }
}

const david = new user()

// this
class user {
    constructor(name){
        this.name = name;
    }
    //metodods
    speak() {
        return 'hello '
    }
    greeting() {
        return `${this.speak()} ${this.name}`
    }
}

const ana = new user('ana')
console.log(ana.greeting())


// setters and getters

class user {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    //metodo
    speak(){
        return 'hello'
    }
    greeting(){
        return `${this.speak()} ${this.name}`
    }

    get uAge() {
        return this.age
    }
}

const bbloper = new user('david', 15)
console.log(bbloper.uAge)
console.log(bbloper.uAge = 2

)

// hola