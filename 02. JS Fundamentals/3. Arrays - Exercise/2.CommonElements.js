function solve(firstArr, secondArr) {
    let matches = [];
    for (let i = 0; i < firstArr.length; i++) {
        for (let j = 0; j < secondArr.length; j++) {
            if (firstArr[i] === secondArr[j]) {
                matches.push(firstArr[i]);
            }
        }
    }

    console.log(matches.join('\n'));
}

solve(['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2']
);