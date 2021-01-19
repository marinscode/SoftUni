function dividableNums(input){
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let sum = 0;
    let string = '';

    for(let i = num1; i <= num2; i++) {
        if ( i % 9 == 0) {
            sum += i;
            string = string + i + '\n';
        }
    }
    console.log(`The sum: ${sum}`);
    console.log(string);

}

dividableNums(['100', '200']);