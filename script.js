//Gainsight PX Tag--Start
  (function(n,t,a,e,co){var i="aptrinsic";n[i]=n[i]||function(){
      (n[i].q=n[i].q||[]).push(arguments)},n[i].p=e;n[i].c=co;
    var r=t.createElement("script");r.async=!0,r.src=a+"?a="+e;
    var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(r,c)
  })(window,document,"https://web-sdk.aptrinsic.com/api/aptrinsic.js","AP-NMWLAA96AZ0G-2");
  
//Gainsight PX Tag--End

//passing user and account objects:
aptrinsic("identify",
  {
  //User Fields
    "id": "todo", // Required for logged in app users
    "email": "sreevani@yahoocom",
    "firstName": "sreevani",
    "lastName": "malipeddi",
    "Aadharnumber": 45679, //unix time in ms
    "PANnumber":635313
  },
  {
  //Account Fields
    "id":"SVEC", //Required
    "name":"Vidyanikethan",
    "Program": "Platinum" // flat custom attributes
 });

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