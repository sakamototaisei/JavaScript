'use strict';

const modal = document.getElementById('modal');
const show = document.getElementById('modal__show');
const close = document.getElementById('modal__close');
const backGround = document.getElementById('modal__background');

show.addEventListener('click', () => {
  modal.classList.add('is-show');
  backGround.classList.add('is-show');
})

close.addEventListener('click', () => {
  modal.classList.remove('is-show');
  backGround.classList.remove('is-show');
})

backGround.addEventListener('click', () => {
  close.click();
})



