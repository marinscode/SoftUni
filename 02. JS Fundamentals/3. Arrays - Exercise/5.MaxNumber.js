function solve(array) {
    let result = [];
    while (array.length !== 0) {
        let [current, biggest] = [array.shift(), Math.max(...array)];
        if (current > biggest) {
            result.push(current);
        }
    }
    console.log(result.join(' '));
}

solve([14, 24, 3, 19, 15, 17]);