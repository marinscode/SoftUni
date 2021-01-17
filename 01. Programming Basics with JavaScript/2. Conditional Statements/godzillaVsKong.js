function godzillaVsKong(input) {
    let budget = Number(input[0]);
    let statistes = Number(input[1]);
    let priceDressOfStatist = Number(input[2]);

    let decorPrice = budget * 0.1;
    let dressesPrice = statistes * priceDressOfStatist;

    if(statistes > 150) {
        dressesPrice *= 0.9;
    } 

    let totalPrice = decorPrice + dressesPrice;
    let remainingBudget = Math.abs(budget - totalPrice);

    if (budget < totalPrice) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${remainingBudget.toFixed(2)} leva more.`);
    } else {
        console.log("Action!");
        console.log(`Wingard starts filming with ${remainingBudget.toFixed(2)} leva left.`);
    }

}

godzillaVsKong(["15437.62",
"186",
"57.99"])
;