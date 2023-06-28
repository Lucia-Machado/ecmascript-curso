/*
El motor de JavaScript, aquel que compila tu archivo y lo convierte en
 código que entiende el computador, al iniciar la compilación crea un 
 objeto global.

El objeto global proporciona funciones y variables propias e 
integradas en el lenguaje o el entorno. Dependiendo la plataforma, 
este objeto global tendrá un nombre diferente.
*/

console.log(window) // window not defined NAVEGADOR
console.log(global) // NODE
console.log(self) // WEBWORKER
console.log(globalThis) // sirve para todo