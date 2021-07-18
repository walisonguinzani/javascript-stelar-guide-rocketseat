//9.4 Throw e Try/Catch

// throw - disparar
function sayMyName(name = '') {
    if (name === ''){
        throw new Error("Nome e necessario")
    }

    console.log(name)
}

//try...catch - pegar

try{
    sayMyName('Walison')

}catch(e){
    console.log(e)
}

console.log('apos o try/catch')