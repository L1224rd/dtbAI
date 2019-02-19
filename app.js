const startButton = document.querySelector('button[onclick="movesLikeJagger()"]');

window.alert = () => { };

let goodMoves = []; // the ai will repeat its moves that went well

let moveCounter = 0; // used to repeat a successfull path

// when the game is over a button shows up, use that to keep track of the paths
const checkGameOver = () => { 
  if (startButton.style.display !== 'none') {
    moveCounter = 0;
    // every time you die, change the last 3 moves
    goodMoves = goodMoves.slice(0, goodMoves.length - 3);
    startButton.click();
  }
};

const moveBallRandom = () => {
  const keyArray = ['w', 'a', 's', 'd'];
  command = keyArray[Math.floor(Math.random() * 4)];
  goodMoves.push(command);
}


// repeat the same moves of your parents until you are better than them
const moveBall = () => {
  checkGameOver();
  if (moveCounter < goodMoves.length) {
    command = goodMoves[moveCounter];
    // white means you're repeating moves, blue you're on your own
    document.querySelector('#character').style.backgroundColor = 'white';
  } else {
    document.querySelector('#character').style.backgroundColor = 'turquoise';
    moveBallRandom();
  }
  moveCounter++;
}

setInterval(moveBall, 100);

// TODO: adjust the number of moves to be changed based on your evolution
//       if you are stuck change more moves

// TODO: move the ball more frequently as the time passes
