const inputType = document.getElementById("input-box");
const addBtn = document.getElementsByClassName("btn");
const listContainer = document.getElementById("list-container");

// Add task when button clicked
addBtn[0].addEventListener("click", function() {
    let taskTest = inputType.value.trim();

    if(taskTest === ""){
        alert("please enter the Task!");
        return;
    }
     // Create <li> element
    const li = document.createElement("li");

    // Task text
    let span = document.createElement("span")
    span.innerText = taskTest;

    // Complete button
    let completeBtn = document.createElement("button");
    completeBtn.innerText = "✔";
    completeBtn.style.background = "lightgreen";
    completeBtn.onclick = function(){
        span.classList.toggle("done");
    }
    // Delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "❌";
    deleteBtn.style.background = "lightcoral";
    deleteBtn.onclick = function(){
        listContainer.removeChild(li);
    }

    li.appendChild(span);
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);
    listContainer.appendChild(li);

    // Clear input
  inputType.value = "";
});