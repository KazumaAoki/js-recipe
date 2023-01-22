// HTML要素を取得する
const buyButtonTea = document.getElementById("buy-button-tea")
const buyButtonBeer = document.getElementById("buy-button-beer")

const displayItems = document.getElementById("display-items")
let saifu = 1000 //財布の所持金額
let jihankiMoney = 0 //投入金額
//１００円投入ボタン
const addButton100 = document.getElementById("add-button-100")
//財布の所持金額
const displaySaifu = document.getElementById("display-saifu")
//投入金額
const displayJihankiMoney = document.getElementById("display-jihanki-money")
const returnButton = document.getElementById("return-button")

// buyButtonTea を押した時の処理🍵
buyButtonTea.onclick = function () {
  //jihankiMoney が 100 以上のときのみ
  if (jihankiMoney >= 100) {
    displayItems.textContent = displayItems.textContent + "🍵"
    //「お茶(100円)」ボタンを押した時に投入金額を減らす
    jihankiMoney = jihankiMoney - 100
    displayJihankiMoney.textContent = jihankiMoney
    buttonDisabled()
  }
}

addButton100.onclick = function () {
  if (saifu >= 100) {
    //saifu　から 100 引いて、jihankiMoney に 100 足す
    saifu = saifu - 100
    jihankiMoney = jihankiMoney + 100

    //saifuとjihanki-moneyの状態を反映させる
    displaySaifu.textContent = saifu
    displayJihankiMoney.textContent = jihankiMoney
    buttonDisabled()
  }
}

//お釣り
returnButton.onclick = function () {
  //財布に戻す
  saifu = saifu + jihankiMoney
  //表示
  displaySaifu.textContent = saifu
  //投入金額を０にする
  jihankiMoney = 0
  //表示
  displayJihankiMoney.textContent = jihankiMoney
  buttonDisabled()
}

//buyButtonBeerを押した時の処理
buyButtonBeer.onclick = function () {
  if (jihankiMoney >= 150) {
    displayItems.textContent = displayItems.textContent + "🍺"
    //「お茶(100円)」ボタンを押した時に投入金額を減らす
    jihankiMoney = jihankiMoney - 150
    displayJihankiMoney.textContent = jihankiMoney
    buttonDisabled()
  }
}

//
const buttonDisabled = function () {
  if (jihankiMoney < 100) {
    buyButtonTea.disabled = true
    //console.log("a");
  } else {
    buyButtonTea.disabled = false
    //console.log("b");
  }

  if (jihankiMoney < 150) {
    buyButtonBeer.disabled = true
    //console.log("c");
  } else {
    buyButtonBeer.disabled = false
    //console.log("d");
  }
}

buyButtonTea.disabled = true
buyButtonBeer.disabled = true
buttonDisabled()
