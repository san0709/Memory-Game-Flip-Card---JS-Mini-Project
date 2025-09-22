const fruits = ["🍍", "🍌", "🥑", "🍒", "🍓", "🍎", "🍉", "🍇"];
const cardsContainer = document.getElementById("cards-container");
const btn = document.getElementById('btn');
const msg = document.getElementById('message');
let firstCard = null;
let secondCard = null;
let lockBoard = false;
let matchedPairs = 0;

// Fisher-Yates shuffle algorithm
function shuffleCards(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
//
// Logic to check for a match
function checkForMatch() {
    let isMatch = firstCard.dataset.value === secondCard.dataset.value;
    isMatch ? disableCards() : unflipCards();
}

// Disable cards after a match
function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    matchedPairs++;
    checkWinCondition();
    resetBoard();
}
function checkWinCondition() {
    if (matchedPairs === fruits.length) { // Check if all pairs are matched (8 pairs total)
        msg.textContent = "You've Won!! 🎉";
    }
}
// Unflip cards after a mismatch
function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetBoard();
    }, 1000);
}

// Reset the board for the next turn
function resetBoard() {
    [firstCard, secondCard] = [null, null];
    lockBoard = false;
}

// Flip card logic
function flipCard() {
    if (lockBoard || this === firstCard) return;

    this.classList.add('flip');

    if (!firstCard) {
        firstCard = this;
        return;
    }

    secondCard = this;
    checkForMatch();
}

// Generate the cards on the board
function generateCards() {
    msg.textContent = '';
    msg.textContent = "MEMORY GAME";
    cardsContainer.innerHTML = '';
    let shuffledFruits = shuffleCards([...fruits, ...fruits]); // Shuffle a new doubled array each time

    shuffledFruits.forEach((fruit) => {
        let card = document.createElement('div');
        let back = document.createElement('div');
        let front = document.createElement('div');

        card.classList.add('card');
        back.classList.add('back');
        front.classList.add('front');

        card.dataset.value = fruit;
        front.textContent = fruit;

        card.append(back, front);
        card.addEventListener('click', flipCard);
        cardsContainer.appendChild(card);
    });
}

// Initial game setup
generateCards();

// Event listener for the shuffle button
btn.addEventListener('click', () => {
    generateCards();
});