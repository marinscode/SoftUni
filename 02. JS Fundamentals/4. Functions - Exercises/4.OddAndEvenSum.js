function solve(num) {
    let evenSum = 0;
    let oddSum = 0;
    let numToString = num.toString();

    for (let i = 0; i < numToString.length; i++) {
        let number = Number(numToString[i]);
        if (number % 2 === 0) {
            evenSum += number;
        } else {
            oddSum += number;
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

solve(1000435);