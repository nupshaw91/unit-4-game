
var player = 100;
var enemy = 100;
var game = [
    cast = ["yoda", "quiGon", "obiWan", "emperorPalpatine", "darthVader", "kyloRen"],
    health = 100,
    playerHit = Math.floor(Math.random() * 12),
    enemyCounter = Math.floor(Math.random() * 6),
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
            if (cast.length >= 6) {
                playerOne()
            }
            else {
                playerTwo()
            }
        }
        $(player).click(combatants)





    };




    // console.log(cast)
    //     $("#yoda").click(function () {
    //         for (let i = 0; i < cast.length; i++) {

    //         if (".player" == "#" + cast[i]){

    //         $("#yoda").appendTo(".opponent")}

    //         else $("#yoda").appendTo(".player");
    //         }
    //           console.log(cast[1]);
    //     });

    //     $("#quiGon").click(function () {

    //         for (let i = 0; i < cast.length; i++) {
    //         if (".player" ===   cast[i]){     
    //         $("#quiGon").appendTo(".opponent")}
    //         else $("#quiGon").appendTo(".player");
    //         }
    //         console.log("quigon was clicked");
    //     // });
    //     // $("#obiWan").click(function () {
    //     //     console.log("obi was clicked");
    //     // });

    //     // $("#emperorPalpatine").click(function () {
    //     //     console.log("palpatine was clicked");
    //     // });
    //     // $("#darthVader").click(function () {
    //     //     console.log("vader was clicked");
    //     // });

    //     // $("#kyloRen").click(function () {
    //     //     console.log("kylo was clicked");
    //     // });

    //     $(".attack").click(function () {
    //         attack()
    //         $("#player").text(player)
    //         counterAttack()
    //         $("#opponent").text(enemy)

    //     });
    // };

    // Player Health bar
    $("#player").text(game.player)
    // Enemy Health bar
    $("#opponent").text(game.health)

    // Player selection

    function playerSelect() {

    }

    // Enemy selection
    ;
    function opponentSelect() {

    }

    // Player Attack

    function attack() {
        return enemy -= playerHit;
    }

    // Enemy Counter Attack
    function counterAttack() {
        return player -= enemyCounter;
    }
    //round end add player health bonus for win


};
