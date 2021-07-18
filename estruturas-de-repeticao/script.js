// 10.4 For...in

let Person = {
    name: 'Walison',
    age: 26,
    weight: 82.4
}

for(let property in Person){
    console.log(property)
    console.log(Person[property])
}