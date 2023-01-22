const imageElementCat = document.getElementById("cat-image")

fetch("https://api.thecatapi.com/v1/images/search")
  .then((res) => {
    //console.log(res.json())
    return res.json()
  })
  .then((data) => {
    //console.log(data[0].url)
    imageElementCat.src = data[0].url
  })
