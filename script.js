let boxs = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");

let turn = true; // turn is enable for 'O';

const winnerPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxs.forEach( (box) => {
    box.addEventListener("click", () => {
        console.log("clicked");

        if(turn){
            box.innerHTML = "O";
            turn = false;

        } else {
            box.innerHTML = "X";
            turn = true;
        }

        box.disabled = true;

        // checkWinner();
    })
});

// const checkWinner = () => {

// }

resetBtn.addEventListener("click", () => {
   turn = true;
   boxs.forEach((box) => {
    box.innerHTML  = " ";
    box.disabled = false;
   });
   console.log("reset");
});


// <-----------------------------30----------------------------------->