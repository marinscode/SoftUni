function solve(input) {
    let line = input.shift();
    let destination;
    let savings = 0;
    let neededMoney;

    while (line != 'End') {
        if (typeof (line) == "string") {
            destination = line;
            neededMoney = Number(input.shift());
            savings = 0;
        } 
        line = Number(input.shift());
        savings += line;
        if (savings >= neededMoney) {
            line = input.shift();
            console.log(`Going to ${destination}!`);
        }
    }
}

solve(["France",
"2000",
"300",
"300",
"200",
"400",
"190",
"258",
"360",
"Portugal",
"1450",
"400",
"400",
"200",
"300",
"300",
"Egypt",
"1900",
"1000",
"280",
"300",
"500",
"End"]);