const users = {
    gndx: {
        country: 'mx'
    },
    ana: {
        country: 'uy'
    }
}

console.log(users.ana.country)
console.log(users?.bebeloper?.country)

/*
El encadenamiento opcional u optional chaining (?.) detiene la 
evaluación del objeto cuando el valor es undefined o null antes del 
(?.), retornando undefined sin detener el programa por un error.
*/