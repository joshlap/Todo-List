//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

//Event Listeners
document.addEventListener('DOMContentLoaded', getTodos);
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('change', filterTodo);

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

    //add TODO to local storage
    saveLocalTodos(todoInput.value);

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
        //animation
        todo.classList.add("fall");
        todo.addEventListener('transitionend', function(){
            todo.remove();
        });
    }

    //Check mark Todo
    if(item.classList[0] == "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

function filterTodo(e) {
    const todos = document.querySelectorAll(".todo");
    console.log(todos);
    todos.forEach(function(todo){
        switch(e.target.value){
            case "all":
                todo.style.display = 'flex';
                break;
            case "completed":
                if(todo.classList.contains('completed')){
                    todo.style.display = 'flex';
                }else{
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if(!todo.classList.contains("completed")){
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
        }
    });
    
}

function saveLocalTodos(todo){
    //check if there are existing entities
    let todos;
    if(localStorage.getItem('todos') == null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

/** */
function getTodos(){
     //check if there are existing entities
     let todos;
     if(localStorage.getItem('todos') == null){
         todos = [];
     }else{
         todos = JSON.parse(localStorage.getItem('todos'));
     }
     todos.forEach(function(todo){
            //Todo DIV
            const todoDiv = document.createElement('div');
            todoDiv.classList.add("todo");

            //Create LI
            const newTodo = document.createElement('li');
            newTodo.innerText = todo;
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
     });
} // 1:01:22