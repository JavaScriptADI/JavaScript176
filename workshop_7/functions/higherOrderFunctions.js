// Example 1
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(function (number) {
    return number * 2;
});

console.log(doubled); // Logs: [2, 4, 6, 8, 10]


// Example 2
const evenNumbers = numbers.filter(function (number) {
    return number % 2 === 0;
});

console.log(evenNumbers); // Logs: [2, 4]


// Example 3

const sum = numbers.reduce(
    function (accumulator, currentValue) {
        return accumulator + currentValue;
    },
    0
);

console.log(sum);
