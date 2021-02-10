{
    console.log('Expressions and Operators:')
    /**
     * Expressions and Operators
     * 
     *  - Expressions;
     *  - Operators;
     *      - Binary;
     *      - Unary;
     *      - Ternary.
     */

    // Expressions = são quaisquer linhas de código, exemplo:
    let number = 1;

    /* Operators:
    * 
    * Binary:
    * Existem vários tipos de operadores, como por exemplo, operador binário de soma +,
    * chama-se binário, pois necessita de dois valores entre o operador para que ele funcione:
    */
    console.log(number + 1);

    /**
     * Unary:
     * só precisa de um valor para funcionar, exemplos:
     */
    console.log(++number) // operador unário: ++
    number = '1'
    console.log(typeof number) // operador unário: typeof

    /**
     * Ternary:
     * uma das poucas situações onde um operador precisa de três valores:
     */
    let test = (function(){
        if(typeof number == 'number') {
            return true;
        }else {
            return false;
        }
    })()
    console.log(test ? test + `: ${number} é número`: test + `: ${number} não é número`)
}

{
    console.log('\nExpression "new":')
    /**
     * new
     * 
     * é denominada left-hand-side expression
     * serve para criar ou instanciar um novo objeto
     * de determinado tipo, exemplos:
     */
    let name = new String('Orlando')
    let age = new Number(27)
    let a = Array.from(name);
    let date = new Date('2021-02-10 16:30')

    console.log(name, age, a, date.__proto__) // acessando as propriedades herdadas de date do objeto 'Date'
}

{
    console.log('\nOperadores Unários:')
    /**
     * Operadores Unários
     *  - typeof
     *  - delete
     * são operadores que só necessitam de um valor para apresentarem resultado:
     */
    console.log(typeof 1)

    const person = {
        name: 'Orlando',
        age: 27,
    }
    console.log(person)
    delete person.age
    console.log(person)
}

{
    console.log('\nOperadores Aritméticos:')
    /**
     * Operadores Aritméticos
     */

     // Multiplicação *
     console.log(5.7 * 3.2)

     // Divisão /
     console.log(15 / 3)

     // Soma +
     console.log(3 + 3)

     // Subtração -
     console.log(12 - 1)

     // Resto da Divisão
     let remainder
     remainder = 11 % 9
     console.log(remainder)

     // Incremento
     let increment = 0
     increment++ // depois da palavra, incrementa depois
     console.log(increment)

     // Decremento
     let decrement = 0
     decrement-- // depois da palavra, decrementa depois
     console.log(decrement)

     // Exponencial
     console.log(3 ** 3)
     console.log(2 ** 3)
}

{
    console.log('\nOperator ( ):')
    /* Grouping Operator ( )
    * dá importância a execução de determinado trecho,
    * agrupando expressões matemáticas, por exemplo:
    */
    let total = (2 + 3) * 5
    console.log(total)

    total = 2 + 3 * 5
    console.log(total)
}

{
    console.log('\nComparison Operators:')
    /**
     * Comparison Operators:
     * 
     * Irá comparar valores e retornar um Boolean como 
     * resposta à comparação:
     */

     let one = 1
     let two = 2

     // == igual
     console.log(one == two)
     console.log(one == '1')

     // != diferente
     console.log(one != two)
     console.log(two != '2')

     // === estritamente igual (tipos e valores)
     console.log(one === '1')   
     console.log(two === 2) 

     // !== estritamente diferente (tipos e valores)
     console.log(two !== '2')
     console.log(two !== 2)

     // > Maior que
     console.log(two > one)

     // >= Maior ou igual a
     console.log(one >= 1)

     // < Menor que
     console.log(two < 2)

     // <= Menor ou igual a
     console.log(two <= 2)
}

{
    console.log('\nAssigment Operators:')
    // Assigment Operators:
    let x
    console.log(x)

    // assigment
    x = 1
    console.log(x)

    // addiction assigment:
    // x = x + 2;
    x += 2
    console.log(x)

    // subtraction assigment:
    // x = x - 1;
    x -= 1
    console.log(x)

    // multiplication assigment:
    // x = x * 3;
    x *= 3
    console.log(x)

    // divison assigment:
    // x = x / 3;
    x /= 3
    console.log(x)

    // remainder assigment:
    // x = x % 2;
    x %= 2
    console.log(x)

    // exponetiation assigment:
    // x = x ** 2
    x = 2
    x **= 2
    console.log(x)
}