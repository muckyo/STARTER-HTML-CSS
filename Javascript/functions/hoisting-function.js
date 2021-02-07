// hoisting function

// 1ª forma:
SayMyName1()
// função do tipo statement 
function SayMyName1() {
    console.log('1ª forma')
}

//2ª forma:
var SayMyName2 = function(){}
// função do tipo expression function ou anonymous function
SayMyName2 = function() {
    console.log('2ª forma')
}
SayMyName2()

//3ª forma
let SayMyName3 = function(){}
console.log(`Aqui, ainda não há nada dentro da função sayMyName3: ${SayMyName3()}`)

SayMyName3 = function(){
    console.log('3ª forma')
}
SayMyName3()

//4ª forma
// const SayMyName4 = function(){}
// SayMyName4 = function(){
//     console.log('4ª forma')
// }
// SayMyName4()
// Não vai funcionar dessa forma, pois o tipo criado é const
// declarações do tipo const não podem ter seu valor ou tipo
// alterados depois da declaração.

//5ª forma 
// SayMyName5()
// let SayMyName5 = function(){
//     console.log('5ª forma')
// }
// Também não vai funcionar, pois declarações do tipo let e const
// não sofrem HOISTING, ou seja a declaração precisa vir antes da
// chamada da função.

//6ª forma
// SayMyName6()
// var SayMyName6 = function(){
//     console.log('6ª forma')
// }
// Neste caso, como a declaração foi feita de tipo var
// ocorre a elevação HOISTING:
// var SayMyName6
// SayMyname6()
// SayMyName6 = function(){
//      console.log('6ª forma')
// }
// porém o Javascript apenas
// declara a variável 'SayMyName6', porém não atribui a ela
// o tipo 'function(){}', ou seja, na linha 52 ao chamar a função
// ainda não existe uma função dentro da variável 'SayMyName6',
// somente na linha 53 isso vai ocorrer, mas como em Javascript
// o código é lido e executado de cima pra baixo, é necessário
// que essa atribuição venha antes da chamada da função, ex:
var SayMyName6 = function(){}
console.log(`Aqui, ainda não há nada dentro da função sayMyName6: ${SayMyName6()}`)

SayMyName6 = function(){
    console.log('6ª forma')
}
SayMyName6()