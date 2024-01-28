let boxs = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let result = document.querySelector(".result");
let chance = document.querySelector(".chance");
let valueO = document.getElementById("o");
let valueX = document.getElementById("x");
let counter = 1;
let pointsO = 0;
let pointsX = 0;

let turn = true; // turn is enable for 'O';

const winnerPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxs.forEach((box) => {
  box.addEventListener("click", () => {
    // console.log("clicked");

    if (turn) {
      box.innerHTML = "O";
      box.style.color = "white";
      turn = false;
      chance.innerHTML = "Play X";
      counter += 1;
    } else {
      box.innerHTML = "X";
      box.style.color = "red";
      turn = true;
      chance.innerHTML = "Play O";
      counter += 1;
    }

    box.disabled = true;

    let isWinner = checkWinner();

    if (counter === 10 && !isWinner) {
      gameDraw();
    }
  });
});

const gameDraw = () => {
  result.innerHTML = "Game was a Draw.";
  disabledBoxs();
};

const disabledBoxs = () => {
  boxs.forEach((box) => {
    box.disabled = true;
  });
  // console.log("disabled");
};

const addpoints = (points) => {
  //   console.log(points);
  if (points === "O") {
    pointsO += 1;
    valueO.innerHTML = pointsO;
    // console.log("winner", points, pointsO);
  } else {
    pointsX += 1;
    valueX.innerHTML = pointsX;
    // console.log("winner", points, pointsX);
  }
};

const winnerResult = (winner) => {
  result.innerHTML = `winner is ${winner}`;
  disabledBoxs();
  addpoints(winner);
};

const checkWinner = () => {
  for (let pattern of winnerPatterns) {
    // console.log(pattern);
    // console.log(pattern[0], pattern[1], pattern[2]);
    // console.log(boxs[pattern[0]].innerText, boxs[pattern[1]].innerText, boxs[pattern[2]].innerText);

    let pos1value = boxs[pattern[0]].innerText;
    let pos2value = boxs[pattern[1]].innerText;
    let pos3value = boxs[pattern[2]].innerText;

    if (pos1value != "" && pos2value != "" && pos3value != "") {
      if (pos1value === pos2value && pos2value === pos3value) {
        winnerResult(pos1value);
        return true;
      }
    }
  }
};

resetBtn.addEventListener("click", () => {
  turn = true;
  boxs.forEach((box) => {
    box.innerHTML = " ";
    box.disabled = false;
  });
  result.innerHTML = "";
  chance.innerHTML = "Play O";
  valueO.innerHTML = 0;
  valueX.innerHTML = 0;
  counter = 1;
  //    console.log("reset");
});

newBtn.addEventListener("click", () => {
  turn = true;
  boxs.forEach((box) => {
    box.innerHTML = " ";
    box.disabled = false;
  });
  result.innerHTML = "";
  chance.innerHTML = "Play O";
  counter = 1;
  //    console.log("new");
});
