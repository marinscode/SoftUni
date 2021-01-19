function cleverLily(input) {
    let age = Number(input[0]);
    let washingMachinePrice = Number(input[1]);
    let toyPrice = Number(input[2]);
    let savings = 0;
    let money = 10;
    let toys = 0;

    for (let i = 1; i <= age; i++) {
        if (i % 2 == 0) {
            savings += money;
            money += 10;
            savings--;
        } else {
            toys++;
        }
    }

    savings = savings + toys * toyPrice;

    if(savings >= washingMachinePrice) {
        console.log(`Yes! ${(savings - washingMachinePrice).toFixed(2)}`);
    } else {
        console.log(`No! ${(washingMachinePrice - savings).toFixed(2)}`);
    }
} 

cleverLily(["21", "1570.98", "3"]);