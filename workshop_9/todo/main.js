
/*
const div = document.querySelector('div');
console.log(div);
window.addEventListener('mousemove', (e) => {
    console.log(e);
    div.innerText = `${e.clientX}, ${e.clientY}`;
    // document.body.style.backgroundColor = `rgb(${e.clientX % 255}, ${e.clientY % 255}, ${(e.clientY + e.clientX) % 255})`;
});


const p = document.createElement('p');
p.innerText = 'Text';

document.body.appendChild(p);
console.log(p);
*/

const todoForm = document.querySelector('#todo-form');
const todoList = document.querySelector('#todo-list');

console.log(todoForm);
console.log(todoList);

todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const todoInput = todoForm.todo;
    if (todoInput.value === '') {
        alert('Please fill in blank fields!');
        return;
    }
    const newTodoText = todoForm.todo.value;
    todoForm.todo.value = '';

    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
    li.addEventListener('click', (e) => {
        // if (li.style.textDecoration === 'line-through') {
        //     li.style.textDecoration = 'none';
        // } else {
        //     li.style.textDecoration = 'line-through';
        // }
        li.classList.toggle('done');
    });
    
    deleteButton.addEventListener('click', (e) => {
        li.remove();
    });
    deleteButton.innerText = 'X';
    // li.innerText = newTodoText;
    li.innerHTML = `<span>${newTodoText}</span>`;
    li.appendChild(deleteButton);
    todoList.appendChild(li);
});
