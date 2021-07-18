//9.2 if...else

let temperature = 36
let highTemperature = temperature >= 37.5
let mediumTemperature = temperature < 37.5 && temperature >= 37

/* if (temperature >= 37){
    console.log("Esta com febre, procure um medico para se tratar.")
}else{
    console.log("Esta tudo bem deve ser um mal estar.")
}*/

if (highTemperature){
    console.log("Esta com febre alta.")
}else if (mediumTemperature){
    console.log ("Febre moderada")
} else {
    console.log ("Saudavel")
}