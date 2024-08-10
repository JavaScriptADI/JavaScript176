/*
1. Write a function that greets a person by name, with a default name if none is provided.
2. Write a function that multiplies two numbers, with a default value for the second number.
3. Write a function that calculates the area of a rectangle, with default values for width and height.
4. Write a function that prints a message with optional exclamations, using a default number of exclamations.
*/

function greet(name = "John") {
    console.log(`Hello ${name}`);
}

function multiply(a, b = 1) {
    return a * b;
}

function area(width = 1, height = 1) {
    return width * height
}

function printMesaage(message, exclamations = 1) {
    console.log(message + "!".repeat(exclamations));
}

greet(); // Equivalent
greet("John"); // Equivalent
greet("James");

console.log(multiply(5));
console.log(multiply(5, 5));
console.log(area());
console.log(area(5, 5));

printMesaage("Hello");
printMesaage("SCREAM", 7);


