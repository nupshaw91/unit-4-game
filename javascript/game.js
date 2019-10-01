
var player = 100;
var enemy = 100;
var playerHit = Math.floor(Math.random() * 12);
var enemyCounter = Math.floor(Math.random() * 6);
var playerCharacter = ("");
var bonus = 50;
var cast = ["Yoda", "quiGon", "obiWan", "emperorPalatine", "darthVader", "kyloRen"];



window.onload = function () {
    $("#yoda").click(function () {
        for (let i = 0; i < cast.length; i++) {
        }
        if (".player" === "#" + cast[i].length){
        $("#yoda").appendTo(".opponent")}

        else $("#yoda").appendTo(".player");

        //   console.log(cast);
    });

    $("#quiGon").click(function () {
        for (let i = 0; i < cast.length; i++) {
        }
        if (".player" === "#" + cast[i].length){
        $("#quiGon").appendTo(".opponent")}

        else $("#quiGon").appendTo(".player");

        console.log("quigon was clicked");
    });
    $("#obiWan").click(function () {
        console.log("obi was clicked");
    });

    $("#emperorPalpatine").click(function () {
        console.log("palpatine was clicked");
    });
    $("#darthVader").click(function () {
        console.log("vader was clicked");
    });

    $("#kyloRen").click(function () {
        console.log("kylo was clicked");
    });

    $(".attack").click(function () {
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
    return enemy -= playerHit;
}

// Enemy Counter Attack
function counterAttack() {
    return player -= enemyCounter;
}
 //round end add player health bonus for win



