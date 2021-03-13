// mid todos Start
let midForm = document.querySelector('.main-form');
let midInput = document.querySelector('.main-input');
let question = document.querySelector('.question');
let midTodoContainer = document.querySelector('.mid-todo-container');

midForm.addEventListener('submit', addMainFocus);

function addMainFocus(e) {
  e.preventDefault();
  let mainFocus = midInput.value;
  addFocus(mainFocus);
}

function addFocus(mainFocus) {
  let smallTodo = document.createElement('span');
  let delBtn = document.createElement('button');
  let checkBtn = document.createElement('input');
  let todo = document.createElement('h3');

  todo.innerText = mainFocus;
  todo.setAttribute('class', 'midTodo');
  delBtn.innerText = '❌';
  checkBtn.setAttribute('type', 'checkbox');

  smallTodo.appendChild(checkBtn);
  smallTodo.appendChild(todo);
  smallTodo.appendChild(delBtn);

  midTodoContainer.appendChild(smallTodo);

  midForm.classList.add('hide');
  midInput.classList.add('hide');
  question.classList.add('hide');

  setMidTodos(mainFocus);

  delBtn.addEventListener('click', function () {
    deleteMidTodo(smallTodo, midInput);
  });

  checkBtn.addEventListener('click', function () {
    checkedMidTodo(todo, checkBtn);
  });
}

function deleteMidTodo(smallTodo) {
  localStorage.removeItem(MID_TODO_LS);
  smallTodo.remove();
  midForm.classList.remove('hide');
  midInput.classList.remove('hide');
  question.classList.remove('hide');
  midInput.value = '';
}

let praiseText = [
  'Good Job',
  'Nice',
  'Keep it up',
  "You're Awesomee",
  'You are making a difference',
  "You're wonderful.",
];

function checkedMidTodo(todo, checkBtn) {
  let praise = document.createElement('h2');
  let randomText = Math.floor(Math.random() * praiseText.length);

  if (checkBtn.checked) {
    todo.classList.add('checked');
    praise.setAttribute('class', 'praise');
    praise.innerText = praiseText[randomText];
    midTodoContainer.appendChild(praise);

    praise.animate([{ transform: 'Scale(0.1)' }, { transform: 'Scale(1)' }], {
      duration: 500,
      fill: 'forwards',
    });

    setInterval(() => {
      praise.remove();
    }, 2000);
  } else {
    todo.classList.remove('checked');
    let x = document.querySelector('.praise');
    x.remove();
  }
}
// mid todos done
// set mid todos to LS

const MID_TODO_LS = 'MainFocus';

function setMidTodos(mainFocus) {
  localStorage.setItem(MID_TODO_LS, JSON.stringify(mainFocus));
}

function checkMidTodoLS() {
  const midTodoValue = localStorage.getItem(MID_TODO_LS);

  if (midTodoValue === null) {
  } else {
    mainFocus = JSON.parse(midTodoValue);
    addFocus(mainFocus);
  }
}

checkMidTodoLS();

// Bottom todos start

let todoChannel = document.querySelector('.todo');
let todo = document.querySelector('.todos');
let todoInput = document.querySelector('.realTodoInput');
let todoForm = document.querySelector('.todo-form');
let todoContainer = document.querySelector('.todo-container');

todoChannel.addEventListener('click', () => {
  todo.classList.toggle('hide');
  todo.animate([{ transform: 'scale(0.1)' }, { transform: 'scale(1)' }], {
    duration: 200,
    fill: 'forwards',
  });
});

todoForm.addEventListener('submit', initTodos);

function initTodos(e) {
  e.preventDefault();
  let value = todoInput.value;
  addTodos(value);
}

let todoLS = 'Todos';
let todosArr = [];

function addTodos(value) {
  let todoWrap = document.createElement('div');
  let todoItem = document.createElement('h5');
  let deleteButton = document.createElement('button');
  let editButton = document.createElement('button');

  todoItem.setAttribute('class', 'todo-item');
  deleteButton.setAttribute('class', 'deleteBtn');
  todoWrap.setAttribute('class', 'todo-wrap');

  let id = Math.floor(Math.random() * 9000).toString(16);
  todoWrap.setAttribute('data-id', id);
  todoItem.innerText = value;
  deleteButton.innerText = '❌';
  editButton.innerText = 'EDIT';
  todoWrap.appendChild(todoItem);
  todoWrap.appendChild(deleteButton);
  todoWrap.appendChild(editButton);
  let todoObj = { value, id };

  if (todoInput.value !== '' || todoLS !== null) {
    todoContainer.appendChild(todoWrap);
    todosArr.push(todoObj);
    setTodoLS(value);
  }

  todoInput.value = '';

  deleteButton.addEventListener('click', deleteTodos);
  editButton.addEventListener('click', function (e) {
    editTodos(e, todoWrap);
  });
}

function setTodoLS() {
  localStorage.setItem(todoLS, JSON.stringify(todosArr));
}

function deleteTodos(e) {
  e.target.parentElement.remove();
  // delete LS
  let id = JSON.stringify(e.target.parentElement.dataset.id);
  let newdeletedTodos = todosArr.filter((todo) => {
    if (JSON.stringify(todo.id) !== id) {
      return todo;
    }
  });
  todosArr = newdeletedTodos;
  setTodoLS();
}

function editTodos(e, todoWrap) {
  let currentTodo = e.target.parentElement.firstChild;
  let todoText = currentTodo.innerText;
  let tempForm = document.createElement('form');
  let tempInput = document.createElement('input');
  tempInput.setAttribute('class', 'tempInput');
  tempInput.value = todoText;
  tempForm.appendChild(tempInput);
  todoWrap.appendChild(tempForm);

  todoInput.style.display = 'none';
  currentTodo.style.display = 'none';
  e.target.style.display = 'none';
  e.target.previousSibling.style.display = 'none';

  tempForm.addEventListener('submit', (e) => {
    e.preventDefault();
    currentTodo.textContent = tempInput.value;

    let editButton = currentTodo.nextSibling.nextSibling;
    let deleteButton = currentTodo.nextSibling;

    currentTodo.style.display = 'inline';
    editButton.style.display = 'inline';
    deleteButton.style.display = 'inline';
    todoInput.style.display = 'block';
    tempForm.style.display = 'none';
    // LS
    editTodosLs(e, todoWrap, tempInput);
  });
}

function editTodosLs(e, todoWrap, tempInput) {
  let id = JSON.stringify(todoWrap.dataset.id);

  let allTodos = todosArr.filter((todo) => {
    if (JSON.stringify(todo.id) !== id) {
      return todo;
    }
  });

  let newEditedTodos = todosArr.filter((todo) => {
    if (JSON.stringify(todo.id) === id) {
      return (todo.value = tempInput.value);
    }
  });
  todosArr = [...allTodos, ...newEditedTodos];
  setTodoLS();
}

function loadTodoLS() {
  const TodosLS = localStorage.getItem(todoLS);
  if (TodosLS !== null) {
    let parsedTodos = JSON.parse(TodosLS);
    parsedTodos.forEach((a) => {
      value = a.value;
      addTodos(value);
    });
  }
}

loadTodoLS();
