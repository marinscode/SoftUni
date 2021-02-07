function solve(input) {
    let n = Number(input[0]);
    let result = '';

    for(let i = 1111; i <= 9999; i++) {
        let num = i.toString();
        let check = '';
        for( let j = 0; j < num.length; j++) {
            if ( n % num[j] === 0) {
                check += num[j];
            }
            if ( check.length == 4) {
                result = result + num + ' ';
            }
        }

    }
    console.log(result);
}

solve(["3"]);