const screenOne = document.querySelector(".screenOne")
const screenTwo = document.querySelector(".screenTwo")

let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

//function callback
function handleTryClick (event) {
  event.preventDefault()
  let inputNumber= document.querySelector("#inputNumber")
  
  if (Number(inputNumber.value) == randomNumber) {
    screenOne.classList.add("hide")
    screenTwo.classList.remove("hide")

    document.querySelector(".screenTwo h2").innerText = `Got it right in ${xAttempts} tries`
  } 
  inputNumber.value = ""
  xAttempts++
}
//events
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('CLick', function () {
  screenOne.classList.remove("hide")
  screenTwo.classList.add("hide")
  xAttempts = 1
  })
