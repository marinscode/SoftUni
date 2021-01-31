function solve(input) {
    let number = input.shift();
    let primeNums = 0;
    let nonPrimeNums = 0;

    while (number != 'stop') {
        let isPrime = true;
        number = Number(number);
        if (number < 0) {
            console.log('Number is negative.');
            number = input.shift();
            continue;
        } else if (number == 0 || number == 1) {
            isPrime = false;
        }

        if (number == 2) {
            primeNums += number;
        } else {
            for (let i = 2; i < number; i++) {
                if (number % i === 0 && i != number) {
                    isPrime = false;
                    break;
                }
            }
        }

        if (isPrime) {
            primeNums += number;
        } else {
            nonPrimeNums += number;
        }
        number = input.shift();
    }

    console.log(`Sum of all prime numbers is: ${primeNums}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeNums}`);

}

solve(["3",
    "9",
    "0",
    "7",
    "19",
    "4",
    "stop"]);