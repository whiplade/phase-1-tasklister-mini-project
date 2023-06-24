document.addEventListener("DOMContentLoaded", () => {
 
  form = document.getElementById("create-task-form")
  form.addEventListener("submit", addToList)

  function addToList(e) {

    e.preventDefault()

    let ul = document.getElementById("tasks")
    let li = document.createElement("li")
    let deleteButton = document.createElement("button")
    deleteButton.innerHTML = "delete"
    deleteButton.onclick = () => li.remove()
    li.innerHTML = e.target["new-task-description"].value

    li.style.display = "";
    li.style.alignItems = "center";
    li.style.marginBottom = "10px";

    // Add styles to the delete button
    deleteButton.style.marginLeft = "10px";
    deleteButton.style.padding = "5px 10px";
    deleteButton.style.border = "none";
    deleteButton.style.background = "red";
    deleteButton.style.color = "white";

    li.appendChild(deleteButton)
    ul.appendChild(li)

  }

})





