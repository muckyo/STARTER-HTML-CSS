let total = 0;

// expression function
// anonymous function
// parâmetros (parameters)
const Sum = function(number1, number2) {
    let total = number1 + number2;
    return total;
}
/**
 * OBS.: Em escopo de função nenhum tipo de variável, mesmo var,
 * não existem fora da função.
 */

let number1 = 34;
let number2 = 25;
Sum(number1, number2);

console.log(`O número 1 é ${number1}`);
console.log(`O número 2 é ${number2}`);
console.log(`A soma é ${Sum(number1, number2)}`);
console.log(total);


// Função é um liquidificador

function FazerSuco(fruta1, fruta2) {
    return fruta1 + fruta2;
}

const copo = FazerSuco('banana', 'maçã');

console.log(copo);