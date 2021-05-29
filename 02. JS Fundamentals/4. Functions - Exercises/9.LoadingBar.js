function solve(percent) {
    let percSymbol = "%";
    let dotSymbol = ".";
    if (percent == 100) {
        console.log("100% Complete!");
        console.log(`[${percSymbol.repeat(percent/10)}]`);
    } else {
        console.log(`${percent}% [${percSymbol.repeat(percent/10)}${dotSymbol.repeat(10-(percent/10))}]`);
        console.log("Still loading...");
    }
}

solve(30);
solve(50);
solve(100);