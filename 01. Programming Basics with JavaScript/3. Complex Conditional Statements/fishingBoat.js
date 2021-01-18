function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let group = Number(input[2]);
    let boatPrice;
    let remainingMoney = 0;

    if (season == 'Spring') {
        boatPrice = 3000;
        if (group <= 6) {
            boatPrice *= 0.9;
        } else if (group > 6 && group <= 11) {
            boatPrice *= 0.85;
        } else if (group > 11) {
            boatPrice *= 0.75;
        }

        if (group % 2 === 0) {
            boatPrice *= 0.95;
        }
    } else if (season == 'Summer' || season == 'Autumn') {
        boatPrice = 4200;
        if (group <= 6) {
            boatPrice *= 0.9;
        } else if (group > 6 && group <= 11) {
            boatPrice *= 0.85;
        } else if (group > 11) {
            boatPrice *= 0.75;
        }

        if (group % 2 === 0 && season != 'Autumn') {
            boatPrice *= 0.95;
        }
    } else if (season == 'Winter') {
        boatPrice = 2600;
        if (group <= 6) {
            boatPrice *= 0.9;
        } else if (group > 6 && group <= 11) {
            boatPrice *= 0.85;
        } else if (group > 11) {
            boatPrice *= 0.75;
        }

        if (group % 2 === 0) {
            boatPrice *= 0.95;
        }
    }

    remainingMoney = Math.abs(budget - boatPrice);

    if(budget >= boatPrice) {
        console.log(`Yes! You have ${remainingMoney.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${remainingMoney.toFixed(2)} leva.`);
    }
}

fishingBoat(["3000",
"Summer",
"11"]
);