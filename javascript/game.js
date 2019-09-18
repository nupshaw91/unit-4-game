
var player = 100;
var enemy = 100;
var playerHit = Math.floor(Math.random() * 10);
var enemyCounter = Math.random() * 7;
var playerCharacter = ("");
var bonus = 50;


window.onload = function() {
    $(".character").on("$click", playerSelect);
    $(".character").on("$click", opponentSelect);
    $(".attack").on("$click", attack);
};
    // Player Health bar
$("#player").text(player)
   // Enemy Health bar
$("#opponent").text(enemy)

// Player selection

function playerSelect() {
    
}

// Enemy selection
;
function opponentSelect() {
    
}

// Player Attack

function attack() {
    
        
    counterAttack()
}

// Enemy Counter Attack
function counterAttack() {
    
}
    
    
    


//round end add player health bonus for win
