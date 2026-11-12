console.log(a);
greet();
// b();
console.log(b);

// var a = 10;
// LET and CONST are hoisted but not accessible 
// before initialisation
// they will remain in Temporal Dead Zone
var a = 10;


function greet () {
    console.log("Hello");
}
// only function declaration will be hoisted
// Func Expression and Arrow func will be treated as variable
var b = function () {
    console.log("b");
}