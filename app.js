const sketchContainer = document.querySelector('.sketch');
let squareCount = document.querySelector('.modal__input--size').value;
let squareInput = document.querySelector('.modal__input--size');

let backgroundColor = '#ff4400';
let penColor = '#8a2be2';

generateSquares();

// Set squares on the screen depending on the squareCount
function generateSquares() {
  deleteSquares();

  for (i = 1; i <= squareCount; i++) {
    // Create a Sketch row
    const sketchRow = document.createElement('div');
    sketchRow.classList.add('sketch__row', `sketch__row--${i}`);
    sketchContainer.appendChild(sketchRow);
    for (j = 1; j <= squareCount; j++) {
      // Create a Square
      const square = document.createElement('div');
      square.classList.add('square', `square--${i}__${j}`);
      sketchRow.appendChild(square);
    }
  }

  addHoverListener();
}

// Delete Square Fields
function deleteSquares() {
  while (sketchContainer.firstChild) {
    sketchContainer.removeChild(sketchContainer.lastChild);
  }
}

// Add hover listener for each square
function addHoverListener() {
  const squares = document.querySelectorAll('.square');
  squares.forEach((square) => {
    square.addEventListener('mouseover', () => {
      square.classList.add('square--hover');
    });
  });
}


// Change color


// Modal Pop Up
const modal = document.querySelector('#modal');
const openModal = document.querySelector('.button--open')
const closeModal = document.querySelector('.button--close')

openModal.addEventListener('click', () => {
  modal.showModal();
});
closeModal.addEventListener('click', () => {
  modal.close();
});

// Square count slider
let squareCountDisplay = document.querySelector('.modal__display');
squareCountDisplay.innerText = `${squareCount} x ${squareCount}`;

squareInput.addEventListener('change', () => {
  squareCount = document.querySelector('#modal__input--size').value;
  squareCountDisplay.innerText = `${squareCount} x ${squareCount}`;
  generateSquares();
});