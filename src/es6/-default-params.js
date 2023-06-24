function newUser(name, age, country) {
   var name = name || 'Oscar'
   var age = age ||  24
   var country = country || 'UY'
    console.log(name, age, country)
}
newUser()
newUser('Lucia', 25, 'Uruguay')

function newAdmin(name = 'Willi', age = 22, country = 'Uruguay'){
    console.log(name, age, country)
}

newAdmin()
newAdmin('Lucia', 25, 'Uruguay')