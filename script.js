document.addEventListener("DOMContentLoaded", function () {
  createBoard (16);
})

const gridBtn = document.querySelector("#grid-btn");
gridBtn.addEventListener('click', function() {
  let size = getSize();
  createBoard(size);
});

function createBoard (size) {
  let board = document.querySelector('.container');
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  let boardSize = size * size;

  for (let i = 0; i < boardSize; i++) {
    let divChild = document.createElement('div');
    divChild.addEventListener('mouseover', function () {
      divChild.style.backgroundColor = "black";
    })
    divChild.setAttribute('class', 'childDivs');
    board.insertAdjacentElement('beforeend', divChild);
  }
}

function getSize () {
  let userInput = prompt('Enter number of squares per side (10 to 100)');
  if (userInput == "") {
    alert("Please add a valid number");
  } else if (userInput > 100 || userInput < 10) {
    alert ('Range between 10 to 100');
  } else {
      return userInput;
    }
} 

// const eraseBtn = document.querySelector("#erase-btn");
// eraseBtn.addEventListener('click', function() {
//   box.addEventListener('mouseover', (e) => {
//       box.style.backgroundColor = 'gainsboro';    
//   }) 
// });

function reset() {
  window.location.reload();
 }

const clearBtn = document.querySelector("#reset-btn");
clearBtn.addEventListener('click', reset);