function solve(number) {
    if (number % 2 == 0) {
        let tempNum = 0;
        for (let i = 1; i <= number / 2 + 1; i++) {
            if (number % i == 0) {
                tempNum += i;
            }
        }
        if (tempNum == number) {
            console.log("We have a perfect number!");
        } else {
            console.log("It's not so perfect.")
        }
    } else {
        console.log("It's not so perfect.");
    }
}

solve(6);
solve(28);
solve(1236498);