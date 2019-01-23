const todoForm = document.querySelector(".js-toDoForm"),
  toDoInput = todoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODO_LS = "toDos";
let toDoArray = [];


const toDoInit = () => {
    loadToDos();
    todoForm.addEventListener('submit',toDoHandleSubmit);
};

const saveToDo = (text) =>{
    const newTodo = {
        id: toDoArray.length+1,
        text: text
    }

    toDoArray.push(newTodo);
    saveToDos();
}
const saveToDos = () =>{
    localStorage.setItem(TODO_LS, JSON.stringify(toDoArray));
}

const deleteToDo = (event) => {
    event.target.parentNode.remove();
    const btn = event.taget;
    const li = event.target.parentNode;
    li.remove();
    const cleanToDos = toDoArray.filter((currentTodo) => {
        return currentTodo.id !== parseInt(li.id);
    });
    toDoArray = cleanToDos;
    saveToDos();
};

const paintToDo = (text) => {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = text;
    const delBtn = document.createElement("button");
    const newId = toDoArray.length + 1;
    li.id = newId;
    delBtn.innerText = "✖";

    delBtn.addEventListener('click',deleteToDo);

    li.appendChild(span);
    li.appendChild(delBtn);
    toDoList.appendChild(li);
    saveToDo(text);
};

const toDoHandleSubmit = (event) => {
    event.preventDefault();
    const todo = toDoInput.value;
    paintToDo(todo);

    toDoInput.value = "";
}

const loadToDos = (name) => {
    const todos = localStorage.getItem(TODO_LS);
    console.log(todos);
    if(todos !== null){
        const parsedToDos = JSON.parse(todos);
        parsedToDos.forEach((currentTodo)=>{
            paintToDo(currentTodo.text);
        });
    }
};
toDoInit();