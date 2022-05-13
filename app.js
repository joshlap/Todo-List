//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

//Functions

function addTodo(event){
    //Prevent form from submit
    event.preventDefault();
    console.log("hello");

    //Todo DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");

    //Create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //Check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML ='<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    //trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML ='<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //APPEND to list
    if(todoInput.value != ""){ //check if empty string
        todoList.appendChild(todoDiv);
    }

    //Clear Todo input value after clicking
    todoInput.value="";
}   

function deleteCheck(e){
    const item = e.target;
    //DELETE Todo
    if(item.classList[0] == 'trash-btn'){
        const todo = item.parentElement;
        todo.remove();
    }

    //Check mark Todo
    if(item.classList[0] == "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    } //37.24
}
