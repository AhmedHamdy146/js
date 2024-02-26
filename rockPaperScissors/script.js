"use strict";
const game = () => {
  let playerScore = 0;
  let cScore = 0;
  const startGame = () => {
    const intro = document.querySelector(".intro");
    const game = document.querySelector(".game");

    game.classList.add("fadIn");
    intro.classList.add("fadOut");
  };
  document.querySelector(".btn--play").addEventListener("click", startGame);

  const options = ["rock", "paper", "scissors"];
  const computerOption = () => Math.trunc(Math.random() * 3);

  const imgs = document.querySelectorAll("img");

  const btns = document.querySelectorAll(".btns .btn");
  btns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      btns.forEach((btn) => {
        btn.style.pointerEvents = "none";
      });
      imgs.forEach((img) => {
        img.classList.add("animate");
      });
      setTimeout(() => {
        let comOp = computerOption();
        document.querySelector(".img-2").src = `./assets/${options[comOp]}.png`;
        document.querySelector(".img-1").src = `./assets/${options[index]}.png`;
        imgs.forEach((img) => {
          img.classList.remove("animate");
        });
        btns.forEach((btn) => {
          btn.style.pointerEvents = "all";
        });
        updateScore(index, comOp);
      }, 2100);
    });
  });

  const updateScore = (op1, op2) => {
    const msg = document.getElementById("title");
    if (op1 === op2) {
      msg.innerHTML = `Draw`;
    } else if (op1 === 0 && op2 === 2) {
      msg.innerHTML = `player Win`;
      playerScore++;
    } else if (op1 === 1 && op2 === 0) {
      msg.innerHTML = `player Win`;
      playerScore++;
    } else if (op1 === 2 && op2 === 1) {
      msg.innerHTML = `player Win`;
      playerScore++;
    } else if (op1 === 0 && op2 === 1) {
      msg.innerHTML = `Computer Win`;
      cScore++;
    } else if (op1 === 1 && op2 === 2) {
      msg.innerHTML = `Computer Win`;
      cScore++;
    } else if (op1 === 2 && op2 === 0) {
      msg.innerHTML = `Computer Win`;
      cScore++;
    }
    document.getElementById("score--0").innerHTML = playerScore;
    document.getElementById("score--1").innerHTML = cScore;
  };
};

game();
