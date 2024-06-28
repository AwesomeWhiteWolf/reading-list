"use strict";
class Book {
  constructor(id, name, author, rate) {
      this.id = id;
      this.name = name;
      this.author = author;
      this.rate = rate;
  }
}
function showAll() {
  mainTable.innerHTML = '';
  column1.textContent = "Number";
  column2.textContent = "Name";
  column3.textContent = "Author";
  column4.textContent = "Rate";
  row.appendChild(column1); row.appendChild(column2); row.appendChild(column3); row.appendChild(column4);
  mainTable.appendChild(row);
  for (let i = 0; i < library.length; i++) {
    const row = document.createElement("tr");
    const column1 = document.createElement("th"); const column2 = document.createElement("th"); const column3 = document.createElement("th"); const column4 = document.createElement("th");
    column1.textContent = library[i].id;
    column2.textContent = library[i].name;
    column3.textContent = library[i].author;
    column4.textContent = library[i].rate;
    row.appendChild(column1); row.appendChild(column2); row.appendChild(column3); row.appendChild(column4);
    mainTable.appendChild(row);
  }
}
function sort() {
  let newArray = [];
  let gener = prompt();
  if (gener == 1) {
    for(let i = 0; i < library.length; i++) {
      for(let j = 0; j < library.length; j++) {
        if (library[j].id == (i+1)) {
          newArray.push(library[j]);
        }
      } 
    }
    library = newArray;
  }
  else if (gener == 2) {
    for(let i = 10; i > 0; i--) {
      for(let j = 0; j < library.length; j++) {
        if (library[j].rate == i) {
          newArray.push(library[j]);
        }
      } 
    }
    library = newArray;
  }
  showAll();
}
function add() {
  library.push(new Book((library.length+1), nameText.value, authorText.value, rateText.value)); 
  localStorage.setItem('savedLibrary', JSON.stringify(library));
  showAll();
}
function remove() {
  const nameToRemove = prompt();
  library = library.filter(item => item.name !== nameToRemove);
  for(let i = 0; i < library.length; i++) {
    library[i].id = i+1;
  } 
  localStorage.setItem('savedLibrary', JSON.stringify(library));
  showAll();
}
function find() {
  let find = prompt();
  let tempLibrary = library;
  library = library.filter(item => item.name === find);
  showAll();
  library = tempLibrary;
}


const mainTable = document.querySelector("table");
const row = document.createElement("tr");
const column1 = document.createElement("th"); const column2 = document.createElement("th"); const column3 = document.createElement("th"); const column4 = document.createElement("th");
const nameText = document.querySelector(".name");
const authorText = document.querySelector(".author");
const rateText = document.querySelector(".rate");
let library = [];
library = JSON.parse(localStorage.getItem('savedLibrary'));
showAll();
