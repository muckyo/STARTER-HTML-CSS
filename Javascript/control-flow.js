// Control Flow

{
    console.log('Control Flow:')
    // se o copo estiver sujo
    console.log('lavar o copo')

    // se o copo estiver limpo
    console.log('servir café')
}

{
    console.log('\nIf & Else:')
    // if & else (se e senão)
    let temperature = 37.5
    let highTemperature = temperature >= 37.5
    let mediumTemperature = temperature < 37.5 && temperature >= 37
    let normalTemperature = temperature < 37

    if(highTemperature) {
        console.log('Febre Alta!')
    }else if(mediumTemperature) {
        console.log('Febre Moderada!')
    }else if(normalTemperature) {
        console.log('Temperatura normal.')
    }
}

{
    console.log('\nSwitch:')
    // switch
    let expression = 'a'
    switch (expression) {
        case 'a':
            console.log('a')
            break // break é importante ser usado para informar ao Javascript que apenas
            // 1 caso deve ser executado até o ponto de parada.
        case 'b':
            console.log('b')
            break
        default:
            console.log('default')
            break
    }
    console.log('\n')

    function calculate(number1, operator, number2) {
        let result = 0
        switch (operator) {
            case '+':
                result = number1 + number2;
                break
            case '-':
                result = number1 - number2;
                break
            case '*':
                result = number1 * number2;
                break
            case '/':
                result = number1 / number2;
                break
            default:
                console.log('operação matemática não implementada.')
        }
        
        return result;
    }

    console.log(`Calculadora: ${calculate(4, '%', 8)}`)
}

{
    console.log('\nThrow:')
    // throw (disparar, lançar)
    function sayMyName(name = '') {
        if(name === '') {
            throw 'Nome é obrigatório'
        }
        console.log(name)
    }
    // sayMyName()

    // try & catch
    try {
        sayMyName('')
    } catch(e) {
        console.log(e)
    }
    console.log('após o try/catch')
}