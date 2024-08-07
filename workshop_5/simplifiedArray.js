// Data Structure: Array
const firstNames = ['John', 'Jane', 'Jack', 'Jill', 'James', 'Jimmy', 'James'];
for (let i = 0; i < firstNames.length; i++) {
    console.log(firstNames[i]);
}
// console.log(firstNames[0]);f
// console.log(firstNames[1]);
// console.log(firstNames[2]);
// console.log(firstNames[3]);
// console.log(firstNames[4]);

// CRUD - Create, Read, Update, Delete
// Create
firstNames.push('Jenny');
firstNames.unshift('Marry');

// Read
console.log(firstNames[firstNames.length - 1]);


// Update
firstNames[0] = 'Johnny';

// Delete
firstNames.pop();
firstNames.shift();
