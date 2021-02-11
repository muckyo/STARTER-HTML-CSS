/**
 * Type Conversion (typecasting) vs Type Coersion
    * Type Conversion = troca através da mudança no tipo de dados de uma variável;
    * Type Coersion = Javascript implicitamente faz essa troca.
 * Alteração de um tipo de dado para outro tipo
 */

/** Type Coersion:
* houve uma concatenação de dados. o Javascript coercitivamente 
* transformou o número 5 num valor do tipo String e concatenou com o restante do valor:
*/
console.log('Unindo um Número a uma String: 9' + 5)

/**
 * Type Conversion
 * o programador manualmente pode mudar o tipo do valor recebido por uma variável
 * ou parâmetro:
 */
console.log(`Unindo uma String a um número: ${Number('9') + 5}`)

{
   /**
    * FALSE
    *    - Quando um valor é considerado false em contextos onde
    *    um booleano é obrigatório (condicionais e loops)
    */
   // false
   console.log(false ? 'verdadeiro' : 'falso')

   // 0
   console.log(0 ? 'verdadeiro' : 'falso')
   
   // -0
   console.log(-0 ? 'verdadeiro' : 'falso')

   // ""
   console.log("" ? 'verdadeiro' : 'falso')

   // null
   console.log(null ? 'verdadeiro' : 'falso')

   // undefined
   console.log(undefined ? 'verdadeiro' : 'falso')

   // NaN
   console.log(NaN ? 'verdadeiro' : 'falso')
}

{
   /**
    * TRULY
    *    - Quando um valor é considerado true em contextos onde um
    *    booleano é obrigatório (condicionais e loops)
    */
   // true
   console.log(true ? 'verdadeiro' : 'falso')

   // {}
   console.log({} ? 'verdadeiro' : 'falso')

   // []
   console.log([] ? 'verdadeiro' : 'falso')

   // 1
   console.log(1 ? 'verdadeiro' : 'falso')
   
   // 3.23
   console.log(3.23 ? 'verdadeiro' : 'falso')

   // "0"
   console.log("0" ? 'verdadeiro' : 'falso')

   // "false"
   console.log("false" ? 'verdadeiro' : 'falso')

   // -1
   console.log(-1 ? 'verdadeiro' : 'falso')

   // Infinity
   console.log(Infinity ? 'verdadeiro' : 'falso')

   // -Infinity
   console.log(-Infinity ? 'verdadeiro' : 'falso')
}


// Manipulando Strings e Números:
// Transformar String em Número e Número em String
{
   let string = '123'
   string = Number(string)
   let number = 321
   number = String(number)
   console.log(`\nÉ um número: ${string + 5}`)
   console.log(`É uma String: ${number + 5}`)
}

// Contar quantos caracteres tem numa palavra e quantos dígitos tem um número
{
   let word = 'Paralelepipedo'
   console.log(word.length)
   let number = 1234
   console.log(String(number).length)
}
// Transformar um número quebrado com 2 casa decimais e trocar ponto por vírgula
{
   let number = 1.5
   console.log(number)
   console.log(typeof number)
   number = number.toFixed(2).replace('.',',')
   console.log(number)
   console.log(typeof number)
}

// Transforme letras minúsculas em maiúsculas. Faça o 
// contrário disso também
{
   let word1 = 'programar é muito bom!'
   console.log('GRITARIA: ' + word1.toUpperCase())
   let word2 = 'PROGRAMAR É BACANA!'
   console.log('fala baixo: ' + word2.toLowerCase())
}

// Verificar se o texto contém uma palavra específica
{
   let phrase = 'Eu quero viver o amor!'
   console.log('Contém a palavra "amor"? ' + phrase.includes('amor')) // essa função é case sensitive
}


//Manipulando Arrays: 

/** Separe um texto que contém espaços, em um novo array onde cada texto
* é uma posição do array. Depois disso, transforme o array em um texto,
* e onde eram espaços, coloque _
*/
{
   let phrase = 'Eu quero viver o Amor!'
   let myArray = phrase.split(' ')
   console.log(myArray)
   myArray = myArray.join('_')
   console.log(myArray)
}

// Criar Array com construtor
{
   let myArray = new Array('a', 'b', 'c')
   let myArray2 = new Array(10)
   console.log(myArray)
   console.log(myArray2)
}

//Contar elementos de um array
console.log([
   'a',
   {type: "array"},
   function() {return 'alo'}
].length)

// Transformar uma cadeia de caracteres(String) em elementos de um array
{
   let word = 'manipulação'
   let myArray = Array.from(word)
   console.log(myArray)
}

{
   // Array
   let techs = ['html', 'css', 'js']
   let techs2 = Array.from(techs)
   console.log(`Escreva techs2: ${techs2}`)

   // adicionar um item no fim
   techs.push('nodejs')
   console.log(techs)

   // adicionar no começo
   techs.unshift('sql')
   console.log(techs)

   // remover do fim
   techs.pop()
   console.log(techs)

   // remover do começo
   techs.shift()
   console.log(techs)

   // pegar somente alguns elementos do array
   console.log(techs.slice(1, 3))

   // remover 1 ou mais itens em qualquer posição do array
   techs.splice(1, 2)
   console.log(techs)

   // encontrar a posição de um elemento no array
   let index = techs2.indexOf('css')
   console.log(`techs2: ${techs2}`)
   console.log(`Qual a posição do css? ${index}`)
   techs2.splice(index, 1)
   console.log(`Removeu 'css' de techs2: ${techs2}`)
}

/** Ao declarar um objeto 'b' a partir de um outro objeto 'a', 
* apenas apontando para o nome do objeto, isso não irá alocar um 
* espaço de memória independente para o objeto 'b', exemplo:
*/
{
   let a = ['1', '2', '3']
   let b = a
   
   console.log(`a e b antes da remoção:\na: ${a}`)
   console.log(`b: ${b}`)
   a.splice(0, 3)
   console.log(`a e b depois da remoção:\na: ${a}`)
   console.log(`b: ${b}`)
}
/**
 * toda mudança feita no objeto 'a', é impactada também no objeto 'b', 
 * pois o mesmo está apenas referenciando o espaço de memória do objeto 'a'.
 */

/**
 * Se caso a necessidade for criar um novo objeto 'b', a partir de um objeto 'a',
 * com os mesmos dados, porém com espaço de memória independente, o correto a 
 * se fazer é:
 */
{
   let a = ['a', 'b', 'c']
   let b = Array.from(a)

   console.log(`a e b antes da remoção:\na: ${a}`)
   console.log(`b: ${b}`)
   a.splice(0, 3)
   console.log(`a e b depois da remoção:\na: ${a}`)
   console.log(`b: ${b}`)
}