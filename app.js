const sketchContainer = document.querySelector('.sketch');

let squareCount = 16;

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


const squares = document.querySelectorAll('.square');

squares.forEach((square) => {
  square.addEventListener('mouseover', () => {
    square.classList.add('square--hover');
  });
});
