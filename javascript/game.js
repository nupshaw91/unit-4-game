
var player = 100;
var enemy = 100;
var playerHit = Math.floor(Math.random() * 10);
var enemyCounter = Math.random() * 8;
var playerCharcter = ("");
var bonus = 50;



$(window).onload(function() {

    // Player Health bar
$("#player").text("100")
   // Enemy Health bar
$("#opponent").text("100")

// Player selection
$(".charcter").on("$click", playerSelect);
function playerSelect() {
    
}

// Enemy selection
$(".charcter").on("$click", opponentSelect );
function opponentSelect() {
    
}

// Player Attack
$(".attack").on("$click", attack)
function attack() {
    
    counterAttack();
}

// Enemy Counter Attack
function counterAttack() {
    
}

});