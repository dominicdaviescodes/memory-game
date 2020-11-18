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

    return;
  }
  // second click
  hasFlippedCard = false;
  secondCard = this;

  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
}

function unflipCards() {
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
  }, 1500);
}
cards.forEach((card) => card.addEventListener('click', flipCard));
