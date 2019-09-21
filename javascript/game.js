
var player = 100;
var enemy = 100;
var playerHit = Math.floor(Math.random() * 10);
var enemyCounter = Math.floor(Math.random() * 7);
var playerCharacter = ("");
var bonus = 50;


window.onload = function() {
    $("#yoda").click(function(){
      $('<img id="Yoda" class= "cast" src="./images/Yoda.jpg" alt="Yoda" height="250px" width="250px">').appendTo(".player")
    });

    $("#quiGon").click(function(){

    });
    $("#obiWan").click(function(){

    });

    $("#emperorPalpitine").click(function(){

    });
    $("#darthVader").click(function(){

    });

    $("#kyloRen").click(function(){

    });

    $(".attack").click(function() {
        attack()
        $("#player").text(player)
        counterAttack()
        $("#opponent").text(enemy)
        
    });
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
   return enemy-=playerHit;
}

// Enemy Counter Attack
function counterAttack() {
    return player-=enemyCounter;
}
 //round end add player health bonus for win   
    

    if (enemy <= 0) {
        var enemy = 100;
        
    }
    