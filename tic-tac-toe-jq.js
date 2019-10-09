

// var $sq1 = $("#sq1")
// var $sq2 =$("#sq2")
// var $sq3 =$("#sq3")
// var $sq4 =$("#sq4")
// var $sq5 =$("#sq5")
// var $sq6 =$("#sq6")
// var $sq7 =$("#sq7")
// var $sq8 =$("#sq8")
// var $sq9 =$("#sq9")

var $sq = $("td");


var playerTurn = 1;

$sq.on("click", takeTurn);

//Initialize event listeners
$(".btn").on("click", resetBoard);
function resetBoard(e) {
    $sq.attr("class", "");
    playerTurn = 1;
    $sq.on("click",takeTurn);
    //display current player number

    $("#player-turn").text(playerTurn);

}

function takeTurn(e) {
    var haveWinner = false;
    console.log("player", playerTurn, "turn", $(this));
    //if the squrs is occupied do nothing
    if ($(this).attr("class")) {
        return;
    }
    //display x or o based on who's turn it is.
    if (playerTurn == 1) {
        //draw x
        $(this).addClass("x");
    } else {
        //draw o
        $(this).addClass("o");
    }
    // check if the player just won (the last click).

    haveWinner = checkForWinner();
    if (haveWinner) {
        //do winning stuff
        alert("you won")
        $sq.off("click")
        haveWinner = true;
    } else {
        // check for a tie
        var haveTie = false
        haveTie = checkForTie();
         if (haveTie){
             alert("we have a tie")
         };
        // do not-winning stuff, e.g. switch player turn.

        if (playerTurn == 1) {
            playerTurn = 2;
        } else {
            playerTurn = 1;
        }
        //display current player number

        $("#player-turn").text(playerTurn);
    }

}

function checkForWinner() {
    var steaks =[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
    for (steak of steaks){
        var s0 = $($sq[steak[0]]).attr("class")
        var s1 = $($sq[steak[1]]).attr("class")
        var s2 = $($sq[steak[2]]).attr("class")
 if ((s0!=undefined && s0!="" ) && s0==s1 && s0==s2){  
 return true;
}
    }
return false;
}

function checkForTie() {
   
    for(sq of $sq ){
           if($(sq).attr("class") != "x" && $(sq).attr("class") != "o"){
               return false
           } 
        }
        return true
   }
resetBoard();