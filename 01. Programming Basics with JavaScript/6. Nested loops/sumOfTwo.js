function solve(input) {
    let start = Number(input.shift());
    let end = Number(input.shift());
    let magicNumber = Number(input.shift());
    let counter = 0;
    let result = 0;
    let found = false;

    for (let i = start; i <= end; i++) {
        for (let k = start; k <= end; k++) {
            result = i + k;
            counter++;
            if (result == magicNumber) {
                console.log(`Combination N:${counter} (${i} + ${k} = ${result})`);
                found = true;
                break;
            }
        }
        if (found) {
            break;
        }

    }

    if (!found) {
        console.log(`${counter} combinations - neither equals ${magicNumber}`);
    }
}

solve(["88",
    "888",
    "2000"]);