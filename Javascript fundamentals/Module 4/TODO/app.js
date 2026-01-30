console.log("To Do Started");

let taskInput = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");

// let addBtnAlt = document.querySelector("#addBtn");
// console.log(addBtnAlt);
// addBtn.addEventListener("click", function () {
//   console.log("Add button clicked");
// });

addBtn.addEventListener("click", () => {
  console.log(taskInput.value);
});

taskInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    console.log(taskInput.value);
  }
});

// create element

let li = document.createElement("li");
li.textContent = "Learn js";
console.log(li);
