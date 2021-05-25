function solve(number, precision) {
    if (precision >= 15) {
        precision = 15;
    }
    let roundedNumber = Number(number).toFixed(precision);
    roundedNumber = parseFloat(roundedNumber);
    console.log(roundedNumber);
}

solve(10.5, 3);