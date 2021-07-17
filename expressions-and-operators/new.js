//8.2 New

/* 
    new

    * left-hand-side expression
    * criar um novo objeto
    
*/

let name = new String('Walison')
name.surName = "Guinzani"
let age = new Number(26)

console.log(name.surName, age)

let date = new Date('2021-07-18')
console.log(date.__proto__)