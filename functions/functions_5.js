//6.4 Function Scope

let subject

function createThink() {
    subject = 'study'

}

console.log(subject)
createThink()
console.log(subject)