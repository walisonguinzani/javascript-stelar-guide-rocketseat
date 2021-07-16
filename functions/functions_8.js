//6.9 Callback Function

function sayMyName(name) {
    console.log('Antes de executar a funcao callback')

    name()

    console.log('depois de executar a funcao callback')
}

sayMyName(
    () => {
        console.log('estou em uma callback')
    }
)