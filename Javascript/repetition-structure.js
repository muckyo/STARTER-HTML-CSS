console.log('Repetition Structure:')
/**
 * Repetition Structure (Estrutura de Repetição)
 */

{
    console.log('\nfor:')
    // for
    for (let i = 0; i < 1000; i++) {
        if(i === 5) {
            break; // - para a execução do loop;
            // continue; // pula a execução do momento e inicia um novo loop;
        }
        console.log(i)
    }
}

{
    console.log('\nwhile:')
    // while
    
    let i = 20
    while(i > 10) {
        console.log(i--)
    }
}

{
    console.log('\nfor... of:')
    // for... of
    // acessa os valores de um Array ou String
    let name = 'Orlando'
    let names = ['João', 'Pedro', 'Paulo']

    for(let char of name) {
        console.log(char)
    }
}

{
    console.log('\nfor... in:')
    // for... in
    // acessa as propriedades de um objeto
    // in para objetos of para Arrays e Strings
    let person = {
        name: 'Orlando',
        age: 27,
        weight: 66.7
    }

    for(let property in person) {
        console.log(person[property])
    }
}