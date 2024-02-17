'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

console.log(typeof btnsOpenModal);
btnsOpenModal.forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector('.hidden').style.display = 'block';
    document.querySelector('.overlay.hidden').style.display = 'block';
  });
});

btnCloseModal.addEventListener('click', () => {
  document.querySelector('.hidden').style.display = 'none';
  document.querySelector('.overlay.hidden').style.display = 'none';
});

overlay.addEventListener('click', () => {
  document.querySelector('.hidden').style.display = 'none';
  document.querySelector('.overlay.hidden').style.display = 'none';
});
