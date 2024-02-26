'use strict';

let playerOneScore = 0;
let playerTwoScore = 0;
let playerOneCurrentScore = 0;
let playerTwoCurrentScore = 0;
let activePlayer = 1;
const playerOne = document.querySelector('.player--0');
const playerTwo = document.querySelector('.player--1');

const rollDice = document.querySelector('.btn--roll');
const diceImg = document.querySelector('.dice');
const holdBtn = document.querySelector('.btn--hold');
const newGameBtn = document.querySelector('.btn--new');
const scoreOneBtn = document.getElementById('score--0');
const scoreTwoBtn = document.getElementById('score--1');

diceImg.style.display = 'none';
scoreOneBtn.innerText = 0;
scoreTwoBtn.innerText = 0;

function switchPlayers() {
  if (activePlayer === 1) {
    playerOne.classList.toggle('player--active');
    playerTwo.classList.toggle('player--active');
    activePlayer = 2;
  } else {
    playerTwo.classList.toggle('player--active');
    playerOne.classList.toggle('player--active');
    activePlayer = 1;
  }
}

function reset() {
  playerOneCurrentScore = 0;
  playerTwoCurrentScore = 0;
  document.getElementById(`current--0`).innerText = 0;
  document.getElementById(`current--1`).innerText = 0;
}

function stop() {
  holdBtn.style.cursor = 'not-allowed';
  holdBtn.setAttribute('disabled', true);
  rollDice.style.cursor = 'not-allowed';
  rollDice.setAttribute('disabled', true);
}

function updateCurrent(player, value) {
  value === 1 ? 0 : value;
  document.getElementById(`current--${player - 1}`).innerText = value;
}

const randomNUmber = () => Math.trunc(Math.random() * 6) + 1;

rollDice.addEventListener('click', () => {
  let diceNUmber = randomNUmber();

  diceImg.src = `dice-${diceNUmber}.png`;
  diceImg.style.display = 'block';
  if (diceNUmber === 1) {
    reset();
    switchPlayers();
    diceNUmber = 0;
  } else {
    if (activePlayer === 1) {
      playerOneCurrentScore += diceNUmber;
      updateCurrent(activePlayer, playerOneCurrentScore);
    } else {
      playerTwoCurrentScore += diceNUmber;
      updateCurrent(activePlayer, playerTwoCurrentScore);
    }
  }
});

holdBtn.addEventListener('click', () => {
  if (activePlayer === 1) {
    playerOneScore += playerOneCurrentScore;
    scoreOneBtn.innerText = playerOneScore;
    if (playerOneScore >= 100) {
      playerOne.classList.add('player--winner');
      stop();
      return;
    }
  } else {
    playerTwoScore += playerTwoCurrentScore;
    scoreTwoBtn.innerText = playerTwoScore;
    if (playerTwoScore >= 100) {
      playerTwo.classList.add('player--winner');
      stop();
      return;
    }
  }
  reset();
  switchPlayers();
});

newGameBtn.addEventListener('click', () => {
  location.reload();
});
