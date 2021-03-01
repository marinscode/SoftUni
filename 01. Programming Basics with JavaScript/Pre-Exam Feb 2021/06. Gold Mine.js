function solve(input) {
    let locations = Number(input.shift());
    
    for (let i = 1; i <= locations; i++) {
        let avgGold = 0;
        let expectedAvgGold = Number(input.shift());
        let days = Number(input.shift());
        for(let j = 0; j < days; j++) {
            avgGold += Number(input.shift());
        }
        avgGold /= days;
        if(avgGold >= expectedAvgGold ){
            console.log(`Good job! Average gold per day: ${avgGold.toFixed(2)}.`); 
        } else {
            console.log(`You need ${(expectedAvgGold - avgGold).toFixed(2)} gold.`);
        }
    }
}

solve(["2",
    "10",
    "3",
    "10",
    "10",
    "11",
    "20",
    "2",
    "20",
    "10"]);