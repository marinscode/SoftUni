function solve(array) {
    let resultArr = [];
    let sumOrgArr = 0;
    let sumFinalArr = 0;
    for (let i = 0; i < array.length; i++) {
        let modifyNum = array[i];
        if (array[i] % 2 === 0) {
            modifyNum = array[i] + i;
        } else {
            modifyNum = array[i] - i;
        }

        sumOrgArr += array[i];
        sumFinalArr += modifyNum;

        resultArr.push(modifyNum);
    }

    console.log(resultArr);
    console.log(sumOrgArr);
    console.log(sumFinalArr);
}

solve([5, 15, 23, 56, 35]);