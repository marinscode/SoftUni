function solve(arr) {
    let [biscuits, workers, totalBiscuitsFromOtherFactory] = arr.map(v => Number(v));
    let thirdDay = Math.floor(biscuits * workers * 0.75);
    let countBiscuitsPerMonth = Math.floor(biscuits * workers * 20 + thirdDay * 10);
    let percent;

    console.log(`You have produced ${countBiscuitsPerMonth} biscuits for the past month.`);

    if (countBiscuitsPerMonth > totalBiscuitsFromOtherFactory) {
        percent = (countBiscuitsPerMonth - totalBiscuitsFromOtherFactory) / totalBiscuitsFromOtherFactory * 100;
        console.log(`You produce ${percent.toFixed(2)} percent more biscuits.`);
    } else {
        percent = (totalBiscuitsFromOtherFactory - countBiscuitsPerMonth) / totalBiscuitsFromOtherFactory * 100;
        console.log(`You produce ${percent.toFixed(2)} percent less biscuits.`);
    }
}

solve(['78', '8', '16000']);
solve(["163",
    "16",
    "67020"]
);