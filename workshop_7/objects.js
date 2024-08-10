// Data Structure: Object
// Example 1
const person = {
    name: "Alice",
    age: 30,
};

// Accessing object properties
console.log(person.name); // Logs: Alice
console.log(person.age); // Logs: 30

// Example 2
const student = {
    name: "Emma",
    age: 22
};

console.log(student["name"]); // Logs: Emma
// Changing object properties
student["age"] = 23;
console.log(student["age"]); // Logs: 23


// Example 3
const book = {
    title: "JavaScript Guide",
    author: "John Doe"
};

console.log(book.title); // Logs: JavaScript Guide
book.author = "Jane Doe";
console.log(book.author); // Logs: Jane Doe
// Adding new properties
book.publisher = "Oxford";
console.log(book.publisher); // Logs: Oxford


// Example 4
// Deleting object properties
delete person.age;
console.log(person.age); // Logs: undefined