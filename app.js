const sketchContainer = document.querySelector('.sketch');


let squareCount = 4;

// Set squares on the screen depending on the squareCount
for (i = 1; i <= squareCount; i++) {
  // Create Sketch row
  const sketchRow = document.createElement('div');
  sketchRow.classList.add('sketch__row', `sketch__row--${i}`);
  sketchContainer.appendChild(sketchRow);
  for (j = 1; j <= squareCount; j++) {
    // Create Square
    const square = document.createElement('div');
    square.classList.add('square', `square--${i}__${j}`);
    sketchRow.appendChild(square);
  }
}

// Draw squares
const squares = document.querySelectorAll('.square');
squares.forEach((square) => {
  square.addEventListener('mouseover', () => {
    square.classList.add('square--hover');
  });
});



// Modal Setup
const modal = document.querySelector('#modal');
const openModal = document.querySelector('.button--open')
const closeModal = document.querySelector('.button--close')

openModal.addEventListener('click', () => {
  modal.showModal();
});
closeModal.addEventListener('click', () => {
  modal.close();
});
