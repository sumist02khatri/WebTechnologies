//! Funtion to perform Specific task according to the requirement
// Syntax: function functionName(parameters) {
//logic to be executed
//}
//functionName(arguments);

function  addNumbers() {
  let num1 = 10;
    let num2 = 20;
    //return num1 + num2;
    console.log(num1 + num2);
}
//console.log(addNumbers());
addNumbers();
addNumbers();

//!named Function
function demo() {
  console.log("hello hi hello");
}
demo();

//!function with parameters
//! parameters are the values which are passed to the function while calling it
//! arguments are the values which are passed to the function while calling it
 function add(a, b) {
  //console.log(a + b);
  return a + b;
}
console.log(add(100, 20));

//! function declaration: a named function declared with the function keyword
function greet(name) {
  return `Hello, ${name}`;
}
console.log(greet("Alice"));

//! function expression: a function stored inside a variable
const multiply = function (a, b) {
  return a * b;
};
console.log(multiply(5, 4));

//! anonymous function: a function without a name, usually used as a callback
setTimeout(function () {
  console.log("Anonymous function executed");
}, 0);

//! arrow function: a shorter way to write a function expression
const square = (number) => number * number;
console.log(square(6));

//! arrow function with one parameter: parentheses are optional for one parameter
const double = number => number * 2;
console.log(double(10));

//! nested function: a function declared and called inside another function
function outerFunction() {
  function innerFunction() {
    console.log("Inner function executed");
  }
  innerFunction();
}
outerFunction();

//! callback function: a function passed as an argument to another function
function processNumber(number, callback) {
  console.log(callback(number));
}
processNumber(5, square);

//! higher-order function: a function that accepts or returns another function
function createMultiplier(factor) {
  return number => number * factor;
}
const triple = createMultiplier(3);
console.log(triple(4));

//! immediately invoked function expression (IIFE): a function that runs immediately after creation
(function () {
  console.log("IIFE executed");
})();

//! default parameter function: a default value is used when an argument is missing
function welcome(name = "Guest") {
  console.log(`Welcome, ${name}`);
}
welcome();

//! rest parameter function: rest collects multiple arguments into an array
function sumAll(...numbers) {
  return numbers.reduce((total, number) => total + number, 0);
}
console.log(sumAll(1, 2, 3, 4));

//! recursive function: a function that calls itself until a condition is met
function factorial(number) {
  if (number <= 1) return 1;
  return number * factorial(number - 1);
}
console.log(factorial(5));

//! generator function: a function that pauses and yields multiple values
function* countToTwo() {
  yield 1;
  yield 2;
}
console.log([...countToTwo()]);

//! async function: a function that always returns a Promise
async function fetchMessage() {
  return "Message loaded";
}
fetchMessage().then(message => console.log(message));

