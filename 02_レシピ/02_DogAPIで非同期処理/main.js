const imageElement = document.getElementById("dog-image")

fetch("https://dog.ceo/api/breeds/image/random")
  .then((res) => {
    return res.json() //jsonとして読み込み、オブジェクトにして次のthenに渡す
  })
  .then((data) => {
    imageElement.src = data.message
  })
