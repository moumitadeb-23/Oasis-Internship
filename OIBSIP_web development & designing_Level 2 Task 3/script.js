function addTask() {
    let input = document.getElementById("taskInput");
    let text = input.value.trim();

    if (text === "") {
        alert("Enter a task!");
        return;
    }

    let li = createTaskElement(text);
    document.getElementById("pendingList").appendChild(li);

    input.value = "";
}

function createTaskElement(text) {
    let li = document.createElement("li");

    let span = document.createElement("span");
    span.innerText = text + " (" + new Date().toLocaleTimeString() + ")";

    let actions = document.createElement("div");
    actions.classList.add("actions");

    // Complete Button
    let completeBtn = document.createElement("button");
    completeBtn.innerText = "✔";
    completeBtn.onclick = function () {
        li.classList.add("completed");
        document.getElementById("completedList").appendChild(li);
        completeBtn.remove();
    };

    // Edit Button
    let editBtn = document.createElement("button");
    editBtn.innerText = "✏";
    editBtn.onclick = function () {
        let newText = prompt("Edit task:", span.innerText);
        if (newText) span.innerText = newText;
    };

    // Delete Button
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "❌";
    deleteBtn.onclick = function () {
        li.remove();
    };

    actions.appendChild(completeBtn);
    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(actions);

    return li;
}