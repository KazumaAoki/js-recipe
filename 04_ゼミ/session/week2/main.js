const memoInput = document.getElementById("memo-input")
const addInput = document.getElementById("add-input")
const memoContainer = document.getElementById("memo-container")

addInput.onclick = function () {
  //console.log(memoInput.value)
  const memo = document.createElement("div")
  const dereteButton = document.createElement("button")

  dereteButton.textContent = "削除"

  memo.textContent = memoInput.value
  //memo.style = "float:left;"
  memoContainer.append(memo)
  memoContainer.after(dereteButton)
  //memoContainer.append(dereteButton)
  memoInput.value = ""
  dereteButton.onclick = function () {
    memo.remove()
    dereteButton.remove()
  }
}
