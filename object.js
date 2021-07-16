// object

const Person = {
    nickname: "Walishow",
    age: 26,
    weight: 78.7,
    isAdmin: true

}

console.log(`${Person.nickname} tem ${Person.age} anos.`)


// arrays

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
