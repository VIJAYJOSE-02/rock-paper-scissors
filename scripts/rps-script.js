const score = JSON.parse(localStorage.getItem('score')) || {
  wins:0,
  loses:0,
  ties:0
};
updateScore();
function playGame(playerMove){
let computerMove=randomMove();
let result='';
if(playerMove==='rock'){
if(computerMove==='rock'){
  result='Its a tie';
}else if(computerMove==='paper'){
  result='You Lost';
}else if(computerMove==='scissors'){
  result='You Win';
}
}else if(playerMove==='paper'){
  if(computerMove==='rock'){
    result='You Win';
  }else if(computerMove==='paper'){
    result='Its a tie';
  }else if(computerMove==='scissors'){
    result='You Lost';
  }
 }else if(playerMove==='scissors'){
  if(computerMove==='rock'){
    result='You Lost';
  }else if(computerMove==='paper'){
    result='You Win';
  }else if(computerMove==='scissors'){
    result='Its a tie';
  }
 }

 if(result=='You Win'){
  score.wins+=1;
 }else if(result=='You Lost'){
  score.loses+=1;
 }else if(result == 'Its a tie'){
  score.ties+=1;
 }
 localStorage.setItem("score",JSON.stringify(score));
 updateScore();
 document.querySelector('.js-result').innerHTML = `${result}`;
 document.querySelector('.js-move').innerHTML = `Your Move: <img src="images/${playerMove}-emoji.png" class="move-icon"> | Computer Move: <img src="images/${computerMove}-emoji.png" class="move-icon">`;
}
function updateScore(){
document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.loses}, Ties: ${score.ties}`;
}
function randomMove(){
let computerMove='';
const randomNumber = Math.random();
if(randomNumber>=0 && randomNumber< 1/3){
computerMove='rock';
}else if(randomNumber>= 1/3 && randomNumber < 2/3){
computerMove='paper';
}else if(randomNumber>= 2/3 && randomNumber < 1){
computerMove='scissors';
}
return computerMove;
}