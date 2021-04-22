const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
  var todo = prompt("Please enter task", "new todo");

  let currentCount = Number(itemCountSpan.innerHTML)
  let currentUncheckedCount = Number(uncheckedCountSpan.innerHTML)
  let li = document.createElement('li');
  let p = document.createElement('span');
  let chkBox = document.createElement('input');
  let delBtn = document.createElement('input');
  let itemText = document.createTextNode(`${todo}`);
  chkBox.type = "checkbox";
  chkBox.onclick = (event) => { this.todoCompleted(event) }
  li.className = classNames.TODO_ITEM;
  p.className = classNames.TODO_TEXT;
  delBtn.type = "button";
  delBtn.style.float = "right";
  delBtn.value = "Remove TODO";
  delBtn.onclick = (event) => { this.deleteTodo(event) }
  p.appendChild(chkBox)
  p.appendChild(itemText)
  p.appendChild(delBtn)
  li.appendChild(p)
  list.appendChild(li)
  currentCount++;
  currentUncheckedCount++;
  itemCountSpan.innerHTML = currentCount;
  uncheckedCountSpan.innerHTML = currentUncheckedCount;
}

function todoCompleted(e) {
  let currentUncheckedCount = Number(uncheckedCountSpan.innerHTML)
  let el = e.target
  if (el.checked) {
    currentUncheckedCount--;
  }
  else {
    currentUncheckedCount++;
  }
  uncheckedCountSpan.innerHTML = currentUncheckedCount;
}

function deleteTodo(e) {
  let el = e.target;
  let currentCount = Number(itemCountSpan.innerHTML)
  let currentUncheckedCount = Number(uncheckedCountSpan.innerHTML)
  let parent_node = el.parentNode.parentNode;
  list.removeChild(parent_node);
  currentCount--;
  if (currentUncheckedCount > 0)
    currentUncheckedCount--;
  itemCountSpan.innerHTML = currentCount;
  uncheckedCountSpan.innerHTML = currentUncheckedCount;
}