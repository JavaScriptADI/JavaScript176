
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

const todos = JSON.parse(localStorage.getItem('todos'));
const todoForm = document.querySelector('#todo-form');
const todoList = document.querySelector('#todo-list');

console.log(todoForm);
console.log(todoList);

console.log(todos);

for (const todo of todos) {
    todo.createAt = new Date(todo.createAt);
    createTodo(todo);
}

function updateStorage() {
    localStorage.setItem('todos', JSON.stringify(todos));
    
}

function createTodo(todo) {
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
    li.addEventListener('click', (e) => {
        // if (li.style.textDecoration === 'line-through') {
        //     li.style.textDecoration = 'none';
        // } else {
        //     li.style.textDecoration = 'line-through';
        // }
        li.classList.toggle('done');
        todo.done = !todo.done;
        updateStorage();
    });
    
    deleteButton.addEventListener('click', (e) => {
        li.remove();
        todos.splice(todos.findIndex((todo_) => todo_ === todo), 1);
        updateStorage();
    });
    deleteButton.innerText = 'X';
    // li.innerText = newTodoText;
    if (todo.done) {
        li.classList.add('done');
    }
    li.innerHTML = `<span>${todo.todo} - ${todo.createAt.toLocaleDateString()} - ${todo.createAt.toLocaleTimeString()}</span>`;
    li.appendChild(deleteButton);
    todoList.appendChild(li);
}

todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const todoInput = todoForm.todo;
    if (todoInput.value === '') {
        alert('Please fill in blank fields!');
        return;
    }
    const newTodoText = todoForm.todo.value;
    todoForm.todo.value = '';
    const todo = {
        todo: newTodoText,
        createAt: new Date(),
        done: false,
    }
    todos.push(todo);
    createTodo(todo);
    updateStorage();
});

