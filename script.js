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

//-------
