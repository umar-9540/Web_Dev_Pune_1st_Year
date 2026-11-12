// // FUNCTION DECLARATION

// var a = 10;

// function greet(name = "Riya") {
//     let
//     console.log("Hello " + name);
// }

// greet("Ankit");

// // FUNCTION EXPRESSION

// let a = function (name) {
//     console.log("Hello " + name);
// }

// a("Riya");

// // ARROW FUNCTION

// let b = (name) => {
//     console.log("Hello " + name);
// }

// b("Riya");

function handler (a, b, operation) { 
    // Handler is Higher Order Function which takes another function as argument
    return operation(a, b);
}

function add(a, b) {
    return (a + b);
}

function multiply(a, b) {
    return (a * b);
}

// add(5, 10);
// multiply(5, 10);
console.log(handler(5, 10, add));
console.log(handler(5, 10, multiply));
// add and multiply are callback functions which are passed as argument to 
// handler function