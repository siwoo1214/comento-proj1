const todo = document.querySelector("#todo");
const priority = document.querySelector("#priority");
const addBtn = document.querySelector("#addBtn");
const todoBox = document.querySelector("#todoBox");

addBtn.addEventListener("click", () => {
    const newTodo = document.createElement("label");
    const checkBox = document.createElement("input");
    const checkMark = document.createElement("span");
    const rmBtn = document.createElement("button");
    const selectedPriority = priority.value;

    newTodo.className = `new-todo ${selectedPriority}`; // 우선순위 클래스 추가
    newTodo.innerText = todo.value;
    
    checkBox.type = "checkBox";
    checkMark.className = "check-mark";
    rmBtn.className = "rm-btn";

    newTodo.appendChild(checkBox);
    newTodo.appendChild(checkMark);
    newTodo.appendChild(rmBtn);
    todoBox.appendChild(newTodo);

    todo.value = "";
    priority.value = "low"; // 기본 우선순위로 설정

    checkBox.addEventListener("change", () => {
        newTodo.classList.toggle("check");
    });

    rmBtn.addEventListener("click", (event) => {
        todoBox.removeChild(event.currentTarget.parentNode);
    });
});
