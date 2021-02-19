var game = {
    win: 0,
    loss: 0,
};
var choices = ["rock", "paper", "scissors"]

var random1 = Math.floor((Math.random() * 3)+ 0);

var random2 = Math.floor((Math.random() * 3)+ 0);

console.log(random1, random2);

var bot1 = choices[random1];

var bot2 = choices[random2];

console.log(bot1,bot2);

    if(bot1 === "rock"){
        if(bot2 === "scissors"){
            game.win++;
        } else if(bot2 === "paper"){
            game.loss++;
        }
    else if(bot1 === "paper"){
        if(bot2 === "rock"){
            game.win++;
        }else if(bot2 === "scissors"){
            game.loss++;
        }
    } else{
        if(bot2 === "rock"){
            game.loss++;
        } else if (bot2 === "paper"){
            game.win++;
        }
    }
}

var results = " ";

if(game.win >= 0){
    results = "bot1" + " " + "beats" + " " + "bot2";
} else if(game.loss >= 1){
    results = "bot2" + " " + "beats" + " " + "bot1";
} else{
    results = "tie game";
}

console.log(results);

