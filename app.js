


const yourChoiceDisplay = document.getElementById('yourChoice')
const comChoiceDisplay = document.getElementById('comChoice')
const resultsDisplay = document.getElementById('results')

const possibleChoices = document.querySelectorAll('button')

let userChoice
let computerChoice
let results

possibleChoices.forEach(element => element.addEventListener('click', (e)=> {
    userChoice = e.target.id
    yourChoiceDisplay.innerHTML = userChoice
    comChoice()
    // showResults() //if
    getResults() //switch

}))

function comChoice(){
    const RPS = ['rock', 'paper', 'scissors']
const random = Math.floor(Math.random()* RPS.length)
 computerChoice = RPS[random]
comChoiceDisplay.innerHTML = computerChoice



}
//if
function showResults() {
    if (computerChoice === userChoice) {
      results = 'its a draw!'
      }
      if (computerChoice === 'rock' && userChoice === "paper") {
        results = 'you win!'
      }
      if (computerChoice === 'rock' && userChoice === "scissors") {
        results = 'you lost!'
      }
      if (computerChoice === 'paper' && userChoice === "scissors") {
        results = 'you win!'
      }
      if (computerChoice === 'paper' && userChoice === "rock") {
        results = 'you lose!'
      }
      if (computerChoice === 'scissors' && userChoice === "rock") {
        results = 'you win!'
      }
      if (computerChoice === 'scissors' && userChoice === "paper") {
        results = 'you lose!'
      }
      resultsDisplay.innerHTML = results
      
    }
    //switch
    const getResults = () =>{
      switch(computerChoice + userChoice){
        case 'rockscissors':
          case 'paperrock':
            case 'scissorspaper':
              resultsDisplay.innerHTML = 'you loose'
              break
        case 'scissorsrock':
          case 'rockpaper':
            case 'paperscissors':
              resultsDisplay.innerHTML = 'you win'
              break
        case 'scissorsscissors':
          case 'rockrock':
             case 'paperpaper':
                resultsDisplay.innerHTML = 'draw'
                break

      }
    }