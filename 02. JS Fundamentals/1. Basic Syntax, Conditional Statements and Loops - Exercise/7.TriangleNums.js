function solve(n) {
    for( let i = 1; i<= n; i++) {
        let string = ``;
        for (let j = 1; j <= i; j++) {
            string += `${i} `;
        }
        console.log(string.trim());
    }
}

solve(3);