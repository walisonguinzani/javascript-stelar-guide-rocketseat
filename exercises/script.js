/*11.3 Exercicio 3 - Celsius to Fahrenheit

Crie uma função que receba uma string em Celsius ou Fahrenheit e faça a transformação de uma unidade para outra

C = (F - 32) * 5/9
F = C * 9/5 + 32

*/

 let temperature = "60" 

function TemperatureConverter () {
    let Celsius = (parseFloat(temperature) - 32)* 5/9
    let Fahrenheit = parseFloat(temperature) * 9/5 +32
    
    return(Celsius, Fahrenheit)
}


console.log(TemperatureConverter())
