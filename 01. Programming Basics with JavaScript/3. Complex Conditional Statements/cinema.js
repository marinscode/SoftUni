function cinema(input) {
    let typeProjection = input[0];
    let rows = Number(input[1]);
    let columns = Number(input[2]);
    let income = 0;

    if (typeProjection == 'Premiere') {
        income = rows * columns * 12.0;
    } else if (typeProjection == 'Normal') {
        income = rows * columns * 7.50;
    } else if ( typeProjection == 'Discount') {
        income = rows * columns * 5.00;
    }

    console.log(`${income.toFixed(2)} leva`);
}

cinema();