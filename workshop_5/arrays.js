const firstName = 'Jo sh'; // strings are immutable
// firstName[0] = 'a';
console.log(firstName);
console.log("\"" + firstName[4] + "\"");

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(numbers);
console.log(numbers[0]);
const tbilisiTemps = [24, 27, 28, 29, 31, 29, 33, 35, 32, 29];
console.log(tbilisiTemps);
// access the elements
console.log(tbilisiTemps[0]);
console.log(tbilisiTemps[9]);

// adding new elements
tbilisiTemps.push(31);

console.log(tbilisiTemps);
console.log(`Days recorded: ${tbilisiTemps.length}`);
tbilisiTemps.unshift(37);
console.log(tbilisiTemps);
console.log(`Days recorded: ${tbilisiTemps.length}`);

// Removing elements from array
tbilisiTemps.pop();
console.log(tbilisiTemps);
tbilisiTemps.shift();
console.log(tbilisiTemps);

// change elements in the array
tbilisiTemps[1] = 16;
tbilisiTemps[2] += 1;
console.log(tbilisiTemps);

console.log(tbilisiTemps.slice(0, 5));
const a = tbilisiTemps[5];
tbilisiTemps.splice(5, 1);

if (tbilisiTemps[5] === a) {
    console.log('WTH');
}
console.log(tbilisiTemps.length);
console.log(tbilisiTemps);

let s = 0;
for (let i = 0; i < tbilisiTemps.length; i++) {
    s += tbilisiTemps[i];
}
console.log(s / tbilisiTemps.length);
