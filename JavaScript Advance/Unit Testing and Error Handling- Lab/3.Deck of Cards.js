function printDeckOfCards(cards) {

    function makeCard(face, suit) {

        let faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        let suits = ['S', 'H', 'D', 'C'];

        if(!faces.includes(face)) throw new Error('Invalid face');
        if(!suits.includes(suit)) throw new Error('Invalid suit');

        let card = {
            face: face,
            suit : suit,
            toString: () =>{
                let makeUtf = {
                    'S': '\u2660',
                    'H': '\u2665',
                    'D': '\u2666',
                    'C': '\u2663'
                };

                return `${card.face}${makeUtf[card.suit]}`
            }
        };

        return card;
    }

    let deck = [];
    for (let cardStr of cards) {
        let face = cardStr.substring(0, cardStr.length-1);
        let suit = cardStr[cardStr.length - 1];
        try {
            deck.push(makeCard(face, suit));
        }
        catch (err) {
            console.log("Invalid card: " + cardStr);
            return;
        }
    }
    console.log(deck.join(' '));
}

console.log(printDeckOfCards(['AS', '10D', 'KH', '2C']));
