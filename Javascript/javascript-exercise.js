// 1. Declare uma variável de nome weight
let  weight;

// 2. Que tipo de dado é a variável acima?
console.log(typeof weight);

/**
 * 3. Declare uma variável e atribua valores 
 * para um dos dados:
    * name: String
    * age: Number (integer)
    * starts: Number (float)
    * isSubscribed: Boolean
*/
    let name = 'Orlando';
    let age = 28;
    let starts = 66.7;
    let isSubscribed = true;

/**
 * 4. A variável student abaixo é de que tipo de dado?
 * 
    * 4.1. Atribua a ela as mesmas propriedades e valores
    * do exercício 3.
    * 
    * 4.2. Mostre no console a seguinte mensagem:
        * <name> de idade <age> pesa <weight> kg.
        * 
        * Atenção, substitua <name> <age> e <weight> pelos
        * valores de cada propriedade do objeto
 */
let student = {
    name: 'Orlando',
    age: 28,
    starts: 66.7,
    isSubscribed: true
}

console.log(`${student.name} tem ${student.age} anos de idade e pesa ${student.starts} kg.`);

/**
 * 5. Declare uma variável do tipo Array, de nome students 
 * e atribua a ela nenhum valor, ou seja, somente o Array vazio
 */
let students = [];

/**
 * 6. Reatribua valor para a variável acima, colocando dentro dela
 * o objeto student da questão 4. (Não copiar e colar o objeto, mas
 * usar o objeto criado e inserir ele no Array)
 */
students = [student];
console.log(students);

/**
 * 7. Coloque no console o valor da posição zero do Array acima
 */
console.log(students[0]);

/**
 * 8. Crie um novo student e coloque na posição 1 do Array students
 */
const gustavo = {
    name: 'Gustavo',
    age: 42,
    starts: 78.9,
    isSubscribed: false
}
students[1] = gustavo;
console.log(students);

/**
 * 9. Sem rodar o código responda qual é a resposta do código abaixo
 * e por quê? Após sua resposta, rode o código e veja se você acertou.
 * 
 * console.log(a)
 * var a = 1
 * 
 * Resposta: undefined (valor da variável não definido, 
 * porém a variável já é vista pois é global, sofre o HOISTING)
 */
console.log(a);
var a = 1;

/**
 * 10. trocando o tipo da variável acima para let, o que acontece?
 * 
 * console.log(b);
 * let b = 1;
 * 
 * Resposta: erro de inicialização da variável, o código Java não consegue
 * visualizar a declaração da variável antes dela ser declarada, pois ela é 
 * de escopo local e não sofre com o efeito HOISTING, que só ocorre para variáveis
 * do tipo var, que são globais.
 */
console.log(b);
let b = 1;