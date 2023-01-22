const imageElement = document.getElementById("dog-image") //画像を表示する部分
const button = document.getElementById("button") //画像を更新するボタン
const buttonBreed = document.getElementById("breed-button") //犬種指定・枚数指定をするボタン

//一枚ランダムに取得して表示する関数
const downloadAImage = function () {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => {
      return res.json() //jsonとして読み込み、オブジェクトにして次のthenに渡す
    })
    .then((data) => {
      //console.log(data)
      imageElement.src = data.message
    })
}
//画像の更新を行う関数
button.onclick = function () {
  loadImage()
}

//犬種指定と枚数指定に基づいて画像の取得・表示を行う関数
const downloadImages = function (breed) {
  fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      imageElement.src = data.message
    })
}

buttonBreed.onclick = function () {
  //ボタンがクリックされたら犬種指定と枚数指定を行う
  const num = document.getElementById("number").value //取得する枚数
  const breed = document.getElementById("selecter").value //取得する犬種

  for (let i = 0; i < num; i++) {
    //num枚指定した犬種の画像を取得する
  }
}
