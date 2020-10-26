


function lightSwitch() {
    let main = document.getElementsByTagName('main')
    let bodyStyle = main[0].style
    
    if (bodyStyle.background == 'white'){
        bodyStyle.background = 'black'
    } else {
        bodyStyle.background ='white'
    }
}

function calculator() {
    let number1 = prompt('första talet')
    const operator = prompt('välj räknesätt (+ - / *)')
    let number2 = prompt ('andra talet')
    let sum = 0

    number1 = Number(number1)
    number2 = Number(number2)

    if (isNaN(number1) || isNaN(number2)) {
        alert ('Här kan bara siffror användas.')
        return
    }

    if (operator === '+') {
        sum = number1 + number2
    } else if (operator === '-') {
        sum = number1 - number2
    } else if (operator === '*') {
        sum = number1 * number2
    } else if (operator === '/') {
        sum = number1 / number2 
    } else {
        alert ('Det där är inte ett giltligt räknesätt, försök igen!')
        return
    }

    alert ('Detta kom vi fram till: ' + sum)
}