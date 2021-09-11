var n1= Math.floor(Math.random()*6 )+1;
// n1=n1*6;
// n1=Math.floor(n1)+1;
var randomDiceImg= "dice"+ n1+ ".png";
var randomDiceSrc = "images/"+ randomDiceImg;
var image1= document.querySelectorAll("img")[0];

image1.setAttribute("src", randomDiceSrc);
//  For Dice 2

var n2=Math.floor(Math.random() *6)+1;
var randomDiceImg2= "dice" + n2 +".png";
var randomDiceSrc2= "images/"+ randomDiceImg2;
var image2= document.querySelectorAll("img")[1];
image2.setAttribute("src", randomDiceSrc2);

if(n1>n2)
document.querySelector("h1").innerHTML="Player 1 wins";
else if(n2>n1)
document.querySelector("h1").innerHTML= "player 2 wins";
else 
document.querySelector("h1").innerHTML= "Draw";

