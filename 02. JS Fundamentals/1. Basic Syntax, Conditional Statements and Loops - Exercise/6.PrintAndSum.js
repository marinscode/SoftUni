function solve(start, end) {
    let sum = 0;
    let string = ``;
    for (let i = start; i <= end; i++) {
        string += `${i} `;
        sum += i;
    }
    console.log(string.trim());
    console.log(`Sum: ${sum}`);
}

solve(5, 10);