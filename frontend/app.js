//Get the refrences to html elements
const taskInput = document.getElementById('todo-input');
const button = document.getElementById('add-todo-btn');
let tasks = []; 
const myTodoList = 'myTodoList';

// AllToDo 
document.addEventListener('DOMContentLoaded',()=> {
    getData();
});

taskInput.addEventListener('keyup',(event)=> {
    if(event.key === 'Enter') {
        event.preventDefault();
        button.click();
    }
})

button.addEventListener('click', () => {
    const curretValue = taskInput.value;
    if(curretValue === '') {
        alert('Please enter the value');
        return;
    } 
    let task = AddTask(curretValue);
    tasks.push(task);
    upsertData(tasks);
    createTaskElement(task);
    taskInput.value = '';
})


function AddTask(text){
    const newTask = {
        id : Date.now(),
        text : text,
        completed : false
    }

    return newTask
}

function upsertData(tasks) {
    tasksJSON = JSON.stringify(tasks);
    localStorage.setItem(myTodoList, tasksJSON);
}

function getData() {
    let tasksJson = localStorage.getItem(myTodoList);
        if(tasksJson) {
            let loadedtasks = JSON.parse(tasksJson);
            tasks = loadedtasks;
            for(const task of tasks) {
                createTaskElement(task);
            }
        } else {
            tasks = [];
        }
}


function createTaskElement(task) {
    // create the li element 
    const li = document.createElement('li');

    //setup the property and content 
    li.textContent = task.text;
    li.className = task.completed ? 'completed' : '' ;
    li.dataset.id = task.id;

    const taskList = document.getElementById('task-list');
    taskList.appendChild(li);

}