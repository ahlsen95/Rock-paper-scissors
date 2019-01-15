const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_img = document.getElementById("rock");
const paper_img = document.getElementById("paper");
const scissors_img = document.getElementById("scissors");

//Generates a "choice" for the computer.
function getComputerChoice(){
  const choices = ["rock","paper","scissors"];
  var choice = Math.floor(Math.random()*3);
  return (choices[choice]);
}

//Looks up choices from computer and user and finds out who won.
function game(userInput){
  const computerChoice = getComputerChoice();
  console.log(userInput + "  "  + computerChoice);
  switch (userInput  + computerChoice){
    //User wins
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      win();
      break;
    //User loses
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      lose();
      break;
    //Draw
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      draw();
      break;
  }
}

//main
function main(){
  rock_img.addEventListener("click", function(){
    game("rock");
  });

  paper_img.addEventListener("click", function(){
    game("paper");
  });

  scissors_img.addEventListener("click", function(){
    game("scissors");

  });
}

main();
