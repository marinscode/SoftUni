function solve(numbersArr, arr) {
    let [length, elements, numSearch] = arr;
    let numOccurs = 0;

    numbersArr = numbersArr.slice(elements, length);

    for (let i = 0; i < numbersArr.length; i++) {
        if (numbersArr[i] == numSearch) {
            numOccurs++;
        }
    }

    console.log(`Number ${numSearch} occurs ${numOccurs} times.`);
}

solve([5, 2, 3, 4, 1, 6],
    [5, 2, 3]
);