function solve(firstNum, secondNum) {
    let firstFactorial = factorial(firstNum);
    let secondFactorial = factorial(secondNum);

    function factorial(num) {
        let factorial = 1;
        for (let i = 1; i <= num; i++) {
            factorial *= i;
        }

        return factorial;
    }

    console.log((firstFactorial/secondFactorial).toFixed(2));
}

solve(5, 2);