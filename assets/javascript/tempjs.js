let hexagon = Math.floor((Math.random() * (12)) + 1);
$("#hexagon").text(hexagon);
console.log(hexagon);

let oval = Math.floor((Math.random() * (12)) + 1);
$("#oval").text(oval);
console.log(oval);

let square = Math.floor((Math.random() * (12)) + 1);
$("#square").text(square);
console.log(square);



if (computerScore === userScore){
console.log("You win");
}
else {

console.log("You lose");

}
