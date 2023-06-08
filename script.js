// ------ getElementById and getElementByClass
// let itemUL = document.getElementById("items");
// let items = itemUL.getElementsByClassName("item");
// for (let i = 0; i < items.length; i++) {
//   items[i].style.color = "blue";
// }

//------- Css using javascript
// console.log(document.getElementById("#new-task"));
// let HeaderElement = document.getElementById("header");
// console.log(HeaderElement.textContent);
// console.log(HeaderElement.innerHTML);
// console.log(HeaderElement.innerText);

// HeaderElement.style.fontSize = "20px";
// HeaderElement.style.color = "red";
// HeaderElement.style.border = "1px solid red";
// HeaderElement.style.padding = "20px";

// ---- getElementByTag
// let tags = document.getElementsByTagName("h2");
// console.log(tags);

// ---- querySelector
// let header = document.querySelector(".header");
// console.log(header);

// let newTask = document.querySelector("#new-task");
// console.log(newTask);

//----- Item & last item style uses Query selector
// let lastItems = document.querySelectorAll(".item:last-child");
// // lastItems.style.color = "red";
// for (let element of lastItems) {
//   element.style.color = "red";
// }

//----- Parent/chield relation
// const grandPrent = document.querySelector(".todo-list");
// const parent = grandPrent.parentElement;
// const children = parent.children;
// console.log(children);

// const childrenOne = document.querySelector(".item");
// const childrenTwo = childrenOne.nextElementSibling;
// console.log(childrenTwo);

//------ Creating an Element
// const divElement = document.createElement("div");
// divElement.className = "red";

// divElement.setAttribute("id", "red");
// divElement.setAttribute("title", "This is title");

// const container = document.querySelector(".todo-list");
// const h2Element = container.querySelector("h2");
// container.insertBefore(divElement, h2Element);
// container.appendChild(divElement);
// container.append("Hello world");

// const a = container.appendChild(divElement);
// const b = container.append(divElement);
// const c = container.append(
//   divElement,
//   document.createElement("span"),
//   "Hellow World"
// );

//------- Event Listener

// const headerElement = document.querySelector('#header');
// headerElement.addEventListener('mousemove', (event) => {
//     console.log(event);
// })

// click
// dblclick
// mousedown
// mouseup
// mouseenter
// mouseleave
// mouseover
// mouseout
// mousemove

// const inputElement = document.querySelector('input[type="text"]');
// inputElement.addEventListener('input', (event) => {
//     console.log(event);
// });

// keyup
// keydown
// keypress
// focus
// blur
// cut
// copy
// paste
// input

// const formElement = document.querySelector('form');
// formElement.addEventListener('submit', (event) => {
//     event.preventDefault();
//     console.log(event.target);
// });




/* =====================================================
* Title: To Do application using vanilla JS DOM 
* Description: This is JS file has all the 
  JS functions necessary to control the to do application
* Author: Saiful Islam Akash (Source: Learn With Sumit)
* Date: 4th jun 2023
  =======================================================
*/

// Select element and assign them to variables
let newTask = document.querySelector('#new-task');
let form = document.querySelector('form');
let toDoUl = document.querySelector('#items');
let completeUl = document.querySelector('.complete-list ul');

// Functions
let createTask = function(task) {
  let listItem = document.createElement('li');
  let checkBox = document.createElement('input');
  let label = document.createElement('label');

  label.innerText = task;
  checkBox.type = 'checkbox';

  listItem.appendChild(checkBox);
  listItem.appendChild(label);

  return listItem;
}

let addTask = function(event){
  event.preventDefault();
  let listItem = createTask(newTask.value);
  toDoUl.appendChild(listItem);
  newTask.value = "";
  // bind the new list item to the incomplete list
  bindInCompleteItems(listItem, completeTask);
}

let completeTask = function(){
  let listItem = this.parentNode;
  let deleteBtn = document.createElement('button');
  deleteBtn.innerText = 'Delete';
  deleteBtn.className = 'delete';
  listItem.appendChild(deleteBtn);

  let checkBox = listItem.querySelector('input[type="checkbox"]');
  checkBox.remove();
  completeUl.appendChild(listItem);
  bindCompleteItems(listItem, deleteTask);
}

let deleteTask = function(){
  let listItem = this.parentNode;
  let ul = listItem.parentNode;
  ul.removeChild(listItem);
}

let bindInCompleteItems = function(taskItem, checkboxClick){
  let checkBox = taskItem.querySelector('input[type="checkbox"]');
  checkBox.onchange = checkboxClick;
}

let bindCompleteItems = function(taskItem, deleteButtonClick){
  let deleteButton = taskItem.querySelector('.delete');
  deleteButton.onclick = deleteButtonClick;
}

// for(let i=0; i< toDoUl.children.length; i++){
//   bindInCompleteItems(completeUl.children[i], completeTask);
// }

// for(let i=0; i< completeUl.children.length; i++){
//   bindCompleteItems(completeUl.children[i], deleteTask);
// }

form.addEventListener('submit', addTask);

