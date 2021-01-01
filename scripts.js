//Modal Element
let modal = document.getElementById("directionsModal");
//Open Modal Button
let modalBtn = document.getElementById("modalBtn");
//Close Modal
let closeBtn = document.getElementsByClassName("closeBtn")[0];
// ^ since we are getting all closeBtn class names, even though there is only 
// one we need to specify which one we want in the array. 

//Listen for openModal click
modalBtn.addEventListener('click', openModal);
//Listen for closeModal click
closeBtn.addEventListener('click', closeModal);

function openModal (){
  modal.style.display =  'block';
}

function closeModal() {
  modal.style.display = 'none';
}

//Functionality for the game: 
const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let firstCard;
let secondCard;

  //this is the .memory-card, so we are accessing the classList of the memory card.
  //After, the  toggle is a boolean for if the classlist is there. We have a 
  //Flip class in CSS 
function flipCard(){
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

 }else {
   hasFlippedCard = false;
   secondCard = this;
  //logs the second card flip and sets hasFlippedCard to true
  //  console.log({hasFlippedCard, secondCard});
 }
}
  
cards.forEach(card => card.addEventListener('click', flipCard))