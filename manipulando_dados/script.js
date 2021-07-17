//7.12. Manipulando Arrays

let techs = ["html", "css", "js"]


//adicionar um item no fim
techs.push("nodejs")
//add no comeco
techs.unshift("sql")
// remove from end
//techs.pop()
// remove from start
//techs.shift()
// take just some elements from array
//console.log(techs.slice(1, 3))
// remove one or more item from anywhere position of array
//techs.splice(1, 1)
// find the position of and element in array
let index = techs.indexOf('html')
techs.splice(index, 1)

console.log(index)
console.log(techs)
