// let card1 = document.querySelector('#card1');
// let card2 = document.querySelector('#card2');
// let card3 = document.querySelector('#card3');
// let card4 = document.querySelector('#card4');
// let card5 = document.querySelector('#card5');
// let card6 = document.querySelector('#card6');

// let cardDoms is Array with DOMs
// ler cardColors is Array with colors
// iterate to assign each color to DOM elements + assign event listener with event handler and function to compare values of cards

let cardIds = [
  '#card1',
  '#card2',
  '#card3',
  '#card4',
  '#card5',
  '#card6',
]

let cardDoms = [];
cardIds.forEach(card => {
  cardDoms.push(document.querySelector(card));
})

let startButton = document.querySelector('button');

// let card1Color;
// let card2Color;
// let card3Color;
// let card4Color;
// let card5Color;
// let card6Color;

let cardColors = [];

let cardA;
let cardB;

let defaultBackCardColor = 'palevioletred';

let numOfCards = 6;
let countPairs = 0;


const shuffleCards = () => {
  const shuffle = Math.floor(Math.random() * numOfCards);
  cardColors = [];
  
  let candidateColors;
  if(shuffle <= 2) {
    candidateColors = [
      'white',
      '#33cccc',
      'gray',
      'gray',
      'white',
      '#33cccc',
    ]    
  }
  else if(shuffle <= 4) {
    candidateColors = [
      'gray',
      '#33cccc',
      'white',
      'white',
      'gray',
      '#33cccc',
    ]
  }
  else {
    candidateColors = [
      '#33cccc',
      'white',
      'gray',      
      'white',
      'gray',
      '#33cccc',
    ]        
  }
  candidateColors.forEach(color => cardColors.push(color))
}

shuffleCards();

let hide = () => {
  startButton.style.display = 'none';
};

let open = () => {
  startButton.style.display = 'block';
};


// function to compare values will be called after cardA and cardB are NOT undefined
const compareValues = () => {
  if(cardA.style.background !== cardB.style.background) {
    setTimeout(() => { 
      cardA.style.background = defaultBackCardColor;
      cardB.style.background = defaultBackCardColor; 
      cardA = undefined;
      cardB = undefined;
    
    }, 500); 
  } else {
    cardA = undefined;
    cardB = undefined;
    countPairs++;
    
  }
  if(isWinner()) {
    setTimeout(() => {
      open();
    }, 300);
  }
}

const isWinner = () => {
  return countPairs === numOfCards / 2;
}

const assignFlippedCard = (card) => {
  // if(card)
  if(cardA === undefined && cardB === undefined) {
    cardA = card;  // cardA = card1
  }
  else if(cardB === undefined && cardA !== card) {
    cardB = card; // cardB = card2
    compareValues()
  }
}

// Solution 1 
for(let i = 0; i < cardDoms.length; i++) {
  let currentCard = cardDoms[i];
  let currentColor = cardColors[i];

  currentCard.onclick = () => {
    currentCard.style.background = currentColor;
    assignFlippedCard(currentCard)
  }
}

// Solution 2
// card1.onclick = () => {
//   card1.style.background = card1Color;
//   assignFlippedCard(card1);
// }
// card2.onclick = () => {
//   card2.style.background = card2Color;
//   assignFlippedCard(card2);
// }
// card3.onclick = () => {
//   card3.style.background = card3Color;
//   assignFlippedCard(card3);
// }
// card4.onclick = () => {
//   card4.style.background = card4Color;
//   assignFlippedCard(card4);
// }
// card5.onclick = () => {
//   card5.style.background = card5Color;
//   assignFlippedCard(card5);
// }
// card6.onclick = () => {
//   card6.style.background = card6Color;
//   assignFlippedCard(card6);
// }

hide();


let startGame = () => {
  hide();
  for(let card of cardDoms) {
    card.style.background = defaultBackCardColor;
  }
  // card1.style.background = defaultBackCardColor;
  // card2.style.background = defaultBackCardColor;
  // card3.style.background = defaultBackCardColor;
  // card4.style.background = defaultBackCardColor;
  // card5.style.background = defaultBackCardColor;
  // card6.style.background = defaultBackCardColor;
  numOfCards = 6;
  countPairs = 0;
  shuffleCards();
} 

startButton.onclick = startGame;