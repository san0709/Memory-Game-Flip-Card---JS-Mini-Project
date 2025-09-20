// const emojis = ["🍇", "🍉", "🍎", "🍓", "🍒", "🥑", "🍌", "🍍"];
// const cardsContainer = document.getElementById("cards-container");

// function generateCard() {
//     let doubleEmojis = [...emojis, ...emojis];
//     doubleEmojis.forEach((emoji) => {
//         let emojiCard = document.createElement('div');
//         emojiCard.textContent = emoji;
//         emojiCard.classList.add('cards');
//         cardsContainer.append(emojiCard);
//     })
// }
// generateCard();

// // function shuffleCards() {
// //     let shuffledCards = Math.floor((Math.random() * emojis.length)) + 1;
// //     for (let i = 0; i <= 8; i++){

// //     }
// // }
// // shuffleCards();

const emojis = ["🍇", "🍉", "🍎", "🍓", "🍒", "🥑", "🍌", "🍍"];
const cardsContainer = document.getElementById("cards-container");
const shuffleButton = document.getElementById("shuffle-button");

// This function shuffles the cards using the Fisher-Yates algorithm
function shuffleCards(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// This function generates the cards with a front and back face
function generateCard() {
    let doubleEmojis = [...emojis, ...emojis];
    let shuffledEmojis = shuffleCards(doubleEmojis);

    // Clear any existing cards before generating new ones
    cardsContainer.innerHTML = '';

    shuffledEmojis.forEach((emoji) => {
        let card = document.createElement('div');
        let front = document.createElement('div');
        let back = document.createElement('div');

        card.classList.add('memory-card');
        front.classList.add('front-face');
        back.classList.add('back-face');

        back.textContent = emoji;
        card.appendChild(front);
        card.appendChild(back);

        // Add a click event listener to each card
        card.addEventListener('click', flipCard);

        cardsContainer.appendChild(card);
    });
}

// This function handles the card-flipping logic
function flipCard() {
    this.classList.toggle('flip');
}

// Add event listener to the shuffle button
shuffleButton.addEventListener('click', generateCard);

// Initial card generation on page load
generateCard();