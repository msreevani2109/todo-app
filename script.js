document.addEventListener("DOMContentLoaded",function(){
  const todoForm = document.querySelector(".todo-form");
  const todoInput = document.querySelector(".todo-input");
  const todoSubmit = document.querySelector(".todo-submit");
  const todoList = document.querySelector(".todo-list");
  let editMode = false;
  let editItem = null;
  todoForm.addEventListener("submit",function(event){
    event.preventDefault();
    const todoText =  todoInput.value.trim();
    if(todoText!==""){
        if(editMode){
            editItem.firstChild.textContent = todoText ;
            todoSubmit.innerText = "Add Todo";
            editMode =false;
            editItem = null;
        }
        else{
            addTodo(todoText);
        }
       
        todoInput.value = "";
    }
    else{
        alert("enter valid todo");
    }
  })
  todoList.addEventListener("click",function(event){
   const target =event.target;
   if(target.tagName == "BUTTON"){
    const todoItem = target.parentNode;
    if(target.innerText === "❌"){
        todoItem.remove(); // Delete Todo
    }
    else if(target.innerText === "✏️"){
        editMode  =true;
        editItem = todoItem;
        todoSubmit.innerText = "Edit Todo";
        todoInput.value = todoItem.firstChild.textContent;
        todoInput.focus();
    }

   }
  })
  function addTodo(todoItem){
    const listItem = document.createElement("li");
    const editButton = document.createElement("button");
    const deleteButton = document.createElement("button");
    listItem.innerHTML = `<span>${todoItem}</span>`;
    editButton.innerText = "✏️";
    deleteButton.innerText = "❌";
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);
    todoList.appendChild(listItem);
  }
});