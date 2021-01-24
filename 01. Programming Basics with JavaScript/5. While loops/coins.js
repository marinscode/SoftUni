function solve(input) {
    let change = Math.round(Number(input[0]) * 100);
    let coins = 0;

    while (change > 0) {
        if (change >= 200) {
            coins += Math.trunc(change / 200);
            change = change % 200;
        }
        if (change >= 100) {
            coins += Math.trunc(change / 100);
            change = change % 100;
        }
        if (change >= 50) {
            coins += Math.trunc(change / 50);
            change = change % 50;
        }
        if (change >= 20) {
            coins += Math.trunc(change / 20);
            change = change % 20;
        }
        if (change >= 10) {
            coins += Math.trunc(change / 10);
            change = change % 10;
        }
        if (change >= 5) {
            coins += Math.trunc(change / 5);
            change = change % 5;
        }
        if (change >= 2) {
            coins += Math.trunc(change / 2);
            change = change % 2;
        }
        if (change >= 1) {
            coins += Math.trunc(change / 1);
            change = change % 1;
        }
    }
    console.log(coins);
}

solve(["1.23"]);