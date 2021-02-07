// function scope
let subject 

function CreateThink () {
    subject = 'study'
    // return subject
    /* Se a função não possui um retorno, ela é
    * por padrão retorno 'undefined'. Pense numa função
    * como sendo uma variável, se não setamos um valor para
    * seu retorno, então ela tem um retorno indefinido.
    */ 
}

console.log(subject)
CreateThink()
console.log(subject)