// exports.sum = (a,b) =>{
//     return a + b;
// }

// exports.diff = (a,b) =>{
//     return a - b;
// }

// these are the property of commonJs

// ES-6 Module

function sum(a, b) {
    return a + b;
}

function diff(a, b) {
    return a - b;
}

export { sum, diff };  // this is how we export multiple functions from