function solve(n) {
    let current = 1;
    let isBigger = false;
    let printCurrentLine = '';

    for (let rows = 1; rows <= Number(n); rows++) {
        for (let cols = 1; cols <= rows; cols++) {
            if (current > n) {
                isBigger = true;
                break;
            }
            printCurrentLine += current + " ";
            current++;
        }
        console.log(printCurrentLine);
        printCurrentLine = '';
        if (isBigger) {
            break;
        }
    }
}

solve(['7']);