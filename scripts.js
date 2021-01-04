//BOOTSTRAP modal:
let modalButton = document.getElementsByClassName("modal-button")[0];
let modal = document.getElementsByClassName("modal-fade")[0];
let closeOut = document.getElementsByClassName("close")[0];

modalButton.addEventListener('click', openModal);
closeOut.addEventListener('click', closeModal);

function openModal () {
  modal.style.display = 'block';
}
console.log(window.innerWidth)

function closeModal () {
  modal.style.display = 'none';
}

//Function for darkmode toggle
let darkMode = document.getElementsByClassName("dark")[0];
darkMode.addEventListener('click', activateDark);

function activateDark(){
  let body = document.body;
  body.classList.toggle("dark-mode");
  darkMode.innerHTML === "Dark Mode" ? darkMode.innerHTML = "Light Mode" : darkMode.innerHTML = "Dark Mode";
}

//Functionality for the game 
const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard;
let secondCard;

  //this is the .memory-card, so we are accessing the classList of the memory card.
  //After, the  toggle is a boolean for if the classlist is there. We have a 
  //Flip class in CSS 
function flipCard(){
  //if lockboard is true dont' flip cards. unlock after the timer times out.
  if (lockBoard) return;
  this.classList.toggle('flip')
  //this is console logging the memory-card 
  // console.log(this)
  
  //if hasFlippedCard is false 
  if (!hasFlippedCard){
    //First card flip action
    hasFlippedCard = true;
    firstCard = this;
    //logs the first card flip and sets hasFlippedCard to true
    // console.logs({hasFlippedCard, firstCard});
  } else {
    hasFlippedCard = false;
    secondCard = this;
    //logs the second card flip and sets hasFlippedCard to true
    //  console.log({hasFlippedCard, secondCard});
    
    //if the cards match
    checkForMatch();
  }
}



function checkForMatch(){
  //ternary for if match vs. if not match
  let isMatch = firstCard.dataset.card === secondCard.dataset.card; isMatch ? freezeCards() : unflipCards ();  
  keepScore()
}

let gameScore = 0
function keepScore(){
  let score = document.getElementById("score-text")
    if (firstCard.dataset.card === secondCard.dataset.card) {
      score.innerHTML = gameScore += 2
    }
}

function freezeCards(){
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
}

function unflipCards() {
  lockBoard = true;
  
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    lockBoard = false;
  }, 1000);
}


//Push all the cards into an array
// function increaseScore() {

// }

cards.forEach(card => card.addEventListener('click', flipCard))