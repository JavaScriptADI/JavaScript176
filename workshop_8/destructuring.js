// Example 1
const person = {
    name: "Alice",
    age: 30,
    city: "New York"
};

const { name, age, pet } = person;
console.log(name); // Logs: Alice
console.log(age); // Logs: 30
console.log(pet);


// Example 2

const { name: firstName, age: years } = person;
console.log(firstName); // Logs: Alice
console.log(years); // Logs: 30


// Example 3 Array
const names = ["gio", "mari"];

const [person1, person2] = names;

console.log(person1, person2);