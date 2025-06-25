var randomNumber1= Math.floor(Math.random()*6) +1; // 1-6
var randomImage= "images/dice"+ randomNumber1 + ".png"; // imgaes/dice1.png-images/dice6.png
document.querySelectorAll("img") [0];
var image1=document.querySelectorAll("img") [0];
image1.setAttribute("src",randomImage);


var randomNumber2= Math.floor(Math.random()*6)+1;
var randomImage1= "images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1];
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImage1);


if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "🚩Player1 Wins!🎉";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML= "🎉Player2 Wins!🚩";
}
else{
    
    document.querySelector("h1").innerHTML= "🎲Draw!";
}


















