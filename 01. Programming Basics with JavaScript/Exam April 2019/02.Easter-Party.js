function solve(input) {
    let guests = Number(input.shift());
    let partyPrice = Number(input.shift());
    let budget = Number(input.shift());
    let cakePrice = 0.10 * budget;
    let result = 0;

    if (guests >= 10 && guests <= 15) {
        partyPrice *= 0.85;
    } else if (guests > 15 && guests <= 20) {
        partyPrice *= 0.80;
    } else if (guests > 20) {
        partyPrice *= 0.75;
    }

    result = (guests * partyPrice) + cakePrice;

    if(result <= budget) {
        console.log(`It is party time! ${(budget - result).toFixed(2)} leva left.`);
    }  else {
        console.log(`No party! ${(result - budget).toFixed(2)} leva needed.`);
    }
}

solve(['18',
    '30',
    '450']);