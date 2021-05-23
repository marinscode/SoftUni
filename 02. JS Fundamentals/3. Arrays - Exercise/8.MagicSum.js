function solve(arr, sum) {

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if ((arr[i] + arr[j]) === sum) {
                console.log(`${arr[i]} ${arr[j]}`);
            }
        }
    }
}

solve([1, 2, 3, 4, 5, 6],
    6
);