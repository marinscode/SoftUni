function solve(stocksArr, ordersArr) {
    let result = {};

    for (let i = 0; i < stocksArr.length; i++) {
        if (i % 2 === 1) {
            result[stocksArr[i - 1]] = Number(stocksArr[i]);
        }
    }

    for (let i = 0; i < ordersArr.length; i++) {
        if (i % 2 === 1) {
            if (!result.hasOwnProperty(ordersArr[i - 1])) {
                result[ordersArr[i - 1]] = Number(ordersArr[i]);
            } else {
                result[ordersArr[i - 1]] += Number(ordersArr[i]);
            }
        }
    }

    for (let stock in result) {
        console.log(`${stock} -> ${result[stock]}`);
    }
}

solve([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
);