function tradeCommissions(input) {
    let city = input[0];
    let volume = Number(input[1]);
    let commission = 0;

    if (city == 'Sofia') {
        if (volume >= 0 && volume <= 500) {
            commission = volume * 0.05;
        } else if (volume <= 1000) {
            commission = volume * 0.07;
        } else if (volume <= 10000) {
            commission = volume * 0.08;
        } else if (volume > 10000) {
            commission = volume * 0.12;
        } else {
            console.log('error');
        }
    } else if (city == 'Varna') {
        if (volume >= 0 && volume <= 500) {
            commission = volume * 0.045;
        } else if (volume <= 1000) {
            commission = volume * 0.075;
        } else if (volume <= 10000) {
            commission = volume * 0.10;
        } else if (volume > 10000) {
            commission = volume * 0.13;
        } else {
            console.log('error');
        }
    } else if (city == 'Plovdiv') {
        if (volume >= 0 && volume <= 500) {
            commission = volume * 0.055;
        } else if (volume >= 0 && volume <= 1000) {
            commission = volume * 0.08;
        } else if (volume >= 0 && volume <= 10000) {
            commission = volume * 0.12;
        } else if (volume >= 0 && volume > 10000) {
            commission = volume * 0.145;
        } else {
            console.log('error');
        }
    } else {
        console.log('error');
    }

    if (commission != 0) {
        console.log(commission.toFixed(2));
    }
}

tradeCommissions(["Plovdiv", "-20"]);