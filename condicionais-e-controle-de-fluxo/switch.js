//9.3 switch

function calculate (number1, operator, number2){
    
    let result = 0

    switch (operator) {
        case '+': 
            result = number1 + number2
            break
        case '-': 
            result = number1 - number2
            break        
        case '*': 
            result = number1 * number2
            break
        case '/': 
            result = number1 / number2
            break
        default:
            console.log('nao implementado')
            break
    }

    return result
}

console.log(calculate(4, '+', 8))

