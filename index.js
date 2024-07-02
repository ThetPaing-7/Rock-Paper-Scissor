let rockBtn = document.getElementById("rockBtn");
let paperBtn = document.querySelector("#paperBtn");
let scissorBtn = document.querySelector("#scissorBtn");

const displayResult = document.querySelector("#holder");

const result = document.createElement("p");
const tagline = document.createElement("p");
const humanPoint = document.createElement("p");
const computerPoint = document.createElement("p");


displayResult.appendChild(result);
displayResult.appendChild(tagline);
displayResult.appendChild(computerPoint);
displayResult.appendChild(humanPoint);
  




//Create 3 variables store 
let x = "Rock";
let y = "Paper";
let z = "Scissors"


let humanScore = 0, computerScore = 0;




const computerSelection = getComputerChoice();





//To play a single round

function playRound(humanSelection,computerSelection){
    if(computerSelection === humanSelection){
        result.textContent = `Computer Selection: ${computerSelection}`; 
        tagline.textContent = " Opp!It is a tile"
        
    }
    else if(computerSelection === "rock" && humanSelection === "scissor" ){
        result.textContent = `Computer Selection: ${computerSelection}` ;
        tagline.textContent = " Yon lose! Rock beat scissor";
        computerScore += 1;
    }
    else if(computerSelection === "rock" && humanSelection === "paper"){
        result.textContent = `Computer Selection: ${computerSelection}`;
        tagline.textContent = " You win! Paper beat rock";
        humanScore += 1;
    }
    else if(computerSelection === "scissor" && humanSelection === "paper"){
        result.textContent = `Computer Selection: ${computerSelection}` ;
        tagline.textContent = " You lose! Scissor beat paper";
        computerScore += 1;
    }
    else if(computerSelection === "scissor" && humanSelection === "rock"){
        result.textContent = `Computer Selection: ${computerSelection}` ;
        tagline.setContent = "You Win! Rock beat scissor";
        humanScore += 1;
    }
    else if(computerSelection === "paper" && humanSelection === "rock"){
        result.textContent = `Computer Selection: ${computerSelection} ` ;
        tagline.textContent = "You lose! Paper beat rock`";
        computerScore += 1;
    }
    else if(computerSelection === "paper" && humanSelection === "scissor"){
        result.textContent = `Computer Selection: ${computerSelection}` ;
        tagline.textContent = "You win! Paper beat Scissor";
        humanScore += 1;
    }else{
        console.log("hi");
    }

    computerPoint.textContent = `Computer Score : ${computerScore}`;
    humanPoint.textContent = `Human Score : ${humanScore}`;
    if(humanScore === 5 || computerScore === 5){
        if(humanScore > computerScore){
            const winner = document.createElement("strong");
            winner.textContent ="Yay! You WIN";
            displayResult.appendChild(winner);
        }else{
            const winner = document.createElement("strong");
            winner.textContent ="Loser! Computer Beat You";
            displayResult.appendChild(winner);
        }
    
    }


    
}



rockBtn.addEventListener("click",() =>{
    
        playRound("rock",computerSelection);
        
});

paperBtn.addEventListener("click",() =>{
        playRound("paper",computerSelection);   
});

scissorBtn.addEventListener("click",() =>{
   
        playRound("scissor",computerSelection);
       
    
});





 
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



