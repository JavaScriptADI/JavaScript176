let firstName = prompt("What's your name?");
// Type Conversion / Type Casting
let age = Number(prompt("What's your age?")); // hard-coding
let isAdult = age >= 18; // dynamic computing

console.log(typeof firstName);
console.log(typeof age);
console.log(`Your name is ${firstName}, you are ${age} years old and you are adult: ${isAdult}`);
