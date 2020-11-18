// grab all the cards
const cards = document.querySelectorAll('.memory-card');

// card state (flipped or not yet flipped?)
let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard() {
  // console.log('I was clicked');
  // console.log(this); // tells us this is the memory card
  this.classList.add('flip'); // adds  .flip

  if (!hasFlippedCard) {
    // first time clicked a card
    hasFlippedCard = true;
    firstCard = this;
    // console.log(hasFlippedCard, firstCard);
  } else {
    // second click
    hasFlippedCard = false;
    secondCard = this;
    // console.log(firstCard, secondCard);

    // do cards match?
    // console.log(firstCard.dataset.framework);
    // console.log(secondCard.dataset.framework);
  }
}
cards.forEach((card) => card.addEventListener('click', flipCard));
