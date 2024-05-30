//Create 3 variables store 
let x = "Rock";
let y = "Paper";
let z = "Scissors"


let humanScore = 0, computerScore = 0;

playGame(computerScore, humanScore);



//To play five round
//if both computerScore and humanScore < 5 
// Play again until each score reach 5
function playGame() {
    for (let i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice();
        playRound(humanSelection, computerSelection);
    }

    console.log("Computer Score: " + computerScore);
    console.log("Human Score: " + humanScore);
}


//To play a single round

function playRound(humanSelection,computerSelection){
    if(computerSelection === humanSelection){
        console.log("Computer Selection: " + computerSelection);
        console.log("Opp!It is is tile")
    }
    else if(computerSelection === "rock" && humanSelection === "scissor" ){
        console.log("Computer Selection: " + computerSelection);
        console.log("Yon lose! Rock beat scissor")
        computerScore += 1;
    }
    else if(computerSelection === "rock" && humanSelection === "paper"){
        console.log("Computer Selection: " + computerSelection);
        console.log("You win! Paper beat rock")
        computerScore += 1;
    }
    else if(computerSelection === "scissor" && humanSelection === "paper"){
        console.log("Computer Selection: " + computerSelection);
        console.log("You lose! Scissor beat paper")
        computerScore += 1;
    }
    else if(computerSelection === "scissor" && humanSelection === "rock"){
        console.log("Computer Selection: " + computerSelection);
        console.log("You Win! Rock beat scissor ")
        humanScore += 1;
    }
    else if(computerSelection === "paper" && humanSelection === "rock"){
        console.log("Computer Selection: " + computerSelection);
        console.log("You lose! Paper beat rock")
        computerScore += 1;
    }
    else if(computerSelection === "paper" && humanSelection === "scissor"){
        console.log("Computer Selection: " + computerSelection);
        console.log("You win! Paper beat Scissor")
    }else{

    }
    
}


 
 //HumanChoice Function
function getHumanChoice(){
    let choice = prompt("rock , paper or scissor");
    let HumanChoice = choice.toLowerCase();
    if(HumanChoice === "rock" || HumanChoice === "paper" || HumanChoice === "scissor"){
         return HumanChoice;
    }
    else
    {
        choice = prompt("rock , paper or scissor");
    }
    HumanChoice = choice.toLowerCase(); 
    return HumanChoice;

}



//Create A Math function that return from 0 to 3
function getComputerChoice(){
    let number = Math.floor(Math.random() * 3);

    if(number === 0 ){
        return "rock";
    }
    else if(number === 1){
        return "paper";
    }
    else{
        return "scissors";
    }
        
    
}



