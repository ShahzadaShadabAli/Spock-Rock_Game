// import { startConfetti, stopConfetti } from "./confetti.js"

const playerScoreEl = document.getElementById('playerScore')
const playerChoiceEl = document.getElementById('playerChoice')
const computerScoreEl = document.getElementById('computerScore')
const computerChoiceEl = document.getElementById('computerChoice')
const resultText = document.getElementById('resultText')

const playerRock = document.getElementById('playerRock')
const playerPaper = document.getElementById('playerPaper')
const playerScissors = document.getElementById('playerScissors')
const playerLizard = document.getElementById('playerLizard')
const playerSpock = document.getElementById('playerSpock')

const computerRock = document.getElementById('computerRock')
const computerPaper = document.getElementById('computerPaper')
const computerScissors = document.getElementById('computerScissors')
const computerLizard = document.getElementById('computerLizard')
const computerSpock = document.getElementById('computerSpock')

const allGameIcons = document.querySelectorAll('.far')

const choices = {
  rock: { name: 'Rock', defeats: ['scissors', 'lizard'] },
  paper: { name: 'Paper', defeats: ['rock', 'spock'] },
  scissors: { name: 'Scissors', defeats: ['paper', 'lizard'] },
  lizard: { name: 'Lizard', defeats: ['paper', 'spock'] },
  spock: { name: 'Spock', defeats: ['scissors', 'rock'] },
};

let computerChoice = ''
let playerScore = 0
let computerScore = 0

//Applying css Comparing the values of the player and computer
function gameComparison(playerChoice){
  if (playerChoice === computerChoice){
    resultText.textContent = "It's a Tie!"
    // stopConfetti()
  } else {
    let choice = choices[playerChoice]
    //The Index Of Tag Is indicating whether theres the value of computerChoice present in the defeat string
    //here,
    //0,1 is equal to winning
    //while -1 is equal to losing
    if (choice.defeats.indexOf(computerChoice) > -1){
      playerScore++
      playerScoreEl.textContent = playerScore
      resultText.textContent = "You Won!"
      // startConfetti()
    } else {
      computerScore++
      computerScoreEl.textContent = computerScore
      resultText.textContent = 'You Lose!'
      // stopConfetti()
    }
  }
}

//To reset all the scores
function resetAll() {
  playerScoreEl.textContent = 0
  computerScoreEl.textContent = 0
  computerChoiceEl.textContent = ''
  playerChoiceEl.textContent = ''
  resultText.textContent = ''
  removeSelected()
}
// window.resetAll = resetAll

//Removing all the Selected class
function removeSelected() {
  allGameIcons.forEach(function(icon){
    icon.classList.remove('selected')
  })
}

//selcts the randommly chosen icon
function computerSelect(){
  switch (computerChoice) {
    case 'rock':
      computerRock.classList.add('selected')
      computerChoiceEl.textContent = ' --- Rock'
      break;

    case 'paper':
      computerPaper.classList.add('selected')
      computerChoiceEl.textContent = ' --- Paper'
      break;

    case 'scissors':
      computerScissors.classList.add('selected')
      computerChoiceEl.textContent = ' --- Scissors'
      break;

    case 'lizard':
      computerLizard.classList.add('selected')
      computerChoiceEl.textContent = ' --- Lizard'
      break;

    case 'spock':
      computerSpock.classList.add('selected')
      computerChoiceEl.textContent = ' --- Spock'
      break;
    default:
      break;
  }
}

//Choosing random number from computer
function computerTurn(){
  let computerChoiceNumber = Math.random()
  if (computerChoiceNumber < .2){
    computerChoice = 'rock'
  } else if (computerChoiceNumber <= .4){
    computerChoice = 'paper'
  } else if (computerChoiceNumber <= .6){
    computerChoice = 'scissors'
  } else if (computerChoiceNumber <= .8){
    computerChoice = 'lizard'
  } else{
    computerChoice = 'spock'
  }
}

function gameProcess(playerChoice){
  removeSelected();
  computerTurn();
  computerSelect();
  gameComparison(playerChoice)
}

//assigning selection value to the selecting it and applying css Accordingly
function select(playerChoice) {
  gameProcess(playerChoice);
  //Switch Statement for making Change In css
  switch (playerChoice) {
    case 'rock':
      playerRock.classList.add('selected')
      playerChoiceEl.textContent = ' --- Rock'
      break;

    case 'paper':
      playerPaper.classList.add('selected')
      playerChoiceEl.textContent = ' --- Paper'
      break;

    case 'scissors':
      playerScissors.classList.add('selected')
      playerChoiceEl.textContent = ' --- Scissors'
      break;

    case 'lizard':
      playerLizard.classList.add('selected')
      playerChoiceEl.textContent = ' --- Lizard'
      break;

    case 'spock':
      playerSpock.classList.add('selected')
      playerChoiceEl.textContent = ' --- Spock'
      break;
    default:
      break;
  }
}
// window.select = select;