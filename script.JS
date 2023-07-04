function handleClick (event) {
  event.preventDefault()

  let inputNumber= document.querySelector("#inputNumber")
  console.log(inputNumber)
}
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

while (Number(result) != randomNumber) {
  result = prompt("Você errou, tente novamente: ")
  xAttempts++
}

alert(`Parabéns você acertou em ${xAttempts} tentativas `)

