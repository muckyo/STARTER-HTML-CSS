var nameOfPerson = 'Orlando';

function NameOf() {
    return nameOfPerson;
}
    NameOf()

document.body.innerHTML = "<h1> Meu nome é: " + NameOf() +
    "</h1>";