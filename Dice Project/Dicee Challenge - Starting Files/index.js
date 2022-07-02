var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
// 
var newImage1Src = "./images/dice" + randomNumber1 + ".png";
var newImage2Src = "./images/dice" + randomNumber2 + ".png";

document.querySelector(".img1").setAttribute("src",newImage1Src);
document.querySelector(".img2").setAttribute("src", newImage2Src);


var originalH1 = document.querySelector("h1").innerHTML;

if (randomNumber1 > randomNumber2){
    
    document.querySelector("h1").innerHTML = "&#128681 Player 1 Wins!";
} else if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw!";
} else {
    document.querySelector("h1").innerHTML = "Player 2 Wins! &#128681";
}

setTimeout(function(){
    document.querySelector("h1").innerHTML= originalH1;
},3000);