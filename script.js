var userScore = 0;
var computerScore = 0;
const smallUserName = "user".fontsize(3).sub();
const smallCompName = "comp".fontsize(3).sub();
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.getElementById("result");
const rock_img = document.getElementById("rock");
const paper_img = document.getElementById("paper");
const scissors_img = document.getElementById("scissors");

//Generates a "choice" for the computer.
function getComputerChoice(){
  const choices = ["rock","paper","scissors"];
  var choice = Math.floor(Math.random()*3);
  return (choices[choice]);
}

//Adds point to user and green glow on the score board
function win(user, computer){
  userScore++;
  userScore_span.innerHTML = userScore;
  result_p.innerHTML = `${user.capitalize()}${smallUserName} beats ${computer.capitalize()}${smallCompName}. You win!`;
  scoreBoard_div.classList.add("green-glow");
  setTimeout(() => scoreBoard_div.classList.remove("green-glow"),600);
}
//Adds point to computer and red glow to the screen board
function lose(user, computer){
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${user.capitalize()}${smallUserName} loses to ${computer.capitalize()}${smallCompName}. You lose...`;
  scoreBoard_div.classList.add("red-glow");
  setTimeout(() => scoreBoard_div.classList.remove("red-glow"),600);
}

//Adding no points and grey glow to the score board
function draw(user, computer){
  result_p.innerHTML = `Both chose ${user.capitalize()}. It's a draw.`;
  scoreBoard_div.classList.add("gray-glow");
  setTimeout(() => scoreBoard_div.classList.remove("gray-glow"),600);
}

//Looks up choices from computer and user and finds out who won.
function game(userInput){
  const computerChoice = getComputerChoice();
  switch (userInput  + computerChoice){
    //User wins
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      win(userInput, computerChoice);
      break;
    //User loses
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      lose(userInput, computerChoice);
      break;
    //Draw
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      draw(userInput, computerChoice);
      break;
  }
}

// Change fisrt letter of a string to be upper case
String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}

//main
function main(){
  rock_img.addEventListener("click", () => game("rock"));
  paper_img.addEventListener("click", () => game("paper"));
  scissors_img.addEventListener("click", () =>game("scissors"));
}

main();
