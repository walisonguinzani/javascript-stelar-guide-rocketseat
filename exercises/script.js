/*11.3 Exercicio 2 - Fluxo Familiar

Crie um objeto que possuira 2 propriedades, ambas do tipo array:
    * receitas: []
    * despesas: []

Agora crie uma funcao que ira calcular o total de receitas e despesas e ira mostrar uma mensagem se a familia esta com saldo positivo ou negativo, seguido do valor do saldo.

*/

var FlowFamily = {
    incomes: [2000, 8260, 1400.65, 2000.00],
    expanses: [1400.56, 816, 567.23, 5000]
}

function sum(array){
    let total = 0

    for(let value of array){
        total += value
    }

    return total
}

function calculate(){
    const calculateIncomes = sum(FlowFamily.incomes)
    const calculateExpanses = sum(FlowFamily.expanses)

    const balance = calculateIncomes - calculateExpanses

    const positive = balance > 0
    const negative = balance <= 0

    if(positive){
        console.log(`UAUUUU A familia esta com saldo de: R$ ${balance}`)
    }else if(negative){
        console.log(`"Xii a familia deve fazer um curso de financas: R$ ${balance}`)
    }

    return balance
}


calculate()
