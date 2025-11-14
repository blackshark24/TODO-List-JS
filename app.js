//Get the refrences to html elements
const taskInput = document.getElementById('todo-input');
const button = document.getElementById('add-todo-btn');

button.addEventListener('click', () => {
    const curretValue = taskInput.value;
    console.log(curretValue);
})

