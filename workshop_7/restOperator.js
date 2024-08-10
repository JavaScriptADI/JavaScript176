// Example 1
const person = {
    name: "Alice",
    age: 30
};

const updatedPerson = {
    ...person,
    city: "New York"
};

console.log(updatedPerson); // Logs: { name: "Alice", age: 30, city: "New York" }


// Example 2

const { city, ...rest } = person;
console.log(rest); // Logs: { name: "Alice", age: 30 }
