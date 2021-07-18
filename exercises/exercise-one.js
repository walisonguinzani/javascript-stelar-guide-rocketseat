/*11.2 Exercicio 1

Transformar Notas Escolares

Crie um algoritmo que transforme as notas escolares do sistema numerico para sistema de notas em strings tipo A B C D F

* de 90 para cima   - A
* entre 80 - 89     - B
* entre 70 - 79     - C
* entre 60 - 69     - D
* menor que 60      - F

*/

let notaEscolar;
let scoreFinal;

function getScore(notaEscolar){
    let scoreA = notaEscolar >= 90 && notaEscolar <= 100
    let scoreB = notaEscolar >= 80 && notaEscolar < 90
    let scoreC = notaEscolar >= 70 && notaEscolar < 80
    let scoreD = notaEscolar >= 60 && notaEscolar < 70
    let scoreF = notaEscolar >= 0 && notaEscolar < 60
    
    
    if (scoreA){
        scoreFinal = "A"
    }else if(scoreB){
        scoreFinal = "B"
    }else if(scoreC){
        scoreFinal = "C"
    }else if(scoreD){
        scoreFinal = "D"
    }else if(scoreF){
        scoreFinal = "F"
    }else{
        console.log('Insira um valor entre 0 e 100')
    }

    return scoreFinal
}

console.log(getScore(50))
console.log(getScore(101))
console.log(getScore(-1))
console.log(getScore(1))
console.log(getScore(45))
console.log(getScore(65))
console.log(getScore(75))
console.log(getScore(85))
console.log(getScore(95))
