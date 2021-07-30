function cardGame(input) {
    let players = {};
    let cards = [];
    let card = [];
    let power = '';
    let type = '';
    let resultArray = [];

    for (let line of input) {
        let tokens = line.split(': ');
        let name = tokens[0];
        cards = tokens[1].split(', ');
        if (!players[name]) {
            players[name] = cards.toString();
        } else {
            players[name] += ',' + cards;
        }
    }

    for (let obj in players) {
        let set = new Set(players[obj].split(','));
        cards = Array.from(set);
        players[obj] = cards;
    }

    for (let key in players) {
        let sum = 0;
        resultArray = players[key];
        for (let i = 0; i < resultArray.length; i++) {
            card = resultArray[i].split("");
            type = card.pop();
            for (const num of card) {
                if (num === 'J') {
                    power = 11;
                } else if (num === 'Q') {
                    power = 12;
                } else if (num === 'K') {
                    power = 13;
                } else if (num === 'A') {
                    power = 14;
                } else {
                    power += num;
                }
            }
            switch (type) {
                case 'S':
                    sum += Number(power) * 4;
                    break;
                case 'H':
                    sum += Number(power) * 3;
                    break;
                case 'D':
                    sum += Number(power) * 2;
                    break;
                case 'C':
                    sum += Number(power) * 1;
                    break;
            }
            power = '';
        }
        console.log(`${key}: ${sum}`);
    }
}

cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]);