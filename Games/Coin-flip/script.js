// Set's a variable computer move
let computerMove = '';

// Get computer move
function getComputerMove(){
    const randomNumber = Math.random();
     if (randomNumber <= 0.5){
      computerMove = 'head';
     }else if (randomNumber <= 1){
      computerMove = 'tail';
     }else{
      console.log(randomNumber)
     }

     return computerMove;
}

// player score
// it chacks if the local storage score has been collected if not reurns to this default one 
let playerScore = JSON.parse(localStorage.getItem('playerScore')) || {
  Wins : 0,
  losses : 0
}


// declares the result variable
let result = '';

// gets the p tags from the HTML
  let statement = document.querySelector('.statement');

// Compare moves and stores the resut in a result variable
function compareMoves(userMove){
  computerMove = getComputerMove();
  if(userMove === 'tail'){
    if(userMove === computerMove){
      result = 'win';
    }else if (userMove != computerMove){
      result = 'loss';
    }else{
      console.log(`error${computerMove}`)
    }
  }else if(userMove === 'head'){
    if(userMove === computerMove){
      result = 'win';
    }else if (userMove != computerMove){
      result = 'loss';
    }else{
      console.log(`error${computerMove}`)
    }
  }

  Score(playerScore);

  // Stores the score in localStorage 
  localStorage.setItem('playerScore', JSON.stringify(playerScore));

}


// Adds a score to the player score an displ
 function Score(playerScore){

  if (result === 'win'){
    statement.innerHTML = 'Yayy....You win!!';
    playerScore.Wins += 1;
  }else if(result === 'loss'){
    statement.innerHTML = 'Wrong guess';
    playerScore.losses += 1;
  }else{
    console.log(`error${playerScore}`);
  }
  document.querySelector('.score').innerHTML = `Wins : ${playerScore.Wins}\n Losses : ${playerScore.losses}`;

}

// Resets Score
function ResetScore(playerScore){
  localStorage.removeItem('playerScore');
  playerScore.Wins = 0;
  playerScore.losses = 0;
  statement.innerHTML = '';
  document.querySelector('.score').innerHTML = `Wins : ${playerScore.Wins}\n Losses : ${playerScore.losses}`;
  console.log(playerScore)

}