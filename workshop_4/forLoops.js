console.log('For loop');
console.log('this is 1st line\nthis is second line');
// for (start; stop; step)
for (let i = 0; i < 10; i++) {
    let row = '';
    for (let j = 0; j < 10; j++) {
        row += String(j);
    }
    console.log(row);
    // console.log(i);
}

