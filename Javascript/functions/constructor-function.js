/**
 * Constructor Function
 * 
    * expressão new
    * criar um novo objeto
    * this keyword
 */

function Person(name) {
    this.name = name
    this.walk = function() {
        return this.name + ' está andando'
    }
}
const orlando = new Person('Orlando')
const joao = new Person('João')

console.log(orlando.name)
console.log(joao.walk())

let nameOf = new String('Orlando')
console.log(nameOf)

let date = new Date('2021/02/08 20:59:03')
console.log(date)