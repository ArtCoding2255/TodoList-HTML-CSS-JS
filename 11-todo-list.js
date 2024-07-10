const todoList = [
  { name: 'make dinner', dueDate: '2022-12-22' },
  { name: 'wash dishes', dueDate: '2022-12-22' },
];

renderTodoList();

//Generating the HTML
function renderTodoList() {
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    console.log(todoList[i]);
    const todoObject = todoList[i];
    //const name = todoObject.name;
    //const dueDate = todoObject.dueDate;
    const { name, dueDate } = todoObject; //Destructuring is to get name property from todoObject and put it to name variable
    const html = `
      <div>
        ${name}   
      </div>
      <div>
        ${dueDate}
      </div>     
      <button class="delete-todo-button" onclick=
        "       
        todoList.splice(${i}, 1);
        renderTodoList();
        "
      >Delete</button>     
     `;

    todoListHTML += html;
  }
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
  console.log(todoListHTML);
}

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const dueDateElement = document.querySelector('.js-due-date-input');
  const name = inputElement.value;
  const dueDate = dueDateElement.value;

  todoList.push({ name, dueDate });
  console.log(todoList);
  renderTodoList();
  inputElement.value = '';
}
