let userScore = 0;
let computerScore = 0;

const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function getComputerChoice(){
    const choices = ['r','p','s'];
    const index=Math.floor(Math.random() * 3)
    return choices[index];
}

function convertToWord(letter){
    if(letter === 'r')  return "Rock";
    if(letter === 'p') return "Paper";
    return 'Scissors';
}

function win(user, computer){
    userScore++;
    userScore_span.innerHTML = userScore;
    result_div.innerHTML = convertToWord(user) + "(user)" + " beats " + convertToWord(computer) + "(comp)" + ". You Win!";
    document.getElementById(convertToWord(user).toLowerCase()).classList.add('green-glow');
    setTimeout( () => document.getElementById(convertToWord(user).toLowerCase()).classList.remove('green-glow'),1000);
}

function lose(user,computer){
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = convertToWord(computer) + "(comp)" + " beats " + convertToWord(user) + "(user)" + ". You lose!";
    document.getElementById(convertToWord(user).toLowerCase()).classList.add('red-glow');
    setTimeout( () => document.getElementById(convertToWord(user).toLowerCase()).classList.remove('red-glow'),1000);
}

function draw(user,computer){
    result_div.innerHTML = convertToWord(user) + "(user)" + " versus " + convertToWord(computer) + "(comp)" + ". Its a draw.";
    document.getElementById(convertToWord(user).toLowerCase()).classList.add('grey-glow');
    setTimeout( () => document.getElementById(convertToWord(user).toLowerCase()).classList.remove('grey-glow'),1000);
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
        break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
        break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
        break;
    }
}

function main(){
    rock_div.addEventListener('click', () => game("r"))

    paper_div.addEventListener('click', () => game("p"))

    scissors_div.addEventListener('click', () => game("s"))
    }

main();