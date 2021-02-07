// callback function

//sayMyName(callback)

/* Por padrão, se eu não especifico o tipo da variável
* então, ela é do tipo var, acessível por toda aplicação.
*/
{
    object = {
        name: 'Orlando',
        age: 28,
        weight: 66.7
    }
}

function DataFunction() {
    console.log('estou em uma callback')
    return true
}

function Callback(callbackFunction) {
    console.log('antes da callback')
    retorno = callbackFunction()
    /* chamada de uma função, execução da mesma,
    * isso deverá trazer o retorno da função callbackFunction()
    */
    console.log(`O retorno da função callback é: ${retorno}`)
    console.log('depois da callback')
}

Callback(DataFunction) // passando a função dataFunction como um valor, um dado do tipo 'function'

// object apenas é acessível aqui, pois ele foi declarado sem tipo
// por padrão, object é do tipo var, na linha 9.
console.log(object.name)