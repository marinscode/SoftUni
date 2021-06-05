function solve(numbersArr, bombArr) {
    let [number, power] = bombArr;
    let sum = 0;

    while (numbersArr.includes(number)) {
        let index = numbersArr.indexOf(number);
        let startIndex = index - power;
        let countToEnd = power * 2 + 1;

        if(startIndex < 0) {
            countToEnd += startIndex;
            startIndex = 0;
        }
        numbersArr.splice(startIndex, countToEnd);
    }

    numbersArr = numbersArr.map(Number);

    console.log(numbersArr.reduce((a, b) => a + b, 0));
}

solve([1, 4, 1, 1, 1, 1, 1, 4, 1], [4, 2]);