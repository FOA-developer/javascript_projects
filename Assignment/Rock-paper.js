
function pickComputerMove(){
    const randomNumber = Math.random();
    let computerMove = ' ';
    if (randomNumber <= 0.33){
        computerMove = 'Rock'
        // console.log(randomNumber);
    } else if (randomNumber >0.33 && randomNumber <= 0.66){
        computerMove = 'Paper'
        // console.log(randomNumber);
    } else if(randomNumber > 0.66 && randomNumber <= 1){
        computerMove = 'Scissors'
        // console.log(randomNumber);
    }else{
        console.log('Something is wrong');
        console.log('oh chim');
        console.log(randomNumber);
    } 

    // return document.getElementsByClassName("final-result").innerHTML = ""
    return computerMove;
}
let playerscore = JSON.parse(localStorage.getItem('playerscore')) || {
    wins : 0,
    losses : 0,
    Tie : 0,
  };

  updateScoreElement();


// console.log()
let playerScoreJson = '';
function compareMoves(playerMove){
    const computerMove = pickComputerMove();
    let result = '';
    if (playerMove === 'Scissors'){
       if (computerMove === 'Scissors'){
         result = 'it\'s a tie '
       } else if (computerMove === 'Rock'){
         result = 'You lose'
       }else if (computerMove === 'Paper'){
         result = 'You win'
       }
    }else if(playerMove === 'Rock'){
        if (computerMove === 'Scissors'){
          result = 'You lose'
       } else if (computerMove === 'Rock'){
         result = 'it\'s a tie '
       }else if (computerMove === 'Paper'){
         result = 'You win'
       }
    }else if(playerMove === 'Paper'){
         if (computerMove === 'Scissors'){
          result = 'You lose'
       } else if (computerMove === 'Rock'){
         result = 'You win'
       }else if (computerMove === 'Paper'){
         result = 'it\'s a tie '
       }
    }else{
        console.log('Something is wrong ooo')
    }

    if (result === 'You win'){
      playerscore.wins += 1;
    } else if (result === 'You lose'){
      playerscore.losses += 1 ;
    }else if (result === 'it\'s a tie '){
      playerscore.Tie += 1;
    }

    document.querySelector('.result').innerHTML = result
    document.querySelector('.display-moves').innerHTML = `You picked ${playerMove}.....while the computer picked ${computerMove}`
    updateScoreElement();

  // return playerScoreJson;
  localStorage.setItem('playerscore', JSON.stringify(playerscore))
  // console.log(localStorage)
  // console.log(localStorage)
}

function updateScoreElement(){
  document.querySelector('.final-result').innerHTML =
      `Wins: ${playerscore.wins}
       Ties: ${playerscore.Tie} 
       losses: ${playerscore.losses}`
}
function resetScore(){
  playerscore.wins = 0;
  playerscore.losses = 0;
  playerscore.Tie = 0;
  // console.log(localStorage)
  localStorage.removeItem('playerscore')
  updateScoreElement();
}
