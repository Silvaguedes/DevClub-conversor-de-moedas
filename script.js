


const convertSelectB = document.querySelector(".currency-select-2")
const currencyName = document.querySelector(".pp-moeda")
const convertButton = document.querySelector(".button")
const dolarValue = document.querySelector(".B-value")


function convertValue() {

  const inputValue = document.querySelector(".input-value").value


  const dolartoday = 4.83
  const eurotoday = 5.33
  const bitcointoday = 206.119
  const libratoday = 6.14
  const realtoday = 1.00

  if (convertSelectB.value == "Dolar") {
    dolarValue.innerHTML = new Intl.NumberFormat("en-us", {
      style: "currency",
      currency: "usd"
    }).format(inputValue / dolartoday)
  }


  if (convertSelectB.value == "Euro") {
    dolarValue.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR"
    }).format(inputValue / eurotoday)
  }

  if (convertSelectB.value == "Bitcoin") {
    dolarValue.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "BTC"
    }).format(inputValue / bitcointoday)
  }

  if (convertSelectB.value == "Libra") {
    dolarValue.innerHTML = new Intl.NumberFormat("de-UK", {
      style: "currency",
      currency: "GBP"
    }).format(inputValue / libratoday)
  }

  if (convertSelectB.value == "Real") {
    dolarValue.innerHTML = new Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: "BRL"
    }).format(inputValue / realtoday)
  }
}


function convertCurrency() {



  const newImg = document.querySelector(".currency-imgim")



  if (convertSelectB.value == "Dolar") {
    currencyName.innerHTML = "Dolar"
    newImg.src = "./assets/EUA.png"
  }


  if (convertSelectB.value == "Euro") {
    currencyName.innerHTML = "Euro"
    newImg.src = "./assets/Euro.png"
  }


  if (convertSelectB.value == "Bitcoin") {
    currencyName.innerHTML = "Bitcoin"
    newImg.src = "./assets/bitcoin.png"
  }


  if (convertSelectB.value == "Libra") {
    currencyName.innerHTML = "Libra"
    newImg.src = "./assets/libra.png"
  }


  if (convertSelectB.value == "Real") {
    currencyName.innerHTML = "Real"
    newImg.src = "./assets/Brasil.png"
  }

  convertValue()
}




/* próxima etapa do projeto*/





const currencyNameA = document.querySelector(".p-moeda")
const RealValue = document.querySelector(".A-value")
const convertSelectA = document.querySelector(".currency-select-1")



function convertValueB() {


  const inputValue = document.querySelector(".input-value").value


  const dolartoday = 4.83
  const eurotoday = 5.33
  const bitcointoday = 206.119
  const libratoday = 6.14
  const realtoday = 1.00



  if (convertSelectA.value == "Dolar") {
    RealValue.innerHTML = new Intl.NumberFormat("en-us", {
      style: "currency",
      currency: "usd"
    }).format(inputValue / dolartoday)
  }


  if (convertSelectA.value == "Euro") {
    RealValue.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR"
    }).format(inputValue / eurotoday)
  }


  if (convertSelectA.value == "Bitcoin") {
    RealValue.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "BTC"
    }).format(inputValue / bitcointoday)
  }


  if (convertSelectA.value == "Libra") {
    RealValue.innerHTML = new Intl.NumberFormat("de-UK", {
      style: "currency",
      currency: "GBP"
    }).format(inputValue / libratoday)
  }


  if (convertSelectA.value == "Real") {
    RealValue.innerHTML = new Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: "BRL"
    }).format(inputValue / realtoday)
  }

}

function convertCurrencyA() {

  const newImgA = document.querySelector(".currency-imgim-brasil")

  if (convertSelectA.value == "Dolar") {
    currencyNameA.innerHTML = "Dolar"
    newImgA.src = "./assets/EUA.png"

  }

  if (convertSelectA.value == "Euro") {
    currencyNameA.innerHTML = "Euro"
    newImgA.src = "./assets/Euro.png"

  }


  if (convertSelectA.value == "Bitcoin") {
    currencyNameA.innerHTML = "Bitcoin"
    newImgA.src = "./assets/bitcoin.png"

  }

  if (convertSelectA.value == "Libra") {
    currencyNameA.innerHTML = "Libra"
    newImgA.src = "./assets/libra.png"
  }




  if (convertSelectA.value == "Real") {
    currencyNameA.innerHTML = "Real"
    newImgA.src = "./assets/Brasil.png"
  }


  convertValueB()
}



convertButton.addEventListener("click", convertValue)
convertSelectB.addEventListener("change", convertCurrency)

convertButton.addEventListener("click", convertValueB)
convertSelectA.addEventListener("change", convertCurrencyA)











