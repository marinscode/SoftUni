function solve(array) {
    let result = 'no';
    for (let i = 0; i < array.length; i++) {
        let rightSum = 0;
        let leftSum = 0;
        for (let j = 0; j < i; j++) {
            leftSum += array[j];
        }

        for (let k = array.length - 1; k > i; k--) {
            rightSum += array[k];
        }

        if (leftSum === rightSum) {
            result = i;
            break;
        }
    }

    console.log(result);
}

solve([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);