function newHome(input) {
    let flower = input[0];
    let flowerQuantity = Number(input[1]);
    let budget = Number(input[2]);
    let neededMoney = 0;
    let remainingMoney = 0;

    if (flower == 'Roses') {
        neededMoney = flowerQuantity * 5;
        if(flowerQuantity > 80) {
            neededMoney *= 0.9;
        } 
    } else if (flower == 'Dahlias') {
        neededMoney = flowerQuantity * 3.80;
        if(flowerQuantity > 90) {
            neededMoney *= 0.85;
        } 
    } else if (flower == 'Tulips') {
        neededMoney = flowerQuantity * 2.80;
        if(flowerQuantity > 80) {
            neededMoney *= 0.85;
        } 
    } else if (flower == 'Narcissus') {
        neededMoney = flowerQuantity * 3;
        if(flowerQuantity < 120) {
            neededMoney *= 1.15;
        } 
    } else if (flower == 'Gladiolus') {
        neededMoney = flowerQuantity * 2.50;
        if(flowerQuantity < 80) {
            neededMoney *= 1.20;
        } 
    }

    remainingMoney = Math.abs(budget - neededMoney);

    if (budget >= neededMoney) {
        console.log(`Hey, you have a great garden with ${flowerQuantity} ${flower} and ${remainingMoney.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${remainingMoney.toFixed(2)} leva more.`);
    }
}

newHome(["Tulips",
"88",
"260"]
);