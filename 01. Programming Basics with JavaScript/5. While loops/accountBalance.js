function accountBalance(input) {
    let sum = 0;
    let index = 0;

    while ( input[index] != 'NoMoreMoney') {
        let num = Number(input[index]);
        if(num < 0) {
            console.log('Invalid operation!');
            break;
        }
        sum += num;
        console.log(`Increase: ${num.toFixed(2)}`);
        index++;
    }

    console.log(`Total: ${sum.toFixed(2)}`);
}

accountBalance(["120",
"45.55",
"-150"]);