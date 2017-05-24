
function ChessBoard(number) {

    console.log('<div class="chessboard">')
    for (i = 1; i <=number ; i++){
        console.log("<div>")
        if(i % 2 == 0){
            console.log('<span class="black"></span>');
        }
        if (i % 2 != 0){
            console.log('<span class="white"></span>');
        }
        console.log("</div>")
    }

    console.log("</div>")
}

ChessBoard(3);