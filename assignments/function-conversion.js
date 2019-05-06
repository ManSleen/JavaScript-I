// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

const myFunction = () => console.log("Function was invoked!");
myFunction();

console.log("----------");

const anotherFunction = param => param;
console.log(anotherFunction("Example"));

console.log("----------");

const add = (param1, param2) => param1 + param2;

console.log(add(1, 2));

console.log("----------");

const subtract = (param1, param2) => param1 - param2;
console.log(subtract(1, 2));

console.log("----------");

// Stretch

exampleArray = [1, 2, 3, 4];
const triple = exampleArray.map(num => num * 3);
console.log(triple);
