let todoObj = JSON.parse(localStorage.getItem("todoList")) || [
  {
    name: "make dinner",
    dueDate: "2024-8-26",
  },
  {
    name: "read novel",
    dueDate: "2024-8-26",
  },
];

// if (!todoObj) {
//   todoObj = [
//     {
//       name: "make dinner",
//       dueDate: "2024-8-26",
//     },
//     {
//       name: "read novel",
//       dueDate: "2024-8-26",
//     },
//   ];
// }

function renderToDoList() {
  let todoHTML = "";

  for (let i = 0; i < todoObj.length; i++) {
    const name = todoObj[i].name;
    const dueDate = todoObj[i].dueDate;
    const todoHtml = `
      <div>${name}</div> 
      <div>${dueDate}</div>
      <button onclick="
        todoObj.splice(${i}, 1);
        renderToDoList();
        saveToLocalStorage();
      " class="delete-todo-button">Delete</button>
    `;
    todoHTML += todoHtml;
  }

  const todoElement = document.querySelector(".js-todo-list");
  todoElement.innerHTML = `${todoHTML}`;
}

renderToDoList();

function addToDo() {
  const inputElement = document.querySelector(".todo-input");
  const inputDueDateElement = document.querySelector(".js-to-do-due-date");

  const name = inputElement.value;
  const dueDate = inputDueDateElement.value;
  // document.querySelector(".js-to-do").innerHTML = `${inputElement.value}`;

  todoObj.push({
    name: name,
    dueDate: dueDate,
  });
  // todoObj.push(dueDate);
  inputElement.value = "";

  renderToDoList();

  saveToLocalStorage();
}

function saveToLocalStorage() {
  const jsonToDo = JSON.stringify(todoObj);

  localStorage.setItem("todoList", jsonToDo);
}
