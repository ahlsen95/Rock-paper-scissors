const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_img = document.getElementById("rock");
const paper_img = document.getElementById("paper");
const scissors_img = document.getElementById("scissors");

function game(userInput){
  console.log("User chose " + userInput);
}

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
