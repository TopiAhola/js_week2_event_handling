// array for todo list
let todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

// add your code here

//set item completed status
function checkBox(event){
  for (let item of todoList) {
    if(item.id.toString() === event.target.parentElement.id) {
      item.completed = event.target.checked;
    }
  }
  console.log(todoList);
}

//shows the add dialog box
function showAddDialog(evt){
  console.log("showAddDialog");
  document.querySelector('dialog').show();
}

//closes the dialog
function closeDialogButtonFunction(event){
  document.querySelector('dialog').close();
}

//add new item and update list
function addButtonFunction(evt){
  console.log("addButtonFunction")
  evt.preventDefault();
  document.querySelector('dialog').close()

  let newItemString = document.querySelector('#addTextField').value;
  console.log("Add item: " +newItemString);
  if(newItemString.length > 0) {
    todoList.push({
      id: ++itemCounter,
      task: newItemString,
      completed: false,
    });
    console.log(todoList);
  } else {
    console.log("Bad input")
  }
  updateList();
}

//delete item and update list
function delItemFunction(event){
  console.log("delItemFunction");
  let itemId = Number(event.target.parentElement.id);
  todoList = todoList.filter(item => item.id !== itemId);

  console.log(todoList);
  updateList();
}

//update list
function updateList() {
  const listElem = document.querySelector("#todoList");
  listElem.innerHTML = '';
  for (let item of todoList) {
    let liElem = document.createElement("li");
    liElem.setAttribute("id", item.id);

    let inputElem = document.createElement("input");
    inputElem.setAttribute("type", "checkbox");
    //inputElem.setAttribute("id", item.id);
    item.completed ? inputElem.setAttribute("checked", "true") : {};
    inputElem.addEventListener("change", checkBox);

    let labelElem = document.createElement("label");
    labelElem.setAttribute("for", item.id);
    labelElem.innerHTML = item.task;

    let delButton = document.createElement("button");
    delButton.setAttribute("type", "button");
    delButton.addEventListener("click", delItemFunction);
    delButton.innerHTML = "X";

    liElem.append(inputElem, labelElem, delButton);
    listElem.append(liElem);
  }
}

///////////////////////////////////////////
//'main'

//add handlers to buttons
let addTodoButton = document.querySelector('.add-btn');
addTodoButton.addEventListener('click', showAddDialog);

let dialogAddButton = document.querySelector('#dialogAddButton');
dialogAddButton.addEventListener('click', addButtonFunction);

let closeDialogButton  = document.querySelector('#closeDialogButton');
closeDialogButton.addEventListener('click',closeDialogButtonFunction)

//number
let itemCounter = todoList.length;

//show the list
updateList();
