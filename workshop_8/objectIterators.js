const person = {
    name: "George",
    age: 10
}

for (const key of Object.keys(person)) {
    console.log(key);
}

for (const value of Object.values(person)) {
    console.log(value);
}

for (const item of Object.entries(person)) {
    // console.log(key, value);
    console.log(item);
}

// Destructure
for (const [key, value] of Object.entries(person)) {
    console.log(key, value);
}