
function goToLivingroom() {
    const kode = prompt('För att komma in hit måste du först gå till köket för att få rätt kod! Skriv din kod här:')
}

function leaveTheGame() {
    let leave = prompt('Vill du verkligen gå hem? Har du redan prövat allt som går att utforska?')
    if (leave == 'ja') {
        alert('GRATTIS DU VANN!')
    } else if (leave == 'nej') {
        alert('Bra val att stanna en stund till hemma hos mig!')
    } else {
        alert('här kan bara ja och nej i små bokstäver användas')
    }
}

function goToKitchen() {
    let six = prompt('Kasta tärningen och skriv in resultatet här:') 
    
    if (six === '6'){
        window.location.href = "./kitchen.html"
    } else {
        alert('Det var fel, kasta tärningen igen.')
    }
}

function lightSwitch() {
    let main = document.getElementsByTagName('main')
    let bodyStyle = main[0].style
    
    if (bodyStyle.background == 'white'){
        bodyStyle.background = 'black'
    } else {
        bodyStyle.background ='white'
    }
}

function helpKonrad() {
    const konrad = prompt('Hjälp mig räkna ut 367*15, till din hjälp har du en miniräknare i ryggsäcken.')
    
    if (konrad === '5505') {
        alert('JA TACK SÅ MYCKET DET VAR RÄTT!')
    } else {
        alert('Det var fel! försök igen.')
    }
}

function help() {
    alert('Jag ser att du behöver hjälp! Ett tips är att först försöka ta dig till köket och sedan till vardagsrummet.')
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

function changeColor() {
    const addColor = prompt('Vilken färg vill du byta ljuset till?')
    let main = document.getElementsByTagName('main')
    main[0].style.background = addColor   
}

function dice() {
    let randomNumber = Math.random() * 6
    return Math.ceil(randomNumber)
}

function rollDice() {
    let result = dice()
    alert('Du fick: ' + result)
}

function uselessAnswer() {
    let answer = prompt('Hej, här kan du ställa vilken fråga du vill!')

    if (answer === 'Jag behöver hjälp!') {
        alert('Jo tack jag märker det, här är din kod som du behöver: 5505')
    } else {
        alert('Jag kan tyvärr inte svara på det!')
    }
}