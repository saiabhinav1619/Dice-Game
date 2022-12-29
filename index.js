
var randomNumber1= Math.random() * 6;
randomNumber1 = Math.floor(randomNumber1)+1;
console.log(randomNumber1)

if(randomNumber1==1){
document.querySelectorAll("img")[0].setAttribute("src","images/dice1.png");
}

else if(randomNumber1==2){
    document.querySelectorAll("img")[0].setAttribute("src","images/dice2.png");
}
else if(randomNumber1==3){
    document.querySelectorAll("img")[0].setAttribute("src","images/dice3.png");
}
else if(randomNumber1==4){
    document.querySelectorAll("img")[0].setAttribute("src","images/dice4.png");
}
else if(randomNumber1==5){
    document.querySelectorAll("img")[0].setAttribute("src","images/dice5.png");
}
else if(randomNumber1==6){
    document.querySelectorAll("img1")[0].setAttribute("src","images/dice6.png");
}


var randomNumber2= Math.random() * 6;
randomNumber2 = Math.floor(randomNumber2)+1;
var randomDiceImage = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src",randomDiceImage);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = " 🚩Player 1 Wins!";
    document.querySelector("title").innerHTML = "Player 1 Won";
}

else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
    document.querySelector("title").innerHTML = "Player 2 Won";
}
else{
     document.querySelector("h1").innerHTML = "DRAW!";
     document.querySelector("title").innerHTML = "DRAW Match";
}


