// Array

// Array vusa colchetes
const animals = [ // Array
    'Lion',
    'Monkey',
    'Cat',
    { // Object
        name: 'Dog',
        age: 3,
        data: ['Caio','adult'] // outro Array
    }
]

// Acessar valores dentro do Array
    if(typeof animals === typeof animals[3].data)
    console.log(`O nome do cachorro é ${animals[3].data[0]}.`)