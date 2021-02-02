console.log('Bem vindos ao Starter!!!')

console.log('Aula sobre String:')
/**
* String
* 
    * Cadeia de caracteres
    * 
    * "" aspas duplas
    * '' aspas simples
    * `` template literals ou template strings
*/
// implementação correta de caracteres 
    console.log('"Mayk"') 
    console.log(`Orlando 'Ramos' "Vilar" `)
    console.log(`Orlando ${10 + 17}`) // expressão de linguagem
    console.log(1 + 1)// interpolação 

// implementação incorreta de caracteres
// console.log(""Mayk"") 
// console.log("Ma"yk") 
// Uncaught SyntaxError: missing ) after argument list


console.log('Aula sobre Number:')
/**
* Number
    * números
    * 
    * 33 // inteiros
    * 12.5 // reais - float
    * NaN // Not a Number
    * Infinity // Infinito  
*/
console.log(22)
console.log(-33)
console.log(12.5)
console.log(12.5 + 12)
console.log(12.5 / "aaa")
console.log(12.5 == Infinity)
console.log(Infinity)
// console.log(infinity) não entende infinity com i menúsculo 


console.log('Aula sobre Boolean:')
/**
* Boolean
* 
* somente 2 valores
* 
    * true // verdadeiro
    * falso // false
*/
console.log(true)
console.log(false)
console.log(true == false)


console.log('Aula sobre undefined x null:')
/**
* undefined
    * dado indefinido
* 
* null
    * nulo
    * objeto que não possui nada dentro
    * diferente de indefinido    
*/
console.log(undefined)
console.log(null)
console.log(undefined === null)


console.log('Aula sobre Object:')
/**
* Object
    * objeto
    * Propriedades / Atributos
    * Funcionalidades / Métodos
    * { propriedade: "valor" }
* 
*/
console.log({
    name: "Orlando",
    idade: 27,
    andar: function() {
        console.log('andar')
    }
})


console.log('Aula sobre Array:')
/**
* Array (Vetores)
    * Uma lista
    * Agrupamento de dados
    * 
    * ["Orlando", 27]
*/
console.log([
    "Leite",
    "Ovos",
    2,
    3
])