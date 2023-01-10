const inputText = document.getElementById("input-text")
const inputDate = document.getElementById("input-date")

const sayHello = function () {
  console.log("hello")
}

const logValue = function (e) {
  console.log(e.target.value)
}

function KeyName(e) {
  console.log(e.key)
}

inputText.onkeydown = KeyName
inputDate.oninput = logValue
