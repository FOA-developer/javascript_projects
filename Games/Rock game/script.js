

// Function to pick computer move
function pickComputerMove(){
    const randomNumber = Math.random();
    let computerMove = ' ';
    if (randomNumber <= 0.33){
        computerMove = 'Rock'
    } else if (randomNumber >0.33 && randomNumber <= 0.66){
        computerMove = 'Paper'
    } else if(randomNumber > 0.66 && randomNumber <= 1){
        computerMove = 'Scissors'
    }else{
        console.log('Something is wrong');
        console.log('oh chim');
        console.log(randomNumber);
    } 


    return computerMove;
}

let isAutoPlaying = false;
let intervalId;

// Autoplay function 
function autoPlay(){
  if (!isAutoPlaying){
    intervalId = setInterval(() => {
      const playermove = pickComputerMove();
      compareMoves(playermove);
    }, 1000);
    isAutoPlaying = true;
  }else{
    clearIntervaal(intervalId);
    isAutoPlaying  = false;
  }
}

document.querySelector('.auto-play').addEventListener('click', () => {autoPlay();})


// declaring the player score
let playerscore = JSON.parse(localStorage.getItem('playerscore')) || {
    wins : 0,
    losses : 0,
    Tie : 0,
  };

updateScoreElement();
let playerScoreJson = '';

const rock = document.querySelector('.js-rock');
  rock.addEventListener('click', () => {
    compareMoves('Rock');
  });
const paper = document.querySelector('.js-paper')
  paper.addEventListener('click', () => {
    compareMoves('Paper')
  });
const scisssors = document.querySelector('.js-scissors')
  scisssors.addEventListener('click', () => {
    compareMoves('Scissors')
  });
document.querySelector('body').addEventListener('keydown',(event) => {
  if(event.key === 'p'){
    compareMoves('Paper');
  }else if(event.key === 'r'){
    compareMoves('Rock');
  }else if(event.key === 's'){
    compareMoves('Scissors');
  }
})

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
         result = 'It\'s a tie'
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
    document.querySelector('.moves').innerHTML = `<p class="pm">You</p>
     <img src="assets and styles/${playerMove}-removebg-preview.png" class="player-move">
     <img src="assets and styles/${computerMove}-removebg-preview.png" class="computer-move">
     <p class="cm">Computer</p>`
     updateScoreElement();
  

  // local storage set to take score
  localStorage.setItem('playerscore', JSON.stringify(playerscore))
  // console.log(localStorage)
}

function updateScoreElement(){
  document.querySelector('.score').innerHTML =
      `Wins: ${playerscore.wins}
       Ties: ${playerscore.Tie} 
       losses: ${playerscore.losses}`
      //  console.log(playerscore)
}
function resetScore(){
  playerscore.wins = 0;
  playerscore.losses = 0;
  playerscore.Tie = 0;
  // console.log(localStorage)
  localStorage.removeItem('playerscore')
  updateScoreElement();
}
  
const confirmAction = () => {
 let message =  document.querySelector('.display-info');
 message.innerHTML= "<div><p>Are you sure you want to reset</p><button class = 'confirmed'>YES</button><button class = 'unconfirmed'>NO</button></div>"
 document.querySelector('.confirmed').addEventListener('click', () => {
  resetScore();
  message.innerHTML = " ";
 })
 document.querySelector('.unconfirmed').addEventListener('click', () => {
  message.innerHTML = '';
 })
}

document.querySelector('.btn').addEventListener('click', () => {
  confirmAction();
})
document.querySelector('body').addEventListener('keydown', (event) => {
  if (event.key === 'Backspace'){
    confirmAction();
  }
  console.log(event.key);
})
