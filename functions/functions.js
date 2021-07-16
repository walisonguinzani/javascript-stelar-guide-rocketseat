//6.10 Function Constructor

function Person (name){
    this.name = name
    this.walk = function() {
        return this.name + " esta andando"
    }
}

const wali = new Person("Walison")
const joao = new Person ("joao")
console.log(wali.walk())
console.log(joao.walk())

let nome = new String("Walishow")
console.log(nome)

let date = new Date("2021-07-16 18:45:00")
console.log(date)