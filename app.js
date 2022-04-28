const sketchContainer = document.querySelector('.sketch');
let squareCount = document.querySelector('.modal__input--size').value;
let squareInput = document.querySelector('.modal__input--size');

let backgroundCol = document.querySelector('.modal__input--background').value;
const backgroundColorInput = document.querySelector('.modal__input--background');
let penColor = document.querySelector('.modal__input--color').value;

// Saves the background color variable on changes
backgroundColorInput.addEventListener('change', () => {
  backgroundCol = document.querySelector('.modal__input--background').value;
})

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
      square.classList.add('square', `square--${i}__${j}`, 'square--background');
      square.style.backgroundColor = backgroundCol;
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
      let penColor = document.querySelector('.modal__input--color').value;
      square.classList.add('square--hover');
      square.style.backgroundColor = penColor;
      square.classList.remove('square--background');
    });
  });
}

// Change background color
let backgroundInput = document.querySelector('.modal__input--background');
backgroundInput.addEventListener('change', () => {
  const squares = document.querySelectorAll('.square--background');
  squares.forEach((square) => {
    let backgroundCol = document.querySelector('.modal__input--background').value;
    square.style.backgroundColor = backgroundCol;
  });
});

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

// Erase colored squares

const eraseButton = document.querySelector('.button--erase');
eraseButton.addEventListener('click', () => {
  const coloredSquares = document.querySelectorAll('.square--hover');
  coloredSquares.forEach((square) => {
      let backgroundCol = document.querySelector('.modal__input--background').value;
      square.classList.remove('square--hover');
      square.style.backgroundColor = backgroundCol;
      square.classList.add('square--background');
  });
})
