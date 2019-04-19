const classNames = {
  TODO_ITEM: "todo-container",
  TODO_CHECKBOX: "todo-checkbox",
  TODO_TEXT: "todo-text",
  TODO_DELETE: "todo-delete"
};

const list = document.getElementById("todo-list");
const itemCountSpan = document.getElementById("item-count");
const uncheckedCountSpan = document.getElementById("unchecked-count");

var counter = 0;
var checkBoxCounter = 0;

function newTodo() {
  //alert('New TODO button clicked!')

  var addTodo = prompt("Enter a ToDo!");

  if (addTodo == null || addTodo == "") {
    alert("Error: Todo can not be empty.");
  } else {
    const newLi = document.createElement("li");
    newLi.setAttribute("class", classNames.TODO_ITEM);

    // Add Checkbox
    AddCheckbox(newLi);

    // Add todo to list
    AddTodo(newLi, addTodo);

    // Add delete button to li
    AddDeleteButton(newLi);

    list.appendChild(newLi);

    counter = counter + 1;
    itemCountSpan.innerHTML = counter;
    checkBoxCounter = checkBoxCounter + 1;
    uncheckedCountSpan.innerHTML = checkBoxCounter;
  }
}

function AddCheckbox(newLi) {
  const checkBox = document.createElement("input");

  checkBox.setAttribute("type", "checkbox");
  checkBox.setAttribute("class", classNames.TODO_CHECKBOX);

  newLi.appendChild(checkBox);

  // Check if checkbox is checked or not
  checkBox.addEventListener("click", () => {
    if (checkBox.checked) {
      checkBoxCounter = checkBoxCounter - 1;
      uncheckedCountSpan.innerHTML = checkBoxCounter;
    } else {
      checkBoxCounter = checkBoxCounter + 1;
      uncheckedCountSpan.innerHTML = checkBoxCounter;
    }
  });
}

function AddTodo(newLi, addTodo) {
  const span = document.createElement("span");
  const todoText = document.createTextNode(addTodo);
  span.appendChild(todoText);
  span.setAttribute("class", classNames.TODO_TEXT);

  newLi.appendChild(span);
}

// Delete button
function AddDeleteButton(newLi) {
  // Create delete button and button label
  const deleteBtn = document.createElement("button");
  const text = document.createTextNode("Delete");

  // Delete button set up
  deleteBtn.appendChild(text);
  deleteBtn.setAttribute("class", classNames.TODO_DELETE);

  newLi.appendChild(deleteBtn);

  // Click event
  deleteBtn.addEventListener("click", () => {
    // Remove Todo and update counter
    newLi.parentNode.removeChild(newLi);
    counter = counter - 1;
    itemCountSpan.innerHTML = counter;
    console.log("Delete clicked");
    // if checkbox is not checked when delete, then make sure to decrement counter
    const checkbox = newLi.firstChild;
    if (!checkbox.checked) {
      checkBoxCounter = checkBoxCounter - 1;
      uncheckedCountSpan.innerHTML = checkBoxCounter;
    }
  });
}
