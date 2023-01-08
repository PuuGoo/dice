var randomNumber1 = Math.floor(Math.random() * 6 + 1); // random 1-6
var randomNumber2 = Math.floor(Math.random() * 6 + 1);
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "<span>🚩</span> Player1 wins!";;
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! <span>🚩</span>";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}

var randomDiceImage1 = "images/dice" + randomNumber1 + ".png";  // randome images/dice1.png - images/dice6.png
var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";
document.querySelector(".img1").setAttribute("src",randomDiceImage1);
document.querySelector(".img2").setAttribute("src",randomDiceImage2);