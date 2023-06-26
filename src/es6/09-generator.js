/*
Los generadores son funciones especiales que pueden pausar su ejecución,
 luego volver al punto donde se quedaron, recordando su scope y seguir 
 retornando valores.
*/

function* iterate (array) {
    for (let value of array) {
        yield value // palabra para frenar la ejecucuin
    }
}

const it = iterate(['Oscar', 'david','anna','yen'])
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value) // recuerda donde freno y pasa al siguiente