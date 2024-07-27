let i = 1;

while (i < 8) {
    let row = '#';
    while (row.length < i) {
        row += '#';
    }
    console.log(row);
    i++;
}
i = 0;
let row = '';
while (i < 7) {
    row += '#';
    console.log(row);
    i++;
}

i = 1;
while (i < 8) {
    console.log('#'.repeat(i));
    i++;
}

for (let i = '#'; i.length < 8; i += '#') {
    console.log(i);
}
