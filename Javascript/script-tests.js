var nameOfPerson = 'Orlando';

function nameOf() {
    return nameOfPerson;
}
    nameOf()

document.body.innerHTML = "<h1> Meu nome é: " + nameOf() +
    "</h1>";