function solve(arr) {
    let result = [];
    let arrLength = arr.length;

    arr = arr.sort((a, b) => a - b);

    for (let i = 0; i < arrLength; i++) {
        if (i % 2 == 0) {
            result[i] = arr.pop();
        } else {
            result[i] = arr.shift();
        }
    }

    console.log(result.join(" "));
}

solve([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);