const cards = document.querySelectorAll('.memory-card');

function flipCard(){
  this.classList.toggle('flip')
}

cards.forEach(card => card.addEventListener('click', flipCard))


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

function openModal (){
 modal.style.display =  'block';
}

//Listen for closeModal click
closeBtn.addEventListener('click', closeModal);

function closeModal() {
  modal.style.display = 'none';
}
