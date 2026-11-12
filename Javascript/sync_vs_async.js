// console.log("First");
// console.log("Second");
// console.log("Third");

console.log("First");

// setTimeout(() => {}, delay) SYNTAX, delay in miliseconds
const timeoutId = setTimeout(() => {
    console.log("Second");
}, 0);

clearTimeout(timeoutId);

// console.log("Third");

// setInterval(() => {}, delay) SYNTAX, delay in miliseconds

let i = 0;

const intervalId = setInterval(() => {
    console.log(i);
    i++;

    if (i > 5) {
        clearInterval(intervalId);
    }
}, 1000);