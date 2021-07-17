//7.10. Cont elements into an Array

let myArray = new Array('a', 'b', 'c')

console.log([
    'a',
    {type:"array"},
    function () {
    return "alo"        
    }].length)