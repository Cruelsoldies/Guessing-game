//Variaveis
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
const screenOne = document.querySelector(".screenOne")
const screenTwo = document.querySelector(".screenTwo")

let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1


//Events
btnTry.addEventListener("click", handleTryClick)
btnReset.addEventListener("Click", handleResetClick)
document.addEventListener("keydown", function (event) {
  console.log(event.key)
  if(event.key == "enter" && screenOne.classList.contains("hide")) {
    handleResetClick()
  }
})
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
function handleResetClick (event) {
  toggleScreen()
  xAttempts = 1
}

function toggleScreen () {
  screenOne.classList.toggle("hide")
  screenTwo.classList.toggle("hide")
}

