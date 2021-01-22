function maxNumber(input) {
    let maxNum = Number.MIN_SAFE_INTEGER;
    let index = 0;

    while (input[index] != 'Stop') {
        let num = Number(input[index]);
        if(num > maxNum) {
            maxNum = num;
        }
        index++;
    }
    console.log(maxNum);
}

maxNumber(["100",
"99",
"80",
"70",
"Stop"]);