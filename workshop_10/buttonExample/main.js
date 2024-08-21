const btn = document.querySelector('button');
const newBtn = document.createElement('button');
newBtn.textContent = 'text';

btn.addEventListener('click', () => {
    alert('Clicked');
});

newBtn.addEventListener('click', () => {
    alert('New button has been clicked!');
});

document.body.appendChild(newBtn);