const todoForm = document.querySelector(".js-toDoForm"),
    toDoInput = todoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODO_LS = "toDos";
let toDoArray = [];


const toDoInit = () => {
    loadToDos();
    todoForm.addEventListener('submit', toDoHandleSubmit);
};

const saveToDo = (id,checked,text) => {
    const newTodo = {
        id,
        checked: checked,
        text: text
    }

    toDoArray.push(newTodo);
    saveToDos();
}
const saveToDos = () => {
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

const scrollDown = () => {
    toDoList.scrollTop = 99999;
};

const checkTodo = (thisObj) => {
    const checkbox = event.target;
    const todoId = checkbox.parentNode.dataset.todoid;
    const checked = checkbox.parentNode.querySelector('input[type=checkbox]').checked;
    const todos = localStorage.getItem(TODO_LS);
    console.log(todos);
    if (todos !== null) {
        const parsedToDos = JSON.parse(todos);
        parsedToDos.forEach((currentTodo) => {
            if(currentTodo.id == todoId){
                currentTodo.checked = checked;
            }
        });
        toDoArray = parsedToDos;
        saveToDos();
    }
}

const paintToDo = (text,checked) => {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const checkboxLabel = document.createElement("label");
    const checkboxInput = document.createElement("input");
    const span = document.createElement("span");
    const newId = new Date().getTime();
    span.innerText = text;
    checkboxInput.type = 'checkbox';
    console.log(checked);
    checkboxInput.checked = checked;
    checkboxLabel.classList.add('material-checkbox');
    checkboxLabel.addEventListener('click',checkTodo);
    checkboxLabel.dataset.todoid = newId;

    li.id = newId;
    delBtn.innerText = "✕";

    delBtn.addEventListener('click', deleteToDo);

    checkboxLabel.appendChild(checkboxInput);
    checkboxLabel.appendChild(span);
    li.appendChild(checkboxLabel);
    li.appendChild(delBtn);
    toDoList.appendChild(li);
    saveToDo(newId,checked,text);
    scrollDown();
};

const toDoHandleSubmit = (event) => {
    event.preventDefault();
    const todo = toDoInput.value;
    paintToDo(todo,false);

    toDoInput.value = "";
}

const loadToDos = (name) => {
    const todos = localStorage.getItem(TODO_LS);
    console.log(todos);
    if (todos !== null) {
        const parsedToDos = JSON.parse(todos);
        parsedToDos.forEach((currentTodo) => {
            paintToDo(currentTodo.text,currentTodo.checked);
        });
    }
};
toDoInit();