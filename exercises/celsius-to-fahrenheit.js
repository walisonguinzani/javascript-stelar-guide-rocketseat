/*11.3 Exercicio 3 - Celsius to Fahrenheit

Crie uma função que receba uma string em Celsius ou Fahrenheit e faça a transformação de uma unidade para outra

C = (F - 32) * 5/9
F = C * 9/5 + 32

*/

let temperature = '10c'

function TemperatureConverter() {
    //temperature = str.temperature(/(\d+)/)
    if (temperature.toUpperCase().includes("C")) {
        let Fahrenheit = parseFloat(temperature) * 9/5 +32
        console.log(`The temperature in Fahrenheit is: ${Fahrenheit}ºF`)
    } else if (temperature.toUpperCase().includes("F")) {
        let Celsius = (parseFloat(temperature) - 32)* 5/9
        console.log(`The temperature in Celsius is: ${Celsius}ºC`)
    } else {
        console.log("Try typing the temperature follow the C or F.")
    }
    
}

TemperatureConverter()