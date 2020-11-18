// grab all the cards

const cards = document.querySelectorAll('.memory-card');

function flipCard() {
  // console.log('I was clicked');
  // console.log(this); // tells us this is the memory card
  this.classList.toggle('flip'); // adds or removes .flip
}
cards.forEach((card) => card.addEventListener('click', flipCard));
