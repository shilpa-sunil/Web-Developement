var randomNumber1 =Math.floor(Math.random()*6)+1;// 1-6

var randomDiceImage = "images/dice" + randomNumber1 + ".png";//images/dice1 -images/dice6

document.querySelectorAll("img")[0].setAttribute("src",randomDiceImage);//changing left image to random


var randomNumber2 =Math.floor(Math.random()*6)+1;// 1-6

var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",randomDiceImage2);

 if(randomNumber1 > randomNumber2)
 {
   document.querySelector("h1").innerText = "🚩 Player1 wins!";
 }
 else if( randomNumber1 < randomNumber2)
 {
   document.querySelector("h1").innerText = "Player2 wins! 🚩";
 }
 else {
   document.querySelector("h1").innerText = "Draw";
 }
