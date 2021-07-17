//8.13 Falsy and Truthy

/*
    Falsy
    Quando um valor e considerado false em contextos onde um booleano e obrigatorio (condicionais e loops)

    false
    0
    -0
    ""
    null
    undefined
    NaN
*/

console.log( NaN ? 'verdadeiro' : 'false' )

/*
    Truthy
    Quando um valor e considerado true em contextos onde um booleano e obrigatorio (condicionais e loops)

    true
    {}
    []
    1
    3.23
    "0"
    "false"
    -1
    Infinity
    -Infinity
*/

console.log( -Infinity ? 'verdadeiro' : 'false' )