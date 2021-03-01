function solve(input) {
    let paintBuckets = Number(input[0]);
    let wallPaperRolls = Number(input[1]);
    let glovesPrice = Number(input[2]);
    let brushPrice = Number(input[3]);
    let glovesQuantity = Math.ceil(0.35 * wallPaperRolls);
    let brushQuantity = Math.floor(0.48 * paintBuckets);

    let totalPaintPrice = paintBuckets * 21.50;
    let totalWallPaperPrice = wallPaperRolls * 5.20;
    let totalGlovesPrice = glovesQuantity * glovesPrice;
    let totalBrushPrice = brushPrice * brushQuantity;
    let totalPrice = totalBrushPrice + totalWallPaperPrice + totalGlovesPrice + totalPaintPrice;
    let delivery = totalPrice / 15;

    console.log(`This delivery will cost ${delivery.toFixed(2)} lv.`);
}

solve(['10',
    '8',
    '2.2',
    '5',
])