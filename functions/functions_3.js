//6.2 Retornando valores dentro da Funcao

let total = 0
//function expression or function anonymous
//parametros (parameters)
const sum = function(number1, number2){
    let total = number1+number2
    return total
}

let number1 = 34
let number2 = 25

// console.log(`o numero 1 e ${number1}`)
// console.log(`o numero 2 e ${number2}`)
console.log(`a soma e ${sum(number1,number2)}`)
console.log(total)