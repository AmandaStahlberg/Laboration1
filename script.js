/** A function that takes you to the "livingroom". */
function goToLivingroom() {
    const code = prompt('Du behöver en kod för att komma in här. Skriv din kod här:')
    
    if(code === '102030'){
        window.location.href = './livingroom.html'
    } else {
        alert('Fel kod. Försök igen. Koden hittar du i köket.')
    }
}

/** Function to win the game or not. */
function leaveTheGame() {
    let leave = prompt('Vill du verkligen gå hem? Har du redan prövat allt som går att utforska?')
    if (leave == 'ja') {
        const escape = prompt('Oh nej, dörren har gått i lås. du behöver en speciell kod för att ta dig ut. Den hittar du i vardagsrummet.')
        if (escape === '302010') {
            alert('GRATTIS DU VANN!')
        } else {
            alert('Fel kod, försök igen. Kanske behöver du utforska rummen lite mer?')
        }
    } else if (leave == 'nej') {
        alert('Bra val att stanna en stund till hemma hos mig!')
    } else {
        alert('För att få ett svar, skriv ja eller nej i små bokstäver.')
    }
}

/** A function that takes you to the "Kitchen". */
function goToKitchen() {
    let six = prompt('Kasta tärningen och skriv in resultatet här:') 
    
    if (six === '6'){
        window.location.href = './kitchen.html'
    } else {
        alert('Det var fel, kasta tärningen igen. Har du inte kastat tärningen än? Gör det den ligger i din ryggsäck.')
    }
}

/** A toogle to change the color of the page between white and black. */
function lightSwitch() {
    let main = document.getElementsByTagName('main')
    let bodyStyle = main[0].style
    
    if (bodyStyle.background == 'white'){
        bodyStyle.background = 'black'
    } else {
        bodyStyle.background ='white'
    }
}

/** A function to get a challenge from "Konrad". */
function helpKonrad() {
    const konrad = prompt('Hjälp mig räkna ut 367*15, till din hjälp har du en miniräknare i ryggsäcken.')
    
    if (konrad === '5505') {
        alert('JA TACK SÅ MYCKET DET VAR RÄTT!')
    } else {
        alert('Det var fel! försök igen.')
    }
}

/** This gives you help when you click the questionmark. */
function help() {
    alert('Jag ser att du behöver hjälp! Ett tips är att först försöka ta dig till köket och sedan till vardagsrummet.')
}

/** Funtion for a simple calculator. */
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

/** Function to change the color on the page. */
function changeColor() {
    const addColor = prompt('Vilken färg vill du byta ljuset till? OBS jag kan bara färger på engelska?')
    let main = document.getElementsByTagName('main')
    main[0].style.background = addColor   
}

/** Function for calculate the number on the dice. */
function dice() {
    let randomNumber = Math.random() * 6
    return Math.ceil(randomNumber)
}

/** Function to roll the dice. */
function rollDice() {
    let result = dice()
    alert('Du fick: ' + result)
}

/** Funtion for a wierd "answer machine". */
function uselessAnswer() {
    let answer = prompt('Hej, här kan du ställa vilken fråga du vill!')

    if (answer === 'Jag behöver hjälp!') {
        alert('Jo tack jag märker det, här är din kod som du behöver: 102030')
    } else {
        alert('Jag kan tyvärr inte svara på det!')
    }
}

// functions for Kitchen

/** Function for the challenge in the kitchen. */
function helpKitchen() {
    const codeKitchen = prompt('För att jag ska kunna hjälpa dig, behöver jag koden från Konrad först')
    if (codeKitchen === '5505') {
    alert('Tack! Men jag kan tyvärr inte hjälpa dig! Men det kan "Useless-verktyget". Säga bara "Jag behöver hjälp!".')
    } else {
        alert('Det var tyvärr inte rätt.')
    }
}

// functions for Livingroom 

/** Function for the challenge in the kitchen. */
function helpLivingroom() {
    alert('För att se den gömda koden måste du måla om lampan. Färgpaletten finner du i ryggsäcken.')
}