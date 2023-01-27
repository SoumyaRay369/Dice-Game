var randomNumber1 = Math.floor(Math.random() * 6) + 1;
function theFirstImageINeed(){
    
    if(randomNumber1==1){
        return "images/dice1.png";
    }
    if(randomNumber1==2){
        return "images/dice2.png";
    }
    if(randomNumber1==3){
        return "images/dice3.png";
    }
    if(randomNumber1==4){
        return "images/dice4.png";
    }
    if(randomNumber1==5){
        return "images/dice5.png";
    }
    if(randomNumber1==6){
        return "images/dice6.png";
    }
}
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
function theSecondImageINeed(){
    
    if(randomNumber2==1){
        return "images/dice1.png";
    }
    if(randomNumber2==2){
        return "images/dice2.png";
    }
    if(randomNumber2==3){
        return "images/dice3.png";
    }
    if(randomNumber2==4){
        return "images/dice4.png";
    }
    if(randomNumber2==5){
        return "images/dice5.png";
    }
    if(randomNumber2==6){
        return "images/dice6.png";
    }
}

if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player1 Wins";
}
else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player2 Wins";
}
else{
    document.querySelector("h1").innerHTML = "Draw";
}

document.getElementsByClassName("img1")[0].setAttribute("src",theFirstImageINeed())
document.getElementsByClassName("img2")[0].setAttribute("src",theSecondImageINeed())

