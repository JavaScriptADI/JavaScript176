// Example 1
const person = {
    name: "Alice",
    age: 30,
    city: "New York"
};

const { name, age } = person;
console.log(name); // Logs: Alice
console.log(age); // Logs: 30


// Example 2

const { name: firstName, age: years } = person;
console.log(firstName); // Logs: Alice
console.log(years); // Logs: 30
