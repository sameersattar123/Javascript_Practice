let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const getComputerChoices = () => {
  const options = ["rock", "paper", "scissor"];
  return options[Math.floor(Math.random() * options.length)];
};

const drawGame = () => {
  console.log(" game draw");
  msg.innerText = "Game was Draw ! Play Again";
  msg.style.backgroundColor = "blue";
};

const showWinner = (userWin) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    console.log("You win");
    msg.innerText = "You Win";
    msg.style.backgroundColor = "green";
  } else {
      compScore++;
      compScorePara.innerText = compScore;
    console.log("You Lose");
    msg.innerText = "You Lose";
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  console.log(userChoice);
  const compChoice = getComputerChoices();
  console.log(compChoice);

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissor" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
