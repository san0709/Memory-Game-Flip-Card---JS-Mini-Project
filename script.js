const fruits = ["🍍", "🍌", "🥑", "🍒", "🍓", "🍎", "🍉", "🍇"];
const cardsContainer = document.getElementById("cards-container");

function shuffleCards(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


function generateCards() {
    let doubledFruits = [...fruits, ...fruits];
    let shuffledFruits = shuffleCards(doubledFruits);
    cardsContainer.innerHTML = '';

    shuffledFruits.forEach((fruit) => {
        let card = document.createElement('div');
        let front = document.createElement('div');
        let back = document.createElement('div');
        card.classList = 'card';
        front.classList = 'front';
        back.classList = 'back';


    });
}
