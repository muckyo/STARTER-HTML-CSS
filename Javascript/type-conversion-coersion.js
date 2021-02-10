/**
 * Type Conversion (typecasting) vs Type Coersion
    * Type Conversion = troca através da mudança no tipo de dados de uma variável;
    * Type Coersion = Javascript implicitamente faz essa troca.
 * Alteração de um tipo de dado para outro tipo
 */

/* Type Coersion:
* houve uma concatenação de dados. o Javascript coercitivamente 
* transformou o número 5 num valor do tipo String e concatenou com o restante do valor.
*/
console.log('9' + 5)

/**
 * Type Conversion
 * o programador manualmente pode mudar o tipo do valor recebido por uma variável
 * ou parâmetro:
 */
console.log(Number('9') + 5)