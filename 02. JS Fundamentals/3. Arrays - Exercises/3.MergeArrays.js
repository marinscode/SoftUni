function solve(firstArr, secondArr) {
    let resultArr = [];
    for (let i = 0; i < firstArr.length; i++) {
        let temp;
        if (i % 2 === 0) {
            temp = 0;
            temp = Number(firstArr[i]) + Number(secondArr[i]);
        } else {
            temp = '';
            temp = firstArr[i] + secondArr[i];
        }
        resultArr.push(temp);
    }

    console.log(resultArr.join(' - '));
}

solve(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']
);