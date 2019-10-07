

var game = [
    cast = ["yoda", "quiGon", "obiWan", "emperorPalpatine", "darthVader", "kyloRen",""],
    playerHit = Math.floor(Math.random() * (15 - 10) + 10),
    enemyCounter = 100,
    // Math.floor(Math.random() * (10 - 3) + 3),
    bonus = 50,
    player = 100,
    enemy = 100,

]

window.onload = function () {

    for (let i = 0; i < cast.length; i++) {
        var player = $("#" + cast[i]);

        player.addClass("player");
        player.attr("data-cast", cast[i]);

        function playerOne() {
            $("#" + cast[i]).appendTo("#player")
            cast.length--;
            console.log("You did it");
        };
        function playerTwo() {
            console.log("why didn't i append");
            $("#" + cast[i]).appendTo("#opponent");
        };
        function combatants() {
            if (cast.length >= 7) {
                playerOne()
            }
            else {
                playerTwo()
            }
        }
        $(player).click(combatants)
    };
    // Player Health bar
    $("#playerHealth").text(game[4]);
    // Enemy Health bar
    $("#opponentHealth").text(game[5]);

    // Game funtions attached to aatack button.
    // Health deductions
    // Opponent clear or Game Restart
    $(".attack").click(function () {
        attack()
        $("#playerHealth").text(game[4])
        counterAttack()
        $("#opponentHealth").text(game[5])
        next()
        $("#playerHealth").text(game[4])
        $("#opponentHealth").text(game[5])
        gameOver() 
    });
    function attack() {
        return game[5] -= game[1];

    }

    // Enemy Counter Attack
    function counterAttack() {
        return game[4] -= game[2];
    }

    //round end add player health bonus for win and clear opponent
    function next() {
    if (game[5] <= 0) {
        game[5] = 100;
        game[4] = game[4] + game[3];
        $("#opponent").empty();
    }
}
    function gameOver(){
        if (game[4] <= 0) {
        location.reload();
        }
    }


};
