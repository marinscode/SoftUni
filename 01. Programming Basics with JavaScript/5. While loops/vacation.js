function vacation(input) {
    let neededMoney = Number(input.shift());
    let savedMoney = Number(input.shift());
    let days = 0;
    let spendingDays = 0;

    while (savedMoney < neededMoney && spendingDays < 5) {
        let command = input.shift();
        let money = Number(input.shift());

        if (command == 'save') {
            savedMoney += money;
            spendingDays = 0;
        } else if (command == 'spend') {
            spendingDays++;
            savedMoney -= money;
        }
        if (savedMoney < 0) {
            savedMoney = 0;
        }
        days++;
    }

    if (neededMoney <= savedMoney) {
        console.log(`You saved the money for ${days} days.`);
    }

    if (spendingDays == 5) {
        console.log("You can't save the money.");
        console.log(spendingDays);
    }
}

vacation(["2000",
    "1000",
    "spend",
    "1200",
    "save",
    "2000"]);