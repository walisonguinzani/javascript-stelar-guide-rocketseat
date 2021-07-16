//aula Adicionando Arquivos Js
console.log('Bem vindo ao starter!!')

//aula Comentários

//comentário linha única
/*
Comentários
multi
linhas
*/

//3. Tipos de Dados--------------------------------

//3.1. String

console.log('Walison')
console.log("Walison")
console.log(`

Walison

${1+1}

`) //multi line e permite adicionar valores (INTERPOLAÇÃO)

//3.2. Number
console.log(-33)//inteiros
console.log(12.5)//reais
console.log(12.5/6)//reais
console.log(12.5 / "walison")//Not a Number NaN
console.log(12.5 === Infinity)//infinito

//3.3. Boolean
console.log(true === false)
console.log(true === true)
console.log(false === false)

//3.4. Undefined vs Null
console.log(undefined) //
console.log(null) //considerado no js que objeto não tem nada
console.log(undefined === null)

//3.5. Object
/*
    Todos os objetos terão
        propriedades/atributos
        funcionalidades / metodos

*/
console.log({
    name: "Walison", 
    idade: 26,
    andar: function(){
        console.log("andar")
    } 
})

//3.6. Array
/*
    Array(vetores)
        uma lista
        agrupamento de dados

        ["Walison"], 26
*/
console.log({
    "Leite",
    "Ovos",
    2,
    3
})


//4.1. Variaveis
/* 
var
let
const constante
*/

let clima = "quente"
var clima1 = "frio"


console.log(clima)

//4.2. Tipos Dinamicos
let clima3 = ""

console.log(typeof clima)


//4.3. Tipos Dinamicos - 

/*
            conceito de hoisting = elevacao 

            var x
            console.log('> Existe x antes do bloco? ', x)
            {
                var x = 0
            }

                        //let x = 0 // local
            //console.log(x)


            //var y = 0 // o var e global e local ou seja executa tudo que esta dentro do script
            
            {
                var x = 0
            }
            console.log('> Existe x antes do bloco? ', x)
*/

// 4.4. Escopes - determina a visibilidade de alguma variavel no JS

/*        
        let y = 1
        {
            y = 0 // se eu nao definir o tipo ele procura nos outros escopos superiores
            console.log('existe o Y antes do bloco?', y) // let e local ou seja esta dentro do escope
        }
        console.log('existe o Y depois do bloco?', y) // erro de variavel local
        
*/

// 4.5. Nomeando Variaveis 
/*        
        O JS e case sensitive
        
*/

//5. Declaration assignment var
        //declaration
        var name

        //assignment or atribuicao de valores
        name = "Walison"

        // tipo de dado
        console.log(typeof name)
        
//5.1 Grouping Declarations

    let age = 20
    let isHuman = true

    // declaracoes conjuntas
    let age1, isHuman1

    age1 = 26
    isHuman1 = true

     //passando multiplos argumentos na funcao
console.log(name, age, isHuman1) //passando multiplos argumentos

//5.2 Concatenando e interpolando variáveis

        //concatenando valores
        console.log('o '+ name + ' tem '+ age + ' anos.')

        //interpolando valores com template literals or template strings
        console.log(`o ${name} tem ${age1} anos.`)

//5.3 Objects

    // object

    const Person = {
        nickname: "Walishow",
        age: 26,
        weight: 78.7,
        isAdmin: true

    }

    console.log(`${Person.nickname} tem ${Person.age} anos.`)

//5.4 Arrays

    const Animals = [
        'Lion',
        'Monkey',
        {// iniciando um objeto
            nameanimal: 'Frida',
            ageanimal: 1
        }
    ]
    // como acessar valores dentro do array

    console.log(Animals[2].nameanimal)
    console.log(Animals[0])