function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let overNight;
    let destination;
    let spentMoney;

    if(budget <= 100) {
        destination = 'Bulgaria';
        if(season == 'summer') {
            overNight = 'Camp';
            spentMoney = budget * 0.30;
        } else if (season == 'winter') {
            overNight = 'Hotel';
            spentMoney = budget * 0.70;
        }
    } else if(budget <= 1000) {
        destination = 'Balkans';
        if(season == 'summer') {
            overNight = 'Camp';
            spentMoney = budget * 0.40;
        } else if (season == 'winter') {
            overNight = 'Hotel';
            spentMoney = budget * 0.80;
        }
    } else if(budget > 1000) {
        destination = 'Europe';
        spentMoney = budget * 0.90;
        overNight = 'Hotel'
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${overNight} - ${spentMoney.toFixed(2)}`);
}

journey(["1500", "summer"]);