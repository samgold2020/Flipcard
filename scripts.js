//BOOTSTRAP modal:
let modalButton = document.getElementsByClassName("modal-button")[0];
let modal = document.getElementsByClassName("modal-fade")[0];
let closeOut = document.getElementsByClassName("close")[0];

modalButton.addEventListener('click', openModal);
closeOut.addEventListener('click', closeModal);

function openModal () {
  modal.style.display = 'block';
}
// console.log(window.innerWidth)

function closeModal () {
  modal.style.display = 'none';
}

//Function for darkmode toggle
let darkMode = document.getElementsByClassName("slider round")[0];
darkMode.addEventListener('click', activateDark);
// console.log(darkMode)

function activateDark(){
  let body = document.body;
  body.classList.toggle("dark-mode");
  // darkMode.innerHTML === "Dark Mode" ? darkMode.innerHTML = "Light Mode" : darkMode.innerHTML = "Dark Mode";
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

let gameOver = document.getElementsByClassName("winner-modal")[0];
// console.log(gameOver)
let gameScore = 0
function keepScore(){
  let score = document.getElementById("score-text")
    if (firstCard.dataset.card === secondCard.dataset.card) {
      score.innerHTML = gameScore += 2
      if (gameScore === 12) {
        gameOver.style.display = "block"
      }
    }
}

//Close Winner Modal DOM
let span = document.getElementsByClassName("close-winner")[0];
span.addEventListener('click', closeWinnerModal);

//Function for closing the winner modal
function closeWinnerModal(){
  gameOver.style.display="none"
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






// let test = document.getElementsByClassName("memory-game")[0].appendChild(newDiv)
// test.appendChild(newDiv)

// console.log(test)

// let cardsArrayBack = ["card", "card", "card","card", "card", "card", "card", "card", "card", "card" ];
let gameContainer = document.getElementsByClassName("memory-game")[0]
let gameCards = document.getElementsByClassName("memory-card")
console.log(gameCards)
let emptyArr = []
for (let i=0; i < gameCards.length; i++){
  emptyArr.push(gameCards[i])
  console.log(emptyArr)
}

// for (let i=0; i < cardsArrayBack.length; i++){}

//   let div = document.createElement("div");
//   let img = document.createElement("img");
//   div.appendChild(img)
//   gameContainer.appendChild(div).innerHTML = '<img width="130" height="200" src="./images/red_card_front.svg">';
// }

// let images = ['./images/2_diamonds.svg', './images/2_diamonds.svg', 
// './images/3_diamonds.svg', './images/3_diamonds.svg', 
// './images/4_diamonds.svg', './images/4_diamonds.svg', 
// './images/5_diamonds.svg', './images/5_diamonds.svg', 
// './images/6_diamonds.svg','./images/6_diamonds.svg', ]
// let id = ["2", "3", "4", "5", "6", "7", "8", "9", "10"];
// let cardsArrayFront = ["card01", "card02", "card03","card04", "card05", "card06","card07", "card08", "card09","card10" ];
// for (let i=0; i < images.length; i++){
//   console.log(images)
//   let div = document.createElement("div");
//   let img = document.createElement("img");
//   div.appendChild(img)
//   gameContainer.appendChild(div).innerHTML = '<img width="130" height="200" src="./images/red_card_front.svg">';
// }



//have the order tied to something you can shuffle
// let arr = [1, 2, 3, 4, 5, 6,  7, 8, 9, 10, 11, 12]
// window.addEventListener("load", shuffle);
// buttonShuffle = document.getElementsByClassName("restart")

//return cards and append to child
// get Memoryy game and set it equal to container
//a for loop will go over the array of values, use container.appendChild for each div
// the number in the SVG link is the only dynamic element  
//render with javascript


cards.forEach(card => card.addEventListener('click', flipCard))
