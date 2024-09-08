const todoObj = [
  {
    name: 'make dinner',
    dueDate: '2024-8-26',
  },
  {
    name: 'read novel',
    dueDate: '2024-8-26',
  },
];

function renderToDoList() {
  let todoHTML = '';

  todoObj.forEach((value, index) => {
    // const name = todoObj[i].name;
    // const dueDate = todoObj[i].dueDate;
    // const name = todoObj[index].name;
    // const dueDate = todoObj[index].dueDate;
    const { name } = todoObj[index];
    const { dueDate } = todoObj[index];
    const todoHtml = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button class="delete-todo-button js-delete-todo-button">Delete</button>
      `;
    todoHTML += todoHtml;
  });

  const todoElement = document.querySelector('.js-todo-list');
  todoElement.innerHTML = `${todoHTML}`;

  const deleteButtonElement = document.querySelectorAll(
    '.js-delete-todo-button'
  );
  console.log(deleteButtonElement);

  deleteButtonElement.forEach((deleteButton, index) => {
    console.log(deleteButton);
    console.log(index);

    deleteButton.addEventListener('click', () => {
      todoObj.splice(index, 1);
      renderToDoList();
    });
  });
}

// function renderToDoList() {
//   let todoHTML = '';

//   for (let i = 0; i < todoObj.length; i++) {
//     const name = todoObj[i].name;
//     const dueDate = todoObj[i].dueDate;
//     const todoHtml = `
//         <div>${name}</div>
//         <div>${dueDate}</div>
//         <button onclick="
//           todoObj
//         .splice(${i}, 1);
//           renderToDoList();
//         " class="delete-todo-button js-delete-todo-button">Delete</button>
//       `;
//     todoHTML += todoHtml;
//   }
//   const todoElement = document.querySelector('.js-todo-list');
//   todoElement.innerHTML = `${todoHTML}`;

//   const deleteButtonElement = document.querySelectorAll(
//     '.js-delete-todo-button'
//   );
//   console.log(deleteButtonElement);

//   deleteButtonElement.forEach((deleteButton, index) => {
//     console.log(deleteButton);
//     console.log(index);

//     deleteButton.addEventListener('click', () => {
//       todoObj.splice(index, 1);
//       renderToDoList();
//     });
//   });
// }

renderToDoList();

const addButtonElement = document.querySelector('.js-add-todo-button');
addButtonElement.addEventListener('click', () => {
  addToDo();
});

function addToDo() {
  const inputElement = document.querySelector('.todo-input');
  const inputDueDateElement = document.querySelector('.js-to-do-due-date');

  const name = inputElement.value;
  const dueDate = inputDueDateElement.value;
  // document.querySelector(".js-to-do").innerHTML = `${inputElement.value}`;

  todoObj.push({
    name: name,
    dueDate: dueDate,
  });
  // todoObj.push(dueDate);

  console.log(todoObj);
  inputElement.value = '';

  renderToDoList();
}
