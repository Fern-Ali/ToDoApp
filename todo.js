document.addEventListener("DOMContentLoaded", function() {
  let todoForm = document.getElementById("newTodoForm");
    let todoList = document.getElementById("todoList");

    //

    //

    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    for (let i = 0; i < savedTodos.length; i++) {
        let newTodo = document.createElement("li");
        let removeButton = document.createElement("button");
        removeButton.innerText = "X";
        removeButton.classList.add("xButton");
        newTodo.innerText = savedTodos[i].task;
        newTodo.classList.add("flex-item");
        newTodo.isCompleted = savedTodos[i].isCompleted ? true : false;
        if (newTodo.isCompleted) {
            newTodo.style.textDecoration = "line-through";
            newTodo.classList.add("flex-item");
        }
        todoList.appendChild(newTodo);
        newTodo.appendChild(removeButton);
    }


    const xButton = JSON.parse(localStorage.getItem("xButton"));
    //

    //


  todoForm.addEventListener("submit", function(event) {
    event.preventDefault();

    let removeButton = document.createElement("button");
      removeButton.innerText = "X";
      removeButton.classList.add("xButton");

    let newTodo = document.createElement("li");
      newTodo.innerText = document.getElementById("task").value;
      newTodo.classList.add("flex-item");

    todoList.appendChild(newTodo);
    /*newTodo.appendChild(removeButton);*/

      todoForm.reset();
      savedTodos.push({ task: newTodo.innerText, isCompleted: false });

      newTodo.appendChild(removeButton);
      localStorage.setItem("todos", JSON.stringify(savedTodos));
  });

    



  todoList.addEventListener("click", function(event) {
    const targetTagToLowerCase = event.target.tagName.toLowerCase();
    if (targetTagToLowerCase === "li") {
        event.target.style.textDecoration = "line-through";
        
    } else if (targetTagToLowerCase === "button") {
      event.target.parentNode.remove();
    }
  });
});

document.addEventListener('mousemove', function (e) {
    // console.log(e.pageX, e.pageY);
    // console.log((e.pageX * 255) / window.innerWidth);
    const r = Math.round(e.pageX * 255 / window.innerWidth);
    const b = Math.round(e.pageY * 255 / window.innerHeight);
    // console.log(r, 0, b);

    const color = `rgb(${r}, 0, ${b})`;
    document.body.style.backgroundColor = color;
    // console.log(color);
    // makeBody(rgb(`${r}, ${b}`));
});
//TEST HERE 

