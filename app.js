let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("Rock");
const paper_div = document.getElementById("Paper");
const scissors_div = document.getElementById("Scissors");

  

function getCompChoice(){
    const choices = ["Rock", "Paper", "Scissors"];
    let randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}

 

function win(userChoice, compChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const smallUserWord = " user ".fontsize(3).sub();
    const smallCompWord = " comp ".fontsize(3).sub();
    result_p.innerHTML = userChoice + smallUserWord + " beats " + compChoice + smallCompWord  +". You win!";
}

 
function lose(userChoice, compChoice){
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const smallUserWord = " user ".fontsize(3).sub();
    const smallCompWord = " comp ".fontsize(3).sub();
    result_p.innerHTML = userChoice + smallUserWord + " loses to " + compChoice + smallCompWord  +". You lost!";

}

function draw(userChoice, compChoice){
    const smallUserWord = " user ".fontsize(3).sub();
    const smallCompWord = " comp ".fontsize(3).sub();
    result_p.innerHTML = userChoice + smallUserWord + " equals " + compChoice + smallCompWord  +". Its a draw!";

}

 

 

function game(userChoice){
    const compChoice = getCompChoice();
    switch (userChoice + compChoice){
        case "RockScissors":
        case "PaperRock":
        case "ScissorsPaper":
            win(userChoice, compChoice);
            break;
        case "ScissorsRock":
        case "RockPaper":
        case "PaperScissors":
            lose(userChoice, compChoice);
            break;
        case "ScissorsScissors":
        case "RockRock":
        case "PaperPaper":
            draw(userChoice, compChoice);
            break;
    }

}

 

function main(){
    rock_div.addEventListener('click', function(){
        game("Rock");
    });
    paper_div.addEventListener('click', function(){
        game("Paper");
    });
    scissors_div.addEventListener('click', function(){
        game("Scissors");
    });
}

main();