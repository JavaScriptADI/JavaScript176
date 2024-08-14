const todoDiv = document.getElementById('todo');
const addBtn = document.getElementById('addTaskBtn');
let count = 0;

console.log(todoDiv);
console.log(todoDiv.children);

function createLi (text) {
    const li = document.createElement('li');
    const button = document.createElement('button');
    button.addEventListener('click', (e) => {
        li.remove();
    });
    button.style.width = '100%';
    button.classList.add('btn', 'btn-danger');

    li.style.marginBottom = '1rem';
    li.className = 'p-1 border border-primary';

    button.innerText = text;
    li.appendChild(button);
    return li;
}

const children = Array.from(todoDiv.children);

addBtn.addEventListener('click', (e) => {
    count++;
    todoDiv.appendChild(createLi(`Task ${count}`));
})

/*
for (const [i, li] of children.entries()) {
    const button = document.createElement('button');
    button.addEventListener('click', (e) => {
        // console.log(`Delete`, li);
        li.remove();
    });
    console.log(button);
    console.log(i, li);
    // li.innerText = `<button>Task ${i + 1}</button>`;
    // li.innerHTML = `<button>Task ${i + 1}</button>`;

    button.innerText = `Task ${i + 1}`;
    li.innerHTML = null;
    li.appendChild(button);

}
*/
