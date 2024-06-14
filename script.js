for (let i = 0; i < localStorage.length; i++) {
  let text = document.createTextNode(localStorage.getItem(localStorage.key(i)));
  text.className = "task-text";

  let id = document.createTextNode(localStorage.key(i));
  id.className = "task-id";

  let newTask = document.createElement("div");
  newTask.className = "task";

  newTask.appendChild(text);
  newTask.appendChild(id);

  document.getElementById("tasks").appendChild(newTask);
}
