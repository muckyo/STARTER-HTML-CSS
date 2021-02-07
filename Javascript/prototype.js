/**
 * Prototype
 * 
    * A grande vantagem de Javascript é por ser uma linguagem prototipada ou 
        * prototype-based language;
    * prototype chain: cadeia de protótipos, assim que um novo objeto é criado, ele trás
        * referência a outros objetos que são protótipos criados anteriormente. 
    * _proto_ : protótipo, uma propriedade que referencia um objeto ascendente, criado 
        * anteriormente.
    * A grande vantagem de trazer referências de objetos previamente criados é que eu 
    * já tenho uma vasta quantidade de códigos prontos para serem usados, não necessitando
    * fazer todo código do zero, por exemplo, para saber a quantidade de caracteres de uma String:
 */
let nameOf = 'Orlando'
console.log(nameOf.length)
/* Neste caso, eu criei uma variável do tipo String, herdando todas as propriedades 
* do objeto String, que já foi criado anteriormente para a linguagem Javascript,
* como por exemplo a função 'length', que já está pronta para ser usada.
* Assim, não sendo necessário codificar uma função nova para saber a quantidade de caracteres
* da minha variável string 'nameOf'.
*/