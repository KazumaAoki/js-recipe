const addButton = document.getElementById("add-button")
const inputElement = document.getElementById("input-todo")
const container = document.getElementById("cards-container")

const addcard = function () {
  container.append(createCard(inputElement.value))
  inputElement.value = ""
  console.log("a")
}

document.onkeydown = function (e) {
  if (e.key === "Enter") {
    addcard()
  }
}

const createCard = function (text) {
  const card = document.createElement("div")
  card.className = "card"

  const todo = document.createElement("div")
  todo.className = "todo"
  todo.textContent = text
  card.append(todo)

  const deleteButton = document.createElement("div")
  deleteButton.className = "delete"
  deleteButton.onclick = function () {
    card.remove() //カードの削除
  }
  card.append(deleteButton)

  return card
}
