
const width = window.innerWidth;
const countX = 50;
const countY = 50;

function random(a, b) {
    return Math.floor(Math.random() * (b - a) + a);
}

function getRandomColor() {
    return `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`;
}

for (let i = 0; i < countY; i++) {
    const box = document.createElement('div');
    box.style.display = 'flex';
    box.style.width = '100vw';
    box.style.height = `${100 / countY}vh`;

    for (let j = 0; j < countX; j++) {
        const smallBox = document.createElement('div');
        smallBox.style.width = `${width / countX}%`;
        // smallBox.style.height = '100vh';
        smallBox.style.height = '100%';
        smallBox.style.background = getRandomColor(); // background: rgb(15, 17, 130)
        box.appendChild(smallBox);
        smallBox.addEventListener('mouseover', (e) => {
            e.target.style.background = getRandomColor();
        });
        // setInterval(() => {
        //     smallBox.style.background = getRandomColor();
        // }, 100);
    }
    document.body.appendChild(box);
}
