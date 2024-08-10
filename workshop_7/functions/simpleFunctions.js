/*
Define and then test each function!

1. Write a function that prints "Hello, everyone!" to the console.
2. Write a function that takes two numbers as input and returns their sum.
3. Write a function that multiplies two numbers and returns the result.
4. Write a function that checks if a given number is even.
5. Write a function that converts a temperature from Celsius to Fahrenheit. ( (celsius * 9/5) + 32 )
*/

function greet() {
    console.log("Hello, everyone!");
}

function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
} 

function isEven(number) {
    if (number % 2 === 0){
        console.log('even');
        return;
    }
    console.log('odd');
}

function toFarenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

greet();
console.log(add(5, 7)); // function call
console.log(add(8, 9));
console.log(multiply(3, 4));
isEven(25);
isEven(22);

console.log(toFarenheit(30));
console.log(toFarenheit(5));
