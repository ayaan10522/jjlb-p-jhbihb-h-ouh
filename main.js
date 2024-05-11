// Chessboard creation
const board = document.querySelector('.board');

for (let i = 0; i < 64; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    if ((i + Math.floor(i / 8)) % 2 === 0) {
        square.classList.add('dark');
    } else {
        square.classList.add('light');
    }
    board.appendChild(square);
}

// Chessboard setup
const pieces = ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'];
const pawn = 'P';

for (let i = 0; i < 8; i++) {
    document.querySelector(`.board > .square:nth-child(${i + 1})`).textContent = pieces[i];
    document.querySelector(`.board > .square:nth-child(${i + 9})`).textContent = pawn;
    document.querySelector(`.board > .square:nth-child(${i + 49})`).textContent = pawn;
    document.querySelector(`.board > .square:nth-child(${i + 57})`).textContent = pieces[i].toLowerCase();
}
