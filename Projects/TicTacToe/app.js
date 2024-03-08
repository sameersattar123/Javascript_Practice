let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let Turn0 = true;

const winningPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [1, 4, 7],
  [0, 4, 8],
  [2, 5, 8],
  [3, 4, 5],
  [2, 4, 6],
  [6, 7, 8],
];

const resetGame = () => {
    Turn0 = true;
    enabledBoxes();
    msgContainer.classList.add('hide')
}

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (Turn0) {
      box.innerText = "O";
      box.style.color = 'green'
      Turn0 = false;
    } else {
        box.innerText = "X";
        box.style.color = 'orange'
      Turn0 = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const disabledBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enabledBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disabledBoxes();
};
const checkWinner = () => {
  for (let pattern of winningPattern) {
    let position1Value = boxes[pattern[0]].innerText;
    let position2Value = boxes[pattern[1]].innerText;
    let position3Value = boxes[pattern[2]].innerText;

    if (position1Value != "" && position1Value != "" && position3Value != "") {
      if (
        position1Value === position2Value &&
        position2Value === position3Value
      ) {
        console.log("Winner", position1Value);
        showWinner(position1Value);
      }
    }
  }
};


resetBtn.addEventListener('click' , resetGame)
newGameBtn.addEventListener('click' , resetGame)