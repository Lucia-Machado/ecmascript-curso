// enahced objet literals

function newUser(user, age, country) {
    return {
        user,
        age,
        country,
    }
}

console.log(newUser('Lucia', 22, 'Uruguay'))